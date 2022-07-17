import { Injectable } from '@angular/core';
import { Athletes } from 'src/app/features/home/model/athletes.model';

@Injectable({
  providedIn: 'root'
})
export class InfosAthletesService {
  listAtheletes: Array<Athletes> = [
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
  ];

  constructor() { }

  getAthletes () {
    return this.listAtheletes
  };

  getById (id: number) {
    return this.listAtheletes.find((atheletes) => atheletes.id === id)
  };



};
