import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './components/tasks/tasks.component';



@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TasksComponent
  ]
})
export class ToDoListModule { }
