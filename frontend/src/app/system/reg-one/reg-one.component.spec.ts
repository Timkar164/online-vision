import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegOneComponent } from './reg-one.component';

describe('RegOneComponent', () => {
  let component: RegOneComponent;
  let fixture: ComponentFixture<RegOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
