import { TestBed } from '@angular/core/testing';

import { InfosAthletesService } from './infos-athletes.service';

describe('InfosAthletesService', () => {
  let service: InfosAthletesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfosAthletesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
