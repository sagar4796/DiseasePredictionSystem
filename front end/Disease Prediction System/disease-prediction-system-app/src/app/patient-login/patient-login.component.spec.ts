import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAtientLoginComponent } from './patient-login.component';

describe('PAtientLoginComponent', () => {
  let component: PAtientLoginComponent;
  let fixture: ComponentFixture<PAtientLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PAtientLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PAtientLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
