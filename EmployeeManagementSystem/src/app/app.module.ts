import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { AddemployeesComponent } from './addemployees/addemployees.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TotalPipe } from './total.pipe';
import { FilterPipe } from './filter.pipe';
import { EmployeelistComponent } from './employeeslist/employeelist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeslistComponent,
    AddemployeesComponent,
    MainpageComponent,
    EmployeelistComponent,
    TotalPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
