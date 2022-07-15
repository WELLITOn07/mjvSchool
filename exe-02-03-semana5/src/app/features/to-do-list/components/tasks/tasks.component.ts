import { Component, OnInit } from '@angular/core';
import { Tasks } from '../../models/tasks.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

        listToDoList: Array<Tasks> = [
        { id: 1, description: 'Criar um projeto básico', completed: false, inclusionDate: '2021-07-21' }, { id: 2, description: 'Colocar o lixo para fora até as 19h', completed: true, inclusionDate: '2021-07-22' }, { id: 3, description: 'Fazer o jantar até as 22h', completed: true, inclusionDate: '2021-07-20' }, { id: 4, description: 'Reunião de alinhamento dia 18/07 as 14h', completed: true, inclusionDate: '2021-07-21' }, { id: 5, description: 'Reunião de alinhamento projeto bradesco 18/07 as 16h', completed: false, inclusionDate: '2021-07-19' }, { id: 6, description: 'Criar conteúdo da aula', completed: false, inclusionDate: '2021-07-18' }
    ]
}
