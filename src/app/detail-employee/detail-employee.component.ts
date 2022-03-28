import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {

  id : any ; 
  employee : any ; 

  constructor(private root : ActivatedRoute , private router :Router , private employeeService : EmployeeService) { }

  ngOnInit(): void {
  this.employee = new Employee();
  this.id = this.root.snapshot.params['id'];
  this.employeeService.getEmployee(this.id).subscribe (data => {
   this.employee = data ;
    
  },error=>console.log(error)
  );
  }
  list()
  {
    this.router.navigate(['employees']);
  }

 

}
