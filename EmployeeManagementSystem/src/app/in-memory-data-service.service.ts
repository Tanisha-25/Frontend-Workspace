import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const employees_data = [
    {
      id:1,
      name:"Tanisha",
      location:"Patna",
      email: "tani@gmail.com"
    },
    {
      id:2,
      name:"Yuvraj",
      location:"Pune",
      email: "yuvii@gmail.com"
    },
    ]
    return{employees_data};
    
   }
}
