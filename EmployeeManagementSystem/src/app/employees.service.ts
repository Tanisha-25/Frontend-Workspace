import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private path = 'api/employees_data';

  constructor( private e1: HttpClient) { }

  getEmployees(){
    return this.e1.get(this.path);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.e1.post<Employee>(this.path, employee)
  }

  deleteEmployee(id: number): Observable<void> {
    const url =`${this.path}/${id}`;
    return this.e1.delete<void>(url);
  }

  updateEmployee(employee:Employee): Observable<Employee>{
    const url= `${this.path}/${employee.id}`
    return this.e1.put<Employee>(url,employee);
  }

  private temporaryEmp !: Employee
  setEmp(e2: Employee){
    this.temporaryEmp=e2;
  }

  getEmp(){
    return this.temporaryEmp;
  }
}
