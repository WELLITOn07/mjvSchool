import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { ManagementModule } from './management/management.module';
import { SellModule } from './sell/sell.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    ManagementModule,
    SellModule
  ]
})
export class FeaturesModule { }
