import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
  // isDiv1Visiable: boolean = true;
  // idDiv2Visiable: boolean = false;
  // isActive: boolean = false;

  //Need to import import { Router } from '@angular/router';
  constructor(private route: Router){
   
  }
  navigateToAttribute() {
    this.route.navigateByUrl("attribute-directive");
  }

  div1Visible: boolean = true;
  isWarningDivVisible: boolean = false;
  num1: string = '';
  num2: string = '';
  selectedStatus: string = '';
  
  showDiv1() {
    this.div1Visible = true;
  }
  hideDiv1() {
    this.div1Visible = false;
  }
  toggleDiv2() {
    this.isWarningDivVisible = !this.isWarningDivVisible;

  }
}
