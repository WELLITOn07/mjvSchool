import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellModule } from './sell/sell.module';
import { ManagementModule } from './management/management.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SellModule,
    ManagementModule
  ]
})
export class FeaturesModule { }
