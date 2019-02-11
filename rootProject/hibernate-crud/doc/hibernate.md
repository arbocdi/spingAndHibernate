### Hibernate Architecture
* см. hibernate-crud project
![architecture](architecture.jpg)
* <b>SessionFactory</b> - Это фабрика для сессий и клиент ConnectionProvider. Содрежит опциональный L2 кеш сущностей. Конфигурируется xml-файлом:
```java
SessionFactory factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Student.class)
                .buildSessionFactory();
```
* <b>session</b> object provides an interface between the application and data stored in the database. It is a short-lived object and wraps the JDBC connection. It is factory of Transaction, Query and Criteria. It holds a first-level cache (mandatory) of data. The org.hibernate.Session interface provides methods to insert, update and delete the object. It also provides factory methods for Transaction, Query and Criteria.
* <b>Transaction</b>
The transaction object specifies the atomic unit of work. It is optional. The org.hibernate.Transaction interface provides methods for transaction management.
* <b>ConnectionProvider</b>
It is a factory of JDBC connections. It abstracts the application from DriverManager or DataSource. It is optional.
* <b>TransactionFactory</b> It is a factory of Transaction. It is optional.
* Конфигурационный файл hibernate указывает параметры соединения с БД.

![hibernateObjects](hibernateObjects.png)

### Session
* <b>Persistence context</b> - это кеш, хранящий все управляемые объекты. Привязан к сессии. При чтении объектов в начале опрашивается кеш и только потом БД, это гарантирует repeatable read. При коммите транзакции в БД обновляются только измененные объекты (automatic dirty checking).
* <b>Session</b> == EntityManager.
    1. Сессия представляет собой транзакцию в бд.
    2. Сессия = connection+persistence context.
    3. SessionFactory.getCurrentSession() - возвращает (создает, если не создана) сессию, привязанную к определенному контексту (например потоку), закрывать ее не нужно. Контекст указывается в конфигур. файле hibernate - current_session_context_class
    4. SessionFactory.openSession() - всегда открывает новую сессию, которую необходимо закрывать.
* Пример работы с сессией:
```java
Session session = factory.openSession();
Transaction tx = null;

try {
   tx = session.beginTransaction();
   // do some work
   ...
   tx.commit();
}

catch (Exception e) {
   if (tx!=null) tx.rollback();
   e.printStackTrace();
} finally {
   session.close();
}
```    
* Сущность может пребывать в состояниях:
    1. <b>transient object</b> Объект не присоединенен и никогда не был присоединен к сессии. Это вновь создаваемые объекты.
    2. <b>persistent object</b> Объект присоединенный к конкретной сессии. При работе с объектом данного типа в рамках транзакции все изменения объекта записываются в базу по окончании транзакции. В этом статусе объект имеет(или будет иметь по окончанию транзакции) первичный ключ.
    3. <b>removed</b> Объект, удаление которого запланировано на окончание транзакции. До окончания транзакции объет присоединен к сессии.
    4. <b>detached object</b> Объект отсоединённый от сессии.

  ![entityStates](entityStates.png)
  ![objectStates](objectStates.jpg)
  ![entityLifecycle](entityLifecycle.png)
  ![entityOperations](entityOperations.png)


* <b>persist</b>
  ```java
  Person person = new Person();
  person.setName("John");
  session.persist(person);
  ```
  1. Поcле вызова persist объект person изменяет состояние: transient->persistent.
  2. Объект еще не сохранен в БД.Все изменения, вносимые в объект будут сохранены при коммите транзакции или session.flush(),session.close()
  3. Операция persist применяется ко всем связанным объектам, если указано cascade=PERSIST|ALL в JPA аннотации.
  4. Повторный вызов persist ничего не делает с передаваемой сущностью, но влияет на связанные сущности по пункту 3.
  5. persist(detached entity)->exception

* <b>save</b>(hibernate specific)
  ```java
  Person person = new Person();
  person.setName("John");
  Long id = (Long) session.save(person);
  ```
  1. Гибернат-специфичный метод, сразу сохраняет сущность и возвращает первичный ключ.
  2. save(detached entity)->создаст новую сущность в бд.
  3. каскадное сохранение происходит при указании гибернат-специфичной аннотации:

  ```Java
  @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
  ```
  ```java
  Person person = new Person();
  person.setName("John");
  Long id1 = (Long) session.save(person);
  //отсоединить объект от сессии
  session.evict(person);
  Long id2 = (Long) session.save(person);
  //получим дубликат
  ```
