import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C001PromotionListComponent } from './c001-promotion-list.component';

describe('C001PromotionListComponent', () => {
  let component: C001PromotionListComponent;
  let fixture: ComponentFixture<C001PromotionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C001PromotionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C001PromotionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
