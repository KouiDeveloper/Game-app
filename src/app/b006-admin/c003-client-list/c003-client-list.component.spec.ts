import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C003ClientListComponent } from './c003-client-list.component';

describe('C003ClientListComponent', () => {
  let component: C003ClientListComponent;
  let fixture: ComponentFixture<C003ClientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C003ClientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C003ClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
