package com.luv2code.hibernate.demo.entity;

import java.util.LinkedList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.Cascade;

@Entity
@Table(name = "instructor", schema = "relations")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Instructor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email")
    private String email;
    //mappping to InstructorDetail,cascading all operations,owning side
    @OneToOne(cascade = CascadeType.ALL)
    //name = FK column name
    @JoinColumn(name = "instructor_detail_id", referencedColumnName = "id")
    private InstructorDetail instructorDetail;
    //mapping to courses
    @OneToMany(mappedBy = "instructor",
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH},
            fetch = FetchType.LAZY)
    //hibernate-specific annotation for hibernate methods
    //@Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    private List<Course> courseList;

    public Instructor(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    /**
    Conviniet method for bi-directional relationship
    @param course
    @return 
     */
    public Instructor addCourse(Course course) {
        if (courseList == null) {
            courseList = new LinkedList();
        }
        courseList.add(course);
        course.setInstructor(this);
        return this;
    }

}
