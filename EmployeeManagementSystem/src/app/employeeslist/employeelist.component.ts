import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employeeslist',
  // templateUrl: './employeeslist.component.html',
  template:`
  <div>
  <h3>Employee Details</h3>
  <ul type="none">
  <li>Id: {{empData.id}}</li>
  <li>Name: {{empData?.name}}</li>
  <li>Location: {{empData?.location}}</li>
  <li>Email: {{empData?.email}}</li>
  </ul>
  <button (click)="goBack()">Back</button>
  </div>
  `,
  styles: [`
  div {
    border-style: double;
    margin-left: 20%;
    margin-right:20%;
    margin-top: 2%;
    background-color: bisque
  }
  `]
})

export class EmployeelistComponent implements OnInit{
  
  id:any;
  empData!: Employee; // Code change
  
  constructor(private service: EmployeesService, private route: ActivatedRoute, private loc:Location){}
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.service.getEmployees().subscribe((employees:any)=> {
      this.empData = employees.find((x: { id: any; })=>x.id==this.id); // Code change
    });
  }

  goBack(): void{
    this.loc.back();
  }

}
