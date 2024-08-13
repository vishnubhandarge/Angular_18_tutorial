import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  isDiv1Visiable: boolean = true;
  idDiv2Visiable: boolean = false;

  num1: string = '';
  num2: string = '';
  isActive: boolean = false;
  selectedState: string = '';

  cityArray: string [] = ['Pune','Mumbai','Nagpur','Thane'];

  studentList: any[] = [
    {studId:12, name:'AAA', city: 'Pune',   isActive:  false},
    {studId:22, name:'BBB', city: 'Mumbai', isActive:  false},
    {studId:32, name:'CC', city: 'Jalgao', isActive:  true},
    {studId:56, name:'DD', city: 'Mumbai', isActive:  false},
    {studId:34, name:'EE', city: 'Nagpur', isActive:  false},
    {studId:76, name:'FFF', city: 'Thane', isActive:  true},
  ]

  showDiv1() {
    this.isDiv1Visiable = true;
  }
  hideDiv1() {
    this.isDiv1Visiable = false;
  }
  toggleDiv2() {
    this.idDiv2Visiable = !this.idDiv2Visiable;

    // if(this.idDiv2Visiable == true) {
    //   this.idDiv2Visiable = false;
    // } else {
    //   this.idDiv2Visiable= true
    // }
  }
}
