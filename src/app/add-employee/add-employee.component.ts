import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  MyForm!: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.MyForm = this.formBuilder.group({
      prenom: [null , [Validators.required] ],
      nom: [null , [Validators.required] ],
      email: [null , [Validators.required] ],
      address: [null , [Validators.required] ],
      telephone: [null , [Validators.required] ]
    });
  }

  AddEmployee(){
    
    console.log(this.MyForm.value);
    

  }

}
