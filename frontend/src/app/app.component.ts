import { Component, OnInit } from '@angular/core';
import { PersonService } from './services/person.service';
import { Person } from './models/models';
import { MatDialog } from '@angular/material/dialog';
import { PersonFormComponent } from './components/person-form/person-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  public persons: Person[] | null;

  constructor(private readonly personService: PersonService,
              private readonly dialog: MatDialog) {
    this.persons = null;
  }

  ngOnInit(): void {
    this.personService.getPersons().subscribe(persons => this.persons = persons);
    this.personService.fetchPersons();
  }

  create(): void {
    this.dialog.open(PersonFormComponent).afterClosed().subscribe(person => {
      this.personService.createPerson(person);
    });
  }
}
