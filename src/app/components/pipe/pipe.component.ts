import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [JsonPipe,DatePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName: string = 'Angular';
  currentDate: Date = new Date();
  student: any = {
    name:'Chetan',
    city:'Pune',
    empId:323,
    state: undefined
  };
}
 