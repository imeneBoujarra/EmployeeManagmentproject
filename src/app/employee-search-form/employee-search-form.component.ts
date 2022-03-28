import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-search-form',
  templateUrl: './employee-search-form.component.html',
  styleUrls: ['./employee-search-form.component.css']
})
export class EmployeeSearchFormComponent implements OnInit {
 employee : any ; 
 employees : any[]=[]; 
  constructor( private route :ActivatedRoute ,private router :Router, private employeeService :EmployeeService ) 
  {
    this.employee = new Employee();  

  }
 


  ngOnInit(): void {
  }

onSubmit()
{this.employees.pop();
  this.employeeService.findById(this.employee.id).subscribe(data=>{
  this.employees.push(data) ,console.log(data)},error=>console.log(error)   );
}

goToList()
{
  this.router.navigate(['employees']);
}

}
