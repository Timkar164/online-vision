import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoRightThreeLeftComponent } from './step-two-right-three-left.component';

describe('StepTwoRightThreeLeftComponent', () => {
  let component: StepTwoRightThreeLeftComponent;
  let fixture: ComponentFixture<StepTwoRightThreeLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTwoRightThreeLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoRightThreeLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
