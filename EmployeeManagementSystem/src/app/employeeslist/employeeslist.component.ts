import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent implements OnInit {

  searchLetter: string='';
  employees: Employee[]=[];

  constructor(private router: Router, private e1: EmployeesService){
  }
   ngOnInit(): void {
     this.e1.getEmployees().subscribe((emp:any)=>this.employees=emp);
   }

   deleteEmployee(id: number) {
    if(id)
    this.e1.deleteEmployee(id).subscribe(()=> {
      this.employees= this.employees.filter(employee=>employee.id!==id);
    });
   }

   setEmp(emp: Employee){
    this.e1.setEmp(emp);
   }

}
