import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTwoComponent } from './auth-two.component';

describe('AuthTwoComponent', () => {
  let component: AuthTwoComponent;
  let fixture: ComponentFixture<AuthTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
