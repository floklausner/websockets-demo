import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly personSubject: BehaviorSubject<Person[]>;

  constructor(private readonly backend: BackendService) {
    this.personSubject = new BehaviorSubject<Person[]>([]);
  }

  public fetchPersons(): void {
    this.backend.get<Person[]>('persons').then(persons => {

      persons.map(p => {
        return {
          ...p,
          birthdate: new Date(p as any)
        };
      });

      this.personSubject.next(persons);
    });
  }

  public getPersons(): Observable<Person[]> {
    return this.personSubject;
  }

  public createPerson(person: Person): void {
    const body = {
      name: person.name,
      email: person.email,
      birthdate: PersonService.formatDate(person.birthdate)
    };

    this.backend.post<string>('persons', body).then(value => console.log(value));
  }

  private static formatDate(date: Date): string {
    return `${ date.getFullYear() }-${ ('0' + (date.getMonth() + 1)).slice(-2) }-${ ('0' + (date.getDate())).slice(-2) }`;
  }
}
