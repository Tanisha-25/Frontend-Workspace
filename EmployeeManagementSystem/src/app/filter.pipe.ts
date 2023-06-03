import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees:any[], searchLetter:string): any[] {
    if(!searchLetter){
      return employees;
    }
    searchLetter = searchLetter.toLowerCase();

    return employees.filter((employee)=>{
      const employeeName= employee.name.toLowerCase();
      return employeeName.startsWith(searchLetter);
    });
  }

}
