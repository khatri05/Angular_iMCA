import { Component } from '@angular/core';

interface Employee {
  Empid: number;
  EmpName: string;
  EmpSalary: number;
  EmpDepartment: string;
  EmpCity: string;
}

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  EmpDetails:Employee[]=[
    {Empid:101,EmpName:"Krishna",EmpSalary:90000,EmpDepartment:"IT",EmpCity:"Ahmedabad"},
    {Empid:102,EmpName:"Bhavya",EmpSalary:85000,EmpDepartment:"HR",EmpCity:"Delhi"},
    {Empid:103,EmpName:"Rurda",EmpSalary:60000,EmpDepartment:"Finance",EmpCity:"Banglore"},
    {Empid:104,EmpName:"Jash",EmpSalary:75000,EmpDepartment:"IT",EmpCity:"Pune"},
    {Empid:105,EmpName:"Suresh",EmpSalary:40000,EmpDepartment:"Sales",EmpCity:"Ahmedabad"},
    {Empid:106,EmpName:"Meet",EmpSalary:55000,EmpDepartment:"HR",EmpCity:"Banglore"},
    {Empid:107,EmpName:"Jay",EmpSalary:65000,EmpDepartment:"Sales",EmpCity:"Mumbai"},
    {Empid:108,EmpName:"Ramesh",EmpSalary:80000,EmpDepartment:"Finance",EmpCity:"Pune"},
    {Empid:109,EmpName:"Raj",EmpSalary:65000,EmpDepartment:"IT",EmpCity:"Ahmedabad"},
    {Empid:110,EmpName:"Mahesh",EmpSalary:70000,EmpDepartment:"IT",EmpCity:"Delhi"}
  ]
}
