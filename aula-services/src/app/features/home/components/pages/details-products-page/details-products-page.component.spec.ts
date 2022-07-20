import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProductsPageComponent } from './details-products-page.component';

describe('DetailsProductsPageComponent', () => {
  let component: DetailsProductsPageComponent;
  let fixture: ComponentFixture<DetailsProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsProductsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
