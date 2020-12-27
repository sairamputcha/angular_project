import { Component, OnInit, Input } from '@angular/core';
import{Student} from '../student';
import {Router} from "@angular/router";
 import {StudentService} from "../student.service";
 import {ActivatedRoute} from "@angular/router";
// import {Router} from "@angular/router";
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // students:Student[]=[{"id":1,"name":"Ram", age:20,"admissionYear":1,"dept":"cse"}];
  students:Student[];


   constructor(private router: Router, private studentservice:StudentService) {

  }

  ngOnInit() {

    this.students = this.studentservice.students;
  }
  displayAddScreen(): void {
    this.router.navigate(['add']);
 };

 displayEditScreen(id: number): void {
  this.router.navigate(['edit', id]);

 };
//   deleteStudent(id: number): void {
//   this.router.navigate(['home', id]);

// };
  deleteRecord(id:number): void {
        this.studentservice.deleteStudent(id);
        // this.router.navigate(['home']);
      }


}

