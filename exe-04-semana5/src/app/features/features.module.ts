import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisteredModule } from './registered/registered.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    LoginModule,
    RegisteredModule
  ]
})
export class FeaturesModule { }
