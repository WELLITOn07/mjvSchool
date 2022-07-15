import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Tela de Produtos"

  produto1 = {
    descricao: 'Playstation 5',
    preco: 4500,
    quantidade: 1,
    img: 'https://files.tecnoblog.net/wp-content/uploads/2020/11/playstation_5_produto-700x700.png',

  }

  obtendoDesconto() {
    this.produto1.preco = this.produto1.preco * 0.90;
  }

  precoComDesconto(preco: number) {
    return preco * 0.90;
  }

  comprar () {
    window.alert('Comprou!')
  }

  passouMouse() {
    window.alert('CLICK EM OBTER DESCONTO, E OBTENHA 10% DE DESCONTO!')
  }


  pressionouTecla(event: any) {
    window.alert(event.target.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
