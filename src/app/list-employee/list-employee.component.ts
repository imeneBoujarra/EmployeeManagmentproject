import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';



@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit  {
 employees : any ; 
  constructor(private employeeService : EmployeeService ) 
  {
    

   }

  ngOnInit(): void {
    this.reloaddata();
  }
    
  
  reloaddata()
  {
    this.employees = this.employeeService.getEmployeeList() ;

  }
  

}
