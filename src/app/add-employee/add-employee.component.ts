import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../modeles/employee.modele';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  MyForm!: FormGroup;

  EmployeePreview$!: Observable<Employee> ;

  constructor( private formBuilder: FormBuilder , 
    private employeeService: EmployeeService , 
    private router : Router) { }

  ngOnInit(): void {
    this.MyForm = this.formBuilder.group({
      prenom: [null , [Validators.required]],
      nom: [null , [Validators.required] ],
      email: [null , [Validators.required] ],
      address: [null , [Validators.required] ],
      telephone: [null , [Validators.required] ]
    });

    this.EmployeePreview$ = this.MyForm.valueChanges ;
  }

  AddEmployee(){
    
    console.log(this.MyForm.value);

    this.employeeService.AddEmp(this.MyForm.value)
    
    this.router.navigateByUrl('/Home')

  }

}
