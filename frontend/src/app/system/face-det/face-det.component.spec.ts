import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceDetComponent } from './face-det.component';

describe('FaceDetComponent', () => {
  let component: FaceDetComponent;
  let fixture: ComponentFixture<FaceDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
