import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRequestFromResponseComponent } from './patient-request-from-response.component';

describe('PatientRequestFromResponseComponent', () => {
  let component: PatientRequestFromResponseComponent;
  let fixture: ComponentFixture<PatientRequestFromResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRequestFromResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRequestFromResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
