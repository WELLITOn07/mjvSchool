import { Component, OnInit } from '@angular/core';
import { ColaboradoresModule } from '../../colaboradores.module';

@Component({
  selector: 'app-lista-cadastro',
  templateUrl: './lista-cadastro.component.html',
  styleUrls: ['./lista-cadastro.component.scss']
})
export class ListaCadastroComponent implements OnInit {


  userName =[
    { "id": 7,
      "nome": "Nathan Carlos Exercicio",
      "salario": 4500,
      "cargo": "Dev PI"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
