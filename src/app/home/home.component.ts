import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../modeles/employee.modele';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private employeeservices: EmployeeService , private router: Router ) { }

  listeEmployer!: Employee[] ;
  listeEmployer$!: Observable<Employee[]> ;

  confirmation_supprssion!:boolean ;

  ngOnInit(): void {

    this.listeEmployer$ = this.employeeservices.getListeEmployer() ;
    
    this.confirmation_supprssion = false ;
  }


  deleteEmployeeConfirmation( EmpId: number ){

      this.confirmation_supprssion = confirm("Voulez-vous supprimer L'utilisateur ?")

      if (this.confirmation_supprssion) {
       
       this.listeEmployer =  this.employeeservices.deleteEmployee( EmpId )
      }
      


  }


  AddEmployee(){

    this.router.navigateByUrl("/AddEmployee")
  }

}
