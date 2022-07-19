import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfosAthletesService } from 'src/app/shared/services/infos-athletes.service';
import { Athletes } from '../../model/athletes.model';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss']
})
export class AthletesComponent implements OnInit {

  constructor(private listAtheletes: InfosAthletesService, private router: Router) { }

  ngOnInit(): void {
  }


  listAthletes: Array<Athletes> = this.listAtheletes.getAthletes();

  detailsAtlhetes(idAtlhetes: number) {
    this.router.navigateByUrl(`details/:${idAtlhetes}`)
  }

}
