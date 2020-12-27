import { Injectable } from '@angular/core';
import{Student} from '../student-module/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students:Student[]=[{"id":1,"name":"Ram", age:20,"admissionYear":1,"dept":"cse"},{"id":4,"name":"Ramkl", age:20,"admissionYear":56,"dept":"cse"}];
  //students array variable add here
  //addStudent method - innput parameter student object. add input object to students array
  //deleteStudent method - input parameter student ID. Search for this ID in students array and delete that item from the array.

  addStudent(newStudent:Student): void {
    var id=this.students.length+1;
    newStudent.id=id;
    this.students.push(newStudent);
    //a: Student[]

  }
   editStudent(modifyStudents:Student): void {
    // alert(modifyStudents.id);
      var index = this.students.findIndex(item => item.id == modifyStudents.id );
      // this.students.splice(index,1);
      var item = this.students[index];
      item.name = modifyStudents.name;
      this.students[index].admissionYear=modifyStudents.admissionYear;
      this.students[index].age=modifyStudents.age;
      this.students[index].dept=modifyStudents.dept;
   }

   getStudent(studentId:number): Student{
    var index = this.students.findIndex(item => item.id == studentId);
    var item = this.students[index];
    // alert(item.name);
    return item;
   }

  deleteStudent(id:number): void {
    var index = this.students.findIndex(item => item.id ==id);
    this.students.splice(index,1);
    // var item = this.students[index];
  }

  constructor() { }
}
