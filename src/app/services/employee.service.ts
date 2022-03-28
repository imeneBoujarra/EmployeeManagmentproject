import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private baseUrl = 'http://localhost:8085/api/v1/employees';
  constructor(private http : HttpClient) { }

getEmployee (id : number) : Observable <any>
{
  return this.http.get(`${this.baseUrl}/${id}`);
} 

createEmployee (employee :Object) : Observable <Object>
{
  return this.http.post(`${this.baseUrl}` ,employee);
} 

updateEmployee (id : number, value:any) : Observable <Object>
{
  return this.http.put(`${this.baseUrl}/${id}`,value);
} 


deleteEmployee (id : number) : Observable <any>
{
  return this.http.delete(`${this.baseUrl}/${id}`, { responseType:'text' });
} 


getEmployeeList () : Observable <any>
{
  return this.http.get(`${this.baseUrl}`);
} 

findByName(firstName: any): Observable<Employee[]> {
  return this.http.get<Employee[]>(`${this.baseUrl}/search/${firstName}`);
}

public findById(employeeId : number )
{
  return this.http.get<Employee>(`${this.baseUrl}/${employeeId}`);
}

}