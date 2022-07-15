import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

   github = {
    link: 'https://github.com/WELLITOn07',
    mouseenter () {
      document.body.style.backgroundColor = '#a8dadc'
    },
    mouseleave () {
      document.body.style.backgroundColor = '#f1faee'
    }
   }

  constructor() { }

  ngOnInit(): void {
  }

}
