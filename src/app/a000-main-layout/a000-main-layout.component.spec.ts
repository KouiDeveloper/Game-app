import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A000MainLayoutComponent } from './a000-main-layout.component';

describe('A000MainLayoutComponent', () => {
  let component: A000MainLayoutComponent;
  let fixture: ComponentFixture<A000MainLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A000MainLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A000MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
