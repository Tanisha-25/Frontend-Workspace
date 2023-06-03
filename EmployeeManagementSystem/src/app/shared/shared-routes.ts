import { RouterModule, Routes } from "@angular/router";
import { EditemployeesComponent } from "./editemployees/editemployees.component";

export const routes: Routes = [
    {
        path: '', component:EditemployeesComponent,
    }
];
 export const SharedRouting = RouterModule.forChild(routes);