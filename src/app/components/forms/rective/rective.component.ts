import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rective',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './rective.component.html',
  styleUrl: './rective.component.css'
})

export class RectiveComponent {
  studentForm:FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required,Validators.minLength(3)]),
    lastName: new FormControl("Doe"),
    userName: new FormControl("John123", [Validators.email]),
    city: new FormControl(""),
    state: new FormControl(""),
    zipCode: new FormControl(""),
    isActiveTerms: new FormControl(),
  });

  formValue:any;
  onSave(){
    this.formValue = this.studentForm.value;
  }
}
