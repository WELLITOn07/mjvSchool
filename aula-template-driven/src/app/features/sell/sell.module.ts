import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsPageComponent } from './components/pages/details-page/details-page.component';



@NgModule({
  declarations: [
    ListProductsComponent,
    ProductsPageComponent,
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListProductsComponent,
    ProductsPageComponent
  ]
})
export class SellModule { }
