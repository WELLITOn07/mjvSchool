import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Products } from '../../model/products-model';

@Component({
  templateUrl: './details-products-page.component.html',
  styleUrls: ['./details-products-page.component.scss']
})
export class DetailsProductsPageComponent implements OnInit {

  product?: Products;

  constructor(private activedRoute: ActivatedRoute,
    private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['productId']);
      this.product = this.ProductsService.getById(id);
      console.log(this.product);
    });
  }

}
