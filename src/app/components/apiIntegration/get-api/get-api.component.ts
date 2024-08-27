import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  constructor(private http: HttpClient) {

  }

  userList: any[] = [];
  cutstomerList: any[] = [];

  getAllUsers() {
    // debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
      // debugger;
      this.userList = res;
    })
  }

  getAllCustomers() {
    debugger;
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers11").subscribe((res: any) => {
      debugger;
      this.cutstomerList = res.data;
    }, error=>{

    }
  )
  }
}