* <b>merge</b> обновляет или создает persistent entity на основе detached или transient объекта:
  1. Получает объект по id из кеша или из базы. Или создает новый.
  2. Копирует остальные поля из передаваемого объекта во вновь созданный.
  3. возвращает persistent объект.
  4. Операция повторяется для всех связанных сущностей с cascade=MERGE|ALL.
  5. Если сущность в состоянии persistent, то метод ничего с ней не делает, связанные сущности обрабатываются аналогично 4.
```java
Person person = new Person();
person.setName("John");
session.save(person);
//remove person from persistence context
session.evict(person);
person.setName("Mary");

Person mergedPerson = (Person) session.merge(person);
```
* <b>update</b>(hibernate specific)
  1. Переводит объект из detached в persistent
  2. Выбрасывает исключение при передаче transient сущности.
  3. Обновляет информацию в базе.
```java
Person person = new Person();
person.setName("John");
session.save(person);
//удалим person из persistence context
session.evict(person);

person.setName("Mary");
session.update(person);
```
* <b>saveOrUpdate</b>(hibernate specific)
  1. transient:сохраняет и переводит в состояние persistent
  2. detached:обновляет и переводит в состояние persistent
  3. Если в рамках одной сессии получить объект по id а затем выполнить saveOrUpdate() для другого объекта с тем же id, то будет выброшено <b>NonUniqueObjectException</b> - т.к. кеш сессии уже содержит объект с данным id. Решение - очистить кеш сессии <b>session.clear()</b>.

* <b>\<T> T get(Class\<T> entityType,Serializable id)</b>(hibernate) Получить объект по его id, возвращает null, если объект не найден.
* <b>\<T> T find(Class\<T> entityClass,
           Object primaryKey)</b> аналогично get.
```java
Student foundStudent = session.get(Student.class,1L);
```
* <b>Query createQuery(String queryString)</b> Создать запрос, используя HQL/JPQL.
```java
//select
Query query = session.createQuery("FROM Student s WHERE s.lastName = :lastName");
query.setParameter("lastName", "Doe");
List<Student> studentList = query.getResultList();
//update
session.createQuery("UPDATE Student SET email = 'foo@gmail.com'").executeUpdate();
//delete
session.createQuery("DELETE FROM Student s WHERE s.id = 5").executeUpdate();
```
* <b>void delete(Object o)</b>(hibernate) - удалить объект из БД.
  1. Сущность либо persistent
  2. Либо transient, но с первичным ключем
  3. Операция каскадируется на связанные сущности если указано cascade="delete"
  4. Удаление происходит при коммите транзакции.
* <b>void remove(Object o)</b>(jpa) - удалить объект из бд. Сущность не должна быть detached.
```java
Student student4 = session.get(Student.class, 4);
session.delete(student4);
```
### ORM Mapping
* id generators. Для создания кастомного генератора нужно унаследоваться от <b>SequenceGenerator</b> и переопределить метод <b>public Serializable generate(...)</b>

![generationTypes](generationTypes.jpg)
* Entity example:
```java
@Entity
@Table(name = "student")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Student {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email")
    private String email;
}
```
* <b>@Temporal</b>
  1. Можно использовать для типов util.Date,Calendar
  2. TemporalType.DATE - сохранит только дату, TIME только время и TIMESTAMP дату и время.
  3. Столбец в бд может иметь тип date,time,timestamp.
```java
@Column(name = "date_of_birth")
@Temporal(TemporalType.TIMESTAMP)
private Date dateOfBirth;
```
### Table Relations
* см. hb-0x projects
* <b>Cascading</b> это применение той же операции к связанным сущностям.

![one2oneCasadeTypes](one2oneCascadeTypes.png)
![one2oneConfigureCascadeType](one2oneConfigureCascadeType.png)

* <b> Relationship directions</b>

![uni-directional](uni-directional.png)
![bi-directional](bi-directional.png)
* <b>Mapping Types</b>
  1. <b>One-to-One</b>
* Uni directional:
![one2one](one2one.png)
```Java
//Instructor.class,owning side
//mappping to InstructorDetail,cascading all operations
@OneToOne(cascade = CascadeType.ALL)
//name = FK column name
//referencedColumnName = PK column name in referenced table
@JoinColumn(name = "instructor_detail_id", referencedColumnName = "id")
private InstructorDetail instructorDetail;
```
* Bi-directional.Чтобы сделать отношение двунаправленным, надо добавить в InstructorDetail:
```java
//InstructorDetail.class
//указываем поле в классе Instructor, которое ссылается на InstructorDetail
@OnetToOne(mappedBy="insctructorDetail")
private Instructor instructor;
```
![one2oneBi](one2oneBi.png)

