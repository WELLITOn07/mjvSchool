import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from '../../model/products-model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {


  products: Array<Product> = this.productsService.getProducts();

  constructor(private productsService: ProductsService,private router: Router) { }

  ngOnInit(): void {
  }

  detailsProducts(idProduct: number) {
    this.router.navigateByUrl(`product-details/${idProduct}`)
  }

}
