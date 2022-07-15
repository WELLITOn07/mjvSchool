import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ToDoListModule,
    LoginModule
  ]
})
export class FeaturesModule { }
