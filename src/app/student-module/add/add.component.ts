import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import {Router} from "@angular/router";
import { FormBuilder, FormControl,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],

})
export class AddComponent implements OnInit {

   newStudent:Student;
   addForm:FormGroup;
  submitted=false;
  constructor(private studentService:StudentService,private router: Router,private formBuilder: FormBuilder) {
    this.newStudent = new Student();

  }
  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
       'name': ['', Validators.required],
       'age': ['', Validators.min(17)],
       'department': ['', Validators.required],
       'admissionYear': ['', Validators.required]
       });

  }
  get fields()
  {
    return this.addForm.controls;
  }

//saveRecord -> call studetn service addStudent method
  saveRecord(): void{
    this.submitted=true;
    if(this.addForm.invalid){
      return;
    }
     this.studentService.addStudent(this.newStudent);
     this.router.navigate(['home']);

  }
  close(): void {
    // this.closebutton. addStudent.click();
    this.router.navigate(['home']);
  }

}


