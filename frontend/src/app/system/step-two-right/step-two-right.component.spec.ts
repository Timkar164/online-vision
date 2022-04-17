import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoRightComponent } from './step-two-right.component';

describe('StepTwoRightComponent', () => {
  let component: StepTwoRightComponent;
  let fixture: ComponentFixture<StepTwoRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTwoRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
