import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
      LoginComponent,
      LoginPageComponent
  ],
  imports: [
      CommonModule,
      SharedModule
  ],
  exports: [
      LoginComponent,
      LoginPageComponent
  ],
})
export class LoginModule { }
