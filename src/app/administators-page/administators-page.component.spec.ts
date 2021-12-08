import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministatorsPageComponent } from './administators-page.component';

describe('AdministatorsPageComponent', () => {
  let component: AdministatorsPageComponent;
  let fixture: ComponentFixture<AdministatorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministatorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministatorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
