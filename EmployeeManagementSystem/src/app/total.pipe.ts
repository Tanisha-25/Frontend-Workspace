import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './Employee';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(employees: Employee[]): any {
    return employees.length;
  }

}
