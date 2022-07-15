import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  exibeDiv = true

  exibeDivSimNao() {
    this.exibeDiv = !this.exibeDiv
  }

    produtos: Array<Produto> = [
    {nome: 'PS5',
    valor: 4900,
    disponivel: true},
    {nome: 'PS4',
    valor: 2500,
    disponivel: true},
    {nome: 'XBOX ONE',
    valor: 4500,
    disponivel: false},
    {nome: 'XBOX 360',
    valor: 800,
    disponivel: true},
    {nome: 'PS3',
    valor: 700,
    disponivel: true}
  ];







  constructor() { }

  ngOnInit(): void {
  }

}
