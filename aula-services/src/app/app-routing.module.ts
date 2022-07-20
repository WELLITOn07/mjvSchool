import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductsPageComponent } from './features/home/components/pages/details-products-page/details-products-page.component';
import { HomeComponent } from './features/home/components/pages/home/home.component';
import { LoginPageComponent } from './features/login/components/pages/login-page/login-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'product-details/:productId', component: DetailsProductsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
