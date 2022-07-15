import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementModule } from './management/management.module';
import { SellModule } from './sell/sell.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ManagementModule,
    SellModule
  ]
})
export class FeaturesModule { }
