import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollibrateComponent } from './collibrate.component';

describe('CollibrateComponent', () => {
  let component: CollibrateComponent;
  let fixture: ComponentFixture<CollibrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollibrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollibrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
