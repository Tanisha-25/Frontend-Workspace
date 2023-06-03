import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditemployeesComponent } from './editemployees/editemployees.component';
import { FormsModule } from '@angular/forms';
import { SharedRouting } from './shared-routes';



@NgModule({
  declarations: [
    EditemployeesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRouting
  ]
})
export class SharedModule { }
