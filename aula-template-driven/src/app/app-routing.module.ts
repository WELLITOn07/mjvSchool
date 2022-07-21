import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/components/pages/login-page/login-page.component';
import { DetailsPageComponent } from './features/sell/components/pages/details-page/details-page.component';
import { ProductsPageComponent } from './features/sell/components/pages/products-page/products-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/sell', pathMatch: 'full'},
  {path: 'sell', component: ProductsPageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: 'product-details/:productId', component: DetailsPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
