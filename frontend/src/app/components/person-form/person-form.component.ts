import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Person } from '../../models/models';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: [ './person-form.component.scss' ]
})
export class PersonFormComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private readonly dialogRef: MatDialogRef<PersonFormComponent>) {
    this.formGroup = PersonFormComponent.createFormGroup();
  }

  ngOnInit(): void {
  }

  private static createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      birthday: new FormControl('', [
        Validators.required
      ])
    });
  }

  public submit(): void {
    const person: Person = {
      id: -1,
      name: this.formGroup.get('name')?.value,
      email: this.formGroup.get('email')?.value,
      birthdate: this.formGroup.get('birthday')?.value
    };

    this.dialogRef.close(person);
  }
}
