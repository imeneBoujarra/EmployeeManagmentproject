import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id : any ; 
  employee : any ; 
  submitted = false ; 

  constructor(private route : ActivatedRoute , private router : Router , private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.employee = this.employeeService.getEmployee(this.id).subscribe(data=>{
      this.employee =data ;
    },error=>console.log(error));
    }

list()
{}
 updateEmployee()
 { this.submitted=true ;
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>
      {this.employee = new Employee();
       this.goToList(); 

      },error=>console.log(error) );
 }

 goToList()
 {
   this.router.navigate(['employees']);
 } 

}
