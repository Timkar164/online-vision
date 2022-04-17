import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoLeftComponent } from './step-two-left.component';

describe('StepTwoLeftComponent', () => {
  let component: StepTwoLeftComponent;
  let fixture: ComponentFixture<StepTwoLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTwoLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
