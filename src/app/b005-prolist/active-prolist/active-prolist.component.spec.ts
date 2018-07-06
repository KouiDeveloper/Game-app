import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveProlistComponent } from './active-prolist.component';

describe('ActiveProlistComponent', () => {
  let component: ActiveProlistComponent;
  let fixture: ComponentFixture<ActiveProlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveProlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveProlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
