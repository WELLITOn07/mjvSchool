import { Injectable } from '@angular/core';
import { Product } from 'src/app/features/sell/model/products-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Array<Product> = [
    {id: 1,
      description: "Tênis Nike Downshifter 11",
      value: 430,
      amount: 6,
      available: true,
      width: '39/40/41',
      img: "https://static.netshoes.com.br/produtos/tenis-nike-downshifter-11-masculino/26/HZM-5208-026/HZM-5208-026_zoom1.jpg?ts=1630603834&ims=544x"},
      {id: 2,
      description: "Tênis Adidas Breaknet",
      value: 250,
      amount: 3,
      available: true,
      width: '35/40/42',
      img: "https://i.zst.com.br/thumbs/12/22/f/1995692424.jpg"},
      {id: 3,
      description: "Tênis New Balance 247",
      value: 180,
      amount: 0,
      available: false,
      width: 'out of stock',
      img: "https://backwash.fbitsstatic.net/img/p/tenis-new-balance-ms247en-azul-87154/326634.jpg?w=800&h=800&v=no-change&qs=ignore"},
      {id: 4,
      description: "Tênis Fila Charge",
      value: 220,
      amount: 2,
      available: true,
      width: '36/37',
      img: "https://static.netshoes.com.br/produtos/tenis-fila-charge-masculino/24/D29-8287-024/D29-8287-024_zoom1.jpg?ts=1620054808&ims=544x"}
  ];

  constructor() { }

  getProducts() {
    return this.products
  };

  getById(id: number) {
    return this.products.find((product) => product.id === id)
  };
}
