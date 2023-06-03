import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Employee';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-editemployees',
  templateUrl: './editemployees.component.html',
  styleUrls: ['./editemployees.component.css']
})
export class EditemployeesComponent implements OnInit {

  employee: Employee; 
  emailRegex= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  
  constructor(private employeeService: EmployeesService, private loc: Location){}

  data=this.employeeService.getEmp();

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((emp:any)=>this.employee=emp);
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.data).subscribe(()=>{
      console.log('Updated Successfully');
    })
    this.loc.back();
  }


}
