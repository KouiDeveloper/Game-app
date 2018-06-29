import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B005ProlistComponent } from './b005-prolist.component';

describe('B005ProlistComponent', () => {
  let component: B005ProlistComponent;
  let fixture: ComponentFixture<B005ProlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B005ProlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B005ProlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
