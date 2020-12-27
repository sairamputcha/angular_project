import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id : number;
  editForm:FormGroup;
  submitted=false;
  modifyStudents:Student;
  constructor(private studentService:StudentService, private route:ActivatedRoute,
    private router: Router,private formBuilder: FormBuilder)
     {
     route.params.subscribe(params => { this.id = params['id']; });
    this.modifyStudents = studentService.getStudent(this.id);

   }

  ngOnInit(): void {

    this.editForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'age': ['', Validators.min(17)],
      'department': ['', Validators.required],
      'admissionYear': ['', Validators.required],
      'id': ['', Validators.required],

      });

  }
  get fields()
  {
    return this.editForm.controls;
  }


  updateRecord(): void {
    this.submitted=true;
    if(this.editForm.invalid){
      return;
    }
      this.studentService.editStudent(this.modifyStudents);
      this.router.navigate(['home']);
    }
    // deleteRecord(): void {
    //   this.submitted=true;
    //   if(this.editForm.invalid){
    //     return;
    //   }
    //     this.studentService.deleteStudent(this.modifyStudents);
    //     this.router.navigate(['home']);
    //   }

    close(): void {

      this.router.navigate(['home']);
}
}
