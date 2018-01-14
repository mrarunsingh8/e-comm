import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductItemComponent } from './featured-product-item.component';

describe('FeaturedProductItemComponent', () => {
  let component: FeaturedProductItemComponent;
  let fixture: ComponentFixture<FeaturedProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
