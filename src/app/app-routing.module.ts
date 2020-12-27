import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from "./student-module/add/add.component";
import { EditComponent} from "./student-module/edit/edit.component";
import { HomeComponent } from './student-module/home/home.component';

const routes: Routes = [{ path: 'add', component: AddComponent },
 {path: 'edit/:id', component: EditComponent },{path:'home', component:HomeComponent},
 {path:'', component:HomeComponent}];//add routes here.

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
