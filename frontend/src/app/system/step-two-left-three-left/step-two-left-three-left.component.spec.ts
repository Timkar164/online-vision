import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoLeftThreeLeftComponent } from './step-two-left-three-left.component';

describe('StepTwoLeftThreeLeftComponent', () => {
  let component: StepTwoLeftThreeLeftComponent;
  let fixture: ComponentFixture<StepTwoLeftThreeLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTwoLeftThreeLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoLeftThreeLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
