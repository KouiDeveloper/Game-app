import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B006AdminComponent } from './b006-admin.component';

describe('B006AdminComponent', () => {
  let component: B006AdminComponent;
  let fixture: ComponentFixture<B006AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B006AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B006AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
