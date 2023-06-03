import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { AddemployeesComponent } from './addemployees/addemployees.component';
import { EmployeelistComponent } from './employeeslist/employeelist.component';

const routes: Routes = [
  {path: '', component:MainpageComponent},
  {path: 'employeeslist', component:EmployeeslistComponent},
  {path: 'employeeslist/:id', component:EmployeelistComponent},
  {path: 'addemployees', component:AddemployeesComponent},
  {path: 'editemployees', loadChildren:()=> import('./shared/shared.module').then(m=>m.SharedModule)},
  {path: '**', component:MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
