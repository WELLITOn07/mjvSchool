import { Component, OnInit } from '@angular/core';
import { InfosAthletesService } from 'src/app/shared/services/infos-athletes.service';
import { Athletes } from '../../model/athletes.model';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss']
})
export class AthletesComponent implements OnInit {

  constructor(private listAtheletes: InfosAthletesService) { }

  ngOnInit(): void {
  }


  listAthletes: Array<Athletes> = this.listAtheletes.getAthletes();


}
