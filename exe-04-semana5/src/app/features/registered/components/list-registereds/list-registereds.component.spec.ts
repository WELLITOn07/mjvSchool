import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegisteredsComponent } from './list-registereds.component';

describe('ListRegisteredsComponent', () => {
  let component: ListRegisteredsComponent;
  let fixture: ComponentFixture<ListRegisteredsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRegisteredsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRegisteredsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
