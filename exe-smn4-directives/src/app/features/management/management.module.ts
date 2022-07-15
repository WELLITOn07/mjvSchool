import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './collaborators/list/list.component';
import { TableDirective } from './collaborators/directives/table.directive';



@NgModule({
  declarations: [
    ListComponent,
    TableDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    TableDirective,
  ]
})
export class ManagementModule { }
