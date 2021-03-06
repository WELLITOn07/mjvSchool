import { Injectable } from '@angular/core';
import { Products } from 'src/app/features/home/components/model/products-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Array<Products> = [
      {id: 1,
      descrition: 'Playstation 5',
      value: 4900,
      amount: 5,
      available: true,
      img: "https://bestgames.pt/7768053-large_default/consola-playstation-5-edicao-digital.jpg"}, {id: 2,
      descrition: 'Playstation 4',
      value: 2900,
      amount: 2,
      available: true,
      img: "https://i.zst.com.br/thumbs/12/1d/2f/145197302.jpg"},
      {id: 3,
      descrition: 'Xbox One',
      value: 3500,
      amount: 0,
      available: false,
      img: "https://http2.mlstatic.com/D_NQ_NP_820192-MLA40655732619_022020-O.jpg"}, {id: 4,
      descrition: 'Xbox 360',
      value: 800,
      amount: 2,
      available: true,
      img: "https://images-americanas.b2w.io/produtos/3760880590/imagens/console-xbox-360-slim-4gb/3760880590_1_large.jpg"}
    ];

  constructor() { }

  getProducts() {
    return this.products;
  };

  getById(id: number) {
    return this.products.find((product) => product.id === id);
  };
}
