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
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "course", schema = "relations")
@NoArgsConstructor
@Getter
@Setter
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "title")
    private String title;
    //do not cascading deletes on purpuse
    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    //FK column, this class is the owning side
    @JoinColumn(name = "instructor_id")
    private Instructor instructor;

    @ManyToMany(fetch = FetchType.LAZY, cascade
            = {CascadeType.DETACH, CascadeType.MERGE,
                CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinTable(name = "course_student", schema = "relations",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "student_id"))

    private List<Student> students = new LinkedList();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id")
    private List<Review> reviewList;

    public Course(String title) {
        this.title = title;
    }

    public Course addReview(Review review) {
        if (reviewList == null) {
            reviewList = new LinkedList();
        }
        reviewList.add(review);
        return this;
    }

    public Course addStudent(Student student){
        students.add(student);
        return this;
    }

    @Override
    public String toString() {
        return "Course{" + "id=" + id + ", title=" + title + '}';
    }
    
    

}
