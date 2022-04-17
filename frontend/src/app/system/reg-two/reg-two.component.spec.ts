import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTwoComponent } from './reg-two.component';

describe('RegTwoComponent', () => {
  let component: RegTwoComponent;
  let fixture: ComponentFixture<RegTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
