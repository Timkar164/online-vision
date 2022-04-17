import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepStaticticComponent } from './step-statictic.component';

describe('StepStaticticComponent', () => {
  let component: StepStaticticComponent;
  let fixture: ComponentFixture<StepStaticticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepStaticticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepStaticticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
