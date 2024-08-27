import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';
import { MyButtonComponent } from '../../../reusableComponent/my-button/my-button.component';


@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, AlertComponent, MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  deptObj: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  };

  http = inject(HttpClient);

  constructor(private deptSer: DepartmentService) {

  }


  // onSave(){
  //   debugger;
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res:any)=>{
  //     debugger;
  //     if(res.result){
  //       alert("Department created success");
  //       this.getDepartment();
  //     } else{
  //       alert(res.message);
  //     }
  //   })
  // }

  deptList: any[] = [];
  ngOnInit(): void {
    this.getDepartment();
  }

  // getDepartment(){
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res: any) => {
  //     this.deptList = res.data;
  //   })
  // }

  onEdit(data: any) {
    this.deptObj = data;
  }
  onUpdate() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert("Department updated success");
        this.getDepartment();
      } else {
        alert(res.message);
      }
    })
  }
  onDelete(id: number) {
    const isDelete = confirm("confirm to delete");
    if (isDelete) {
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id).subscribe((res: any) => {
        if (res.result) {
          alert("Department deleted success");
          this.getDepartment();
        } else {
          alert(res.message);
        }
      })
    }
  }
  // using servieces
  getDepartment() {
    debugger;
    this.deptSer.getAllDept().subscribe((res: any) => {
      debugger;
      this.deptList = res.data;
    })
  }
  onSave() {
    this.deptSer.saveNewDept(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert("Department created success");
        this.getDepartment();
      } else {
        alert(res.message);
      }
    })
  }

  getData(data: any){
   
  }
}

