import { Component, OnInit } from '@angular/core';
import { Products } from './models/model.products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  Loja: Products [] = [
    {name: 'Playstation 5', velue: 4900, amount: 3,
    img: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21', available: true},
    {name: 'Super Nintendo', velue: 500, amount: 2,
    img: 'https://static.turbosquid.com/Preview/001271/420/YY/_600.jpg', available: false},
    {name: 'Xbox One', velue: 4500, amount: 0,
    img: 'https://t.ctcdn.com.br/1YojNPCeDJvevQ78PfUZ9IbWQ7Y=/fit-in/400x400/filters:format(webp):fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i413220.png', available:true},
    {name: 'Playstation 4', velue: 2000, amount: 4,
    img: 'https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$', available: true}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

