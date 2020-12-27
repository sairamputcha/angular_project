import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StudentService } from './student.service';
@NgModule({
  declarations: [HomeComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    StudentService,
    ReactiveFormsModule



  ]
})
export class StudentModuleModule { }
