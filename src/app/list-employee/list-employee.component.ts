import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../services/employee.service';



@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit  {
  @Input('employees') employees:any;
 
 name :any ;
  constructor(private employeeService : EmployeeService , private router :Router ) 
  {
    

   }

  ngOnInit(): void {
    this.reloaddata();
  }
    
  
  reloaddata()
  {
    this.employees = this.employeeService.getEmployeeList() ;

  }
  
  employeeDetails( id : number)
  {
    this.router.navigate(['detailemployee', id]);

  }


  updateEmployee(id : number)
  {
    this.router.navigate(['updateemployee', id]);

  }

  deleteEmployee(id :number)
  {
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      this.reloaddata();
    },error=>console.error(error));
 
  }
  searchName()
  {

  

  }

}
