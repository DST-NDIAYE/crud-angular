import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../modeles/employee.modele';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  Employer!: Employee;
  EmployerId!: number;

  constructor( private employeeService: EmployeeService , 
    private  route : ActivatedRoute ,
    private router: Router) { }

  ngOnInit(): void {
    
    this.EmployerId = +this.route.snapshot.params['employeeId']
        
    this.Employer = this.employeeService.getEmployerById(this.EmployerId) ; 

    console.log(this.Employer);
    
  }


  retour(){

    this.router.navigateByUrl('/Home')

  }

}
