import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  dayNumber: string = '';

  cityArray: string [] = ['Pune','Mumbai','Nagpur','Thane'];

  studentList: any[] = [
    {studId:12, name:'AAA', city: 'Pune',   isActive:  true},
    {studId:22, name:'BBB', city: 'Mumbai', isActive:  false},
    {studId:32, name:'CC', city: 'Jalgao', isActive:  true},
    {studId:56, name:'DD', city: 'Mumbai', isActive:  true},
    {studId:34, name:'EE', city: 'Nagpur', isActive:  false},
    {studId:76, name:'FFF', city: 'Thane', isActive:  true},
  ]
}
