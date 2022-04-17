import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOneComponent } from './auth-one.component';

describe('AuthOneComponent', () => {
  let component: AuthOneComponent;
  let fixture: ComponentFixture<AuthOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
