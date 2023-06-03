import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeesService } from '../employees.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployees',
  templateUrl: './addemployees.component.html',
  styleUrls: ['./addemployees.component.css']
})
export class AddemployeesComponent implements OnInit {
  employees: Employee[]=[];

  ngOnInit(): void {
   
  }

  constructor(private router: Router, private formBuilder: FormBuilder, private employeeService: EmployeesService, private loc: Location){}
  
  employeeForm =this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    location: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],

  });

  onSubmit(){
    if(this.employeeForm.valid){
      const employeeData =this.employeeForm.value;
      this.employeeService.addEmployee(employeeData).subscribe((response)=> {
        console.log('Added Successfully:', response);
      })
    }
  }

  goBack(): void{
    this.loc.back();
  }

}
