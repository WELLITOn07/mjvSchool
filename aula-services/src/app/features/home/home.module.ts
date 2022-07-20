import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsProductsPageComponent } from './components/pages/details-products-page/details-products-page.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    HomeComponent,
    DetailsProductsPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductsListComponent,
    HomeComponent
  ]
})
export class HomeModule { }
