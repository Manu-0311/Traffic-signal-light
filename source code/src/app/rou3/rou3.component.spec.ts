import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rou3Component } from './rou3.component';

describe('Rou3Component', () => {
  let component: Rou3Component;
  let fixture: ComponentFixture<Rou3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Rou3Component]
    });
    fixture = TestBed.createComponent(Rou3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
