import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAthletesComponent } from './details-athletes.component';

describe('DetailsAthletesComponent', () => {
  let component: DetailsAthletesComponent;
  let fixture: ComponentFixture<DetailsAthletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAthletesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAthletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
