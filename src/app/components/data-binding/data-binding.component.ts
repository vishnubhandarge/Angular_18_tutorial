import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  
  courseName: string = "Angular 18"; 
  stateName: string = "Goa";
  inputType = "radio"; 
  myClassName: string = "bg-primary"; 
  rollNo: number  = 123; 
  isIndian: boolean = true; 
  currentDate: Date = new Date(); 


  constructor() {
     
  }

  changeCourseName() {
    this.courseName = "React Js";
  }
  showAlert(message: string) {
      alert(message)
  }

}
