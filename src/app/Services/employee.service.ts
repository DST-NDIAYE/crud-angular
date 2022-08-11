import { Injectable } from '@angular/core';
import { Employee } from '../modeles/employee.modele';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  listeDesEmployee: Employee[] = [
    {
      id: 1,
      prenom: 'DST',
      nom: 'Ndiaye',
      email: 'dstndiaye@gmail.com',
      address: 'Medina',
      tel: '77 326 34 01',
      imageUrl: '../../assets/images/image2.jpg'
    },
    {
      id: 2,
      prenom: 'DST',
      nom: 'Ndiaye',
      email: 'dstndiaye@gmail.com',
      address: 'Medina',
      tel: '77 326 34 01',
      imageUrl: '../../assets/images/image2.jpg'
    },
    {
      id: 3,
      prenom: 'DST',
      nom: 'Ndiaye',
      email: 'dstndiaye@gmail.com',
      address: 'Medina',
      tel: '77 326 34 01',
      imageUrl: '../../assets/images/image2.jpg'
    },
    {
      id: 4,
      prenom: 'DST',
      nom: 'Ndiaye',
      email: 'dstndiaye@gmail.com',
      address: 'Medina',
      tel: '77 326 34 01',
      imageUrl: '../../assets/images/image2.jpg'
    },
    {
      id: 5,
      prenom: 'DST',
      nom: 'Ndiaye',
      email: 'dstndiaye@gmail.com',
      address: 'Medina',
      tel: '77 326 34 01',
      imageUrl: '../../assets/images/image2.jpg'
    },

  ];


  getListeEmployer() {
    return this.listeDesEmployee;
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
