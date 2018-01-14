import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedProductItemComponent } from './recomended-product-item.component';

describe('RecomendedProductItemComponent', () => {
  let component: RecomendedProductItemComponent;
  let fixture: ComponentFixture<RecomendedProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendedProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendedProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
