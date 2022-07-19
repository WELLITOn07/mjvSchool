import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Athletes } from 'src/app/features/home/model/athletes.model';
import { InfosAthletesService } from 'src/app/shared/services/infos-athletes.service';

@Component({
  templateUrl: './details-athletes.component.html',
  styleUrls: ['./details-athletes.component.scss']
})
export class DetailsAthletesComponent implements OnInit {

  atlhetes?: Athletes


  constructor(private ActiveRoute: ActivatedRoute, private atlhetesService: InfosAthletesService) { }

  ngOnInit(): void {

    this.ActiveRoute.params.subscribe((params) => {
      const id = parseInt(params['AtlhetesId']);
      this.atlhetes = this.atlhetesService.getById(id)
      console.log(this.atlhetes);
    })
  }

}
