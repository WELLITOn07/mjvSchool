import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    collaborator = {
      id: '7',
      name: 'Nathan Carlos Exercicio',
      wage: 4500,
      office: 'Dev Pl'
    }

    increase() {
      this.collaborator.wage += this.collaborator.wage * 0.10
    }
  constructor() { }

  ngOnInit(): void {
  }

}
