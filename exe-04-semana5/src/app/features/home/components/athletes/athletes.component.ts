import { Component, OnInit } from '@angular/core';
import { Athletes } from '../../model/athletes.model';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss']
})
export class AthletesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public listAthletes: Array<Athletes> = [
    {
      id: 7,
      nome: 'Welliton Becker',
      dataUltimoPgto: '01/07/2022',
      valorMensalidade: 80,
      dataInclusaoSistema: '01/07/2022'
    },
    {
      id: 10,
      nome: 'Lucas Almeida',
      dataUltimoPgto: '07/07/2022',
      valorMensalidade: 80,
      dataInclusaoSistema: '03/07/2022'
    },
    {
      id: 25,
      nome: 'Maria Aparecida',
      dataUltimoPgto: '04/07/2022',
      valorMensalidade: 80,
      dataInclusaoSistema: '05/07/2022'
    },
    {
      id: 32,
      nome: 'Luiz Algusto',
      dataUltimoPgto: '10/07/2022',
      valorMensalidade: 80,
      dataInclusaoSistema: '02/01/2017'
    },
    {
      id: 44,
      nome: 'Marcelo Souza',
      dataUltimoPgto: '06/07/2022',
      valorMensalidade: 80,
      dataInclusaoSistema: '10/08/2020'
    },
  ]


}
