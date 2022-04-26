package at.htl.control;

import at.htl.entity.Person;
import io.quarkus.runtime.StartupEvent;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;
import javax.inject.Inject;
import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.Month;

@ApplicationScoped
public class InitBean {

    @Inject
    PersonRepository repository;

    @Transactional
    void init(@Observes StartupEvent event) {
        repository.persist(
            new Person("Jonas", LocalDate.of(2003, Month.JUNE, 3), "dorfi@gmail.com")
        );

        repository.persist(
            new Person("Meris", LocalDate.of(2003, Month.APRIL, 14), "meris@gmail.com")
        );

        repository.persist(
            new Person("Lukas", LocalDate.of(2002, Month.OCTOBER, 14), "lukas@gmail.com"));

        repository.persist(
            new Person("Rosi", LocalDate.of(2003, Month.MARCH, 14), "rosi@gmail.com")
        );

        repository.persist(
            new Person("Florian", LocalDate.of(2003, Month.APRIL, 14), "flo@gmail.com")
        );

        repository.persist(
            new Person("Nina", LocalDate.of(2003, Month.FEBRUARY, 23), "nina@gmail.com")
        );
    }
}
