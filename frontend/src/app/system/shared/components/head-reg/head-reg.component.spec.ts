import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadRegComponent } from './head-reg.component';

describe('HeadRegComponent', () => {
  let component: HeadRegComponent;
  let fixture: ComponentFixture<HeadRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
