import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {



  dataHoje = new Date();

  telefone = '41988833051'

  constructor() { }

  ngOnInit(): void {
  }

}
