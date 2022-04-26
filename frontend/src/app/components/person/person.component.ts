import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../models/models';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input()
  public person!: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
