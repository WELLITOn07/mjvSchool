import { Component, OnInit } from '@angular/core';
import { Footer } from './model/footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer: Array<Footer> = [
    {
      img: 'https://www.mjvinnovation.com/wp-content/uploads/2021/04/mjv_layout_desk_gamification_page_icons_criteria-and-game-mission.png',
      link: 'https://www.mjvinnovation.com/'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
