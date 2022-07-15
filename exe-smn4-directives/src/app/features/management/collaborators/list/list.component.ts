import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listCollaborators = [
    {
      id: 7,
      name: 'Nathan Carlos',
      wage: 4500,
      office: 'Dev PI',
      faults: 0,
      suspended: false
    },
    {
      id: 27,
      name: 'Welliton Becker',
      wage: 1000,
      office: 'Student',
      faults: 0,
      suspended: false
    },
    {
      id: 18,
      name: 'Luiz Octavio',
      wage: 2600,
      office: 'Designer',
      faults: 1,
      suspended: false
    },
    {
      id: 51,
      name: 'Maria Aparecida',
      wage: 1700,
      office: 'Security',
      faults: 3,
      suspended: true
    },
    {
      id: 22,
      name: 'João Santana',
      wage: 3000,
      office: 'Front End',
      faults: 0,
      suspended: false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
