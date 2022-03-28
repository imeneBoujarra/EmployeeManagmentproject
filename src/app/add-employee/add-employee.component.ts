import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  constructor(private employeService : EmployeeService , private router :Router) { }
  
  employee  : Employee = new Employee();
  submitted = false ; 

  ngOnInit(): void {
  }

  save()
  { this.employeService.createEmployee(this.employee).subscribe(data =>{
    console.log(data) 
    this.employee=new Employee();
    this.goToList() ;
  },error=>console.error(error)) ;

  }
  goToList() {
   this.router.navigate(['employees']);
  }

  onSubmit()
  {
    this.submitted=true  ; 
    this.save();
  }



}
