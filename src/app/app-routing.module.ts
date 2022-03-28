import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { EmployeeSearchFormComponent } from './employee-search-form/employee-search-form.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { SearchComponent } from './search/search.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'employees',component:ListEmployeeComponent},
  {path:'add',component:AddEmployeeComponent},
  {path: 'detailemployee/:id' , component:DetailEmployeeComponent},
  {path: 'updateemployee/:id' , component : UpdateEmployeeComponent }, 
  {path: 'search' , component : SearchComponent}, 
  {path: 'searchByID' , component: EmployeeSearchFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
