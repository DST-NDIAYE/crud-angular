import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../modeles/employee.modele';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(  private http: HttpClient  ) { }

  listeDesEmployee: Employee[] = [];


  getListeEmployer(): Observable<Employee[]> {
    // return this.listeDesEmployee;

    return this.http.get<Employee[]>('http://localhost:3000/api/listeDesEmployee');

  }



  getEmployerById(id: number) {
    const employer = this.listeDesEmployee.find(emp => emp.id === id);
    if (employer) {
      return employer;
    } else {
      throw new Error("ce quizz nexiste pas ");

    }
  }


  AddEmp( formValue : Employee ){
    
    const employee = {
      ...formValue ,
      id: this.listeDesEmployee[ this.listeDesEmployee.length-1].id +1 ,
      imageUrl: '../../assets/images/image2.jpg'  
    }
     
        // const Emp : Employee = {
        //   ...formValue,
        //   id: this.listeDesEmployee[ this.listeDesEmployee.length-1].id +1 ,
        // };
  
        this.listeDesEmployee.push(employee)
  }
  


  deleteEmployee( Employeeid: number  ){

    this.listeDesEmployee = this.listeDesEmployee.filter( e => e.id !== Employeeid)
  
      return this.listeDesEmployee ;

}



}
