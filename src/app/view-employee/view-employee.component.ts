import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../modeles/employee.modele';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService , 
     private route: ActivatedRoute , private  router : Router) { }

  Employer!: Employee;
  EmployerId!: number;

  ngOnInit(): void {

    this.EmployerId = +this.route.snapshot.params['employeeId']
        
    this.Employer = this.employeeService.getEmployerById(this.EmployerId) ; 


  }

  retour(){

    this.router.navigateByUrl('/Home')

  }


}
