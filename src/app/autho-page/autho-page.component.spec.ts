import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoPageComponent } from './autho-page.component';

describe('AuthoPageComponent', () => {
  let component: AuthoPageComponent;
  let fixture: ComponentFixture<AuthoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
