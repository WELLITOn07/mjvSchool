import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredsPageComponent } from './registereds-page.component';

describe('RegisteredsPageComponent', () => {
  let component: RegisteredsPageComponent;
  let fixture: ComponentFixture<RegisteredsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