* <b>Owning side of the relation</b> - это сущность, содержащая внешний ключ.
* При сохранении связанных объектов с каскадированием нужно обязательно устанавливать связанный объект
для сущности-владельца связи:
![bi-directional-saving](bi-directional-saving.png)
```Java
Instructor instructor = new Instructor(...);
InstructorDetail instructorDetail = new InstructorDetail(...);
instructorDetail.setInstructor(instructor);
instructor.setInstructorDetail(instructorDetail);
//save InstructorDetail, with cascading=ALL Instructor is also saved
session.save(instructorDetail);
```
* При удалении связанного объекта (non-owning-side) и без каскадного удаления нужно разорвать связь между объектами в Java со стороны owning entity:
![one2oneDeleting](one2oneDeleting.png)
```Java
InstructorDetail instructorDetail = (InstructorDetail) session.createQuery(...).getSingleResult();
instructorDetail.getInstructor().setInstructorDetail(null);
session.delete(instructorDetail);
```
  2. <b>One-to-Many (bi-directional)</b>

![one2many](one2many.png)
![many2one](many2one.png)

* <b>Fetch Types</b>
  1. Eager - при получении сущности, получить и зависимые сущности.
  2. Lazy - при получении сущности зависимые сущности получаем по запросу.

![defaultFetchTypes](defaultFetchTypes.png)
* Способы получения lazy data:

  1. Вызвать get-методы, итерировать через коллекцию внутри сессии, в которой мы получаем основной объект.
```Java
//inside session
instructorList = ...
for (Instructor instructor : instructorList) {
    for (Course course : instructor.getCourseList()) {
    }
}
```
  2. Использовать JOIN FETCH. При этом загружаются связанные объекты в одном запросе.
```Java
//DISTINCT is used because Instructor object will be returned as many times as many corses it has
Query<Instructor> query = session.createQuery("SELECT DISTINCT i FROM Instructor i JOIN FETCH i.courseList ",Instructor.class);
instructorList = query.getResultList();
```
3. Используя новую транзакцию и <b>path expression</b>:
```Java
//c.instructor.id is a path expression
Query<Course> query = session.createQuery("SELECT c FROM Course c WHERE c.instructor.id = :id");
query.setParameter("id", instructor.getId());
instructor.setCourseList(query.getResultList());
```
4. <b>OneToMany Unidirectional</b>
![one2manyUni](one2manyUni.png)
![one2manyUniJC](one2manyUniJC.png)
![allTables](allTables.png)
* JoinColumn - местонахождение внешнего ключа зависит от контекста:
  1. If the join is for a <span style="color:blue">OneToOne or ManyToOne</span> mapping using a foreign key mapping strategy,
  the foreign key column is in the table of the <span style="color:blue">source entity</span> or embeddable.

  2. If the join is for a <span style="color:blue">unidirectional OneToMany</span> mapping using a foreign key mapping strategy,
  the foreign key is in the table of the <span style="color:blue">target entity</span>.

  3. If the join is for a  <span style="color:blue">ManyToMany mapping or for a OneToOne or bidirectional ManyToOne/OneToMany mapping <b>using a join table</b></span>,
   the foreign key is in a  <span style="color:blue">join table</span>.

  4. If the join is for an  <span style="color:blue">element collection</span>,
  the foreign key is in a  <span style="color:blue">collection table</span>.

5. <b>Many-to-Many</b>
![many2manyJoinTable](many2manyJoinTable.png)
* <b>@JoinTable</b> - это аннотация, описывающая таблицу, с помощью которой отношение many-to-many разюивается на 2 отношения many-to-one.
```sql
CREATE TABLE course_student
(
course_id	integer	NOT NULL REFERENCES relations.course(id),
student_id	integer	NOT NULL REFERENCES relations.student(id),
PRIMARY KEY(course_id,student_id)
)
```
![many2manyJoinTable2](many2manyJoinTable2.png)
![joinTableExample](joinTableExample.png)
![many2manyCourse](many2manyCourse.jpg)
![joinTableCourse](joinTableCourse.png)
![inverseSideStudent](inverseSideStudent.png)
* <b>Inverse side</b> - это сущность, на которую мы ссылаемся из текущей сущности. Добавив @JoinTable в класс Student получим:

![many2manyStudent](many2manyStudent.png)
![joinTableStudent](joinTableStudent.png)

![inverseSideCourse](inverseSideCourse.png)


* Рассматриваемые условия задачи:

![many2manyRequirements](many2manyRequirements.png)
### JPQL exasmples
* Find customers with first or list name like theSearchName:
```Java
TypedQuery<Customer> query = session.
                createQuery("SELECT c FROM Customer c WHERE lower(c.lastName) LIKE :name OR lower(c.firstName) LIKE :name", Customer.class);
query.setParameter("name", "%" + theSearchName.toLowerCase() + "%");
```
