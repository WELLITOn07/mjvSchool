import { Component, OnInit } from '@angular/core';
import { AthletesNames } from '../../model/AthletesNames.model';

@Component({
  selector: 'app-list-registereds',
  templateUrl: './list-registereds.component.html',
  styleUrls: ['./list-registereds.component.scss']
})
export class ListRegisteredsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listAthletes: Array<AthletesNames> = [
    {nome: 'Welliton Becker'},
    {nome: 'Lucas Almeida'},
    {nome: 'Maria Aparecida'},
    {nome: 'Luiz Algusto'},
    {nome: 'Marcelo Souza'}
  ]
}
