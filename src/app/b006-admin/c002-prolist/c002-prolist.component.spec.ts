import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C002ProlistComponent } from './c002-prolist.component';

describe('C002ProlistComponent', () => {
  let component: C002ProlistComponent;
  let fixture: ComponentFixture<C002ProlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C002ProlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C002ProlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
