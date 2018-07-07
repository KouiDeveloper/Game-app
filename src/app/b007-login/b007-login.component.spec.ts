import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B007LoginComponent } from './b007-login.component';

describe('B007LoginComponent', () => {
  let component: B007LoginComponent;
  let fixture: ComponentFixture<B007LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B007LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B007LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
