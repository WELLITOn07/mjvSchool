import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactModule,
    HomeModule,
    LoginModule
  ]
})
export class FeaturesModule { }
