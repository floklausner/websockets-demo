package at.htl.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "WD_PERSON")
public class Person extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column
    public String name;

    @Column
    public LocalDate birthdate;

    @Column
    public String email;

    public Person() {
    }

    public Person(String name, LocalDate birthdate, String email) {
        this.name = name;
        this.birthdate = birthdate;
        this.email = email;
    }

    @Override
    public String toString() {
        return String.format("%s born on %s", this.name, this.birthdate);
    }
}
