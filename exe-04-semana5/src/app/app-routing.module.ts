import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';import { RegisteredsPageComponent } from './features/registered/pages/registereds-page/registereds-page.component';
;

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'registereds', component: RegisteredsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
