import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A004PopupTheWinnerComponent } from './a004-popup-the-winner.component';

describe('A004PopupTheWinnerComponent', () => {
  let component: A004PopupTheWinnerComponent;
  let fixture: ComponentFixture<A004PopupTheWinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A004PopupTheWinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A004PopupTheWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
