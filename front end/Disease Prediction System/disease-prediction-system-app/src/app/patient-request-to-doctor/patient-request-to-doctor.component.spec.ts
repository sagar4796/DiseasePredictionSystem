import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRequestToDoctorComponent } from './patient-request-to-doctor.component';

describe('PatientRequestToDoctorComponent', () => {
  let component: PatientRequestToDoctorComponent;
  let fixture: ComponentFixture<PatientRequestToDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRequestToDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRequestToDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
