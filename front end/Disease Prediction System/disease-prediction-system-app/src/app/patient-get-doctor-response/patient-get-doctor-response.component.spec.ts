import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGetDoctorResponseComponent } from './patient-get-doctor-response.component';

describe('PatientGetDoctorResponseComponent', () => {
  let component: PatientGetDoctorResponseComponent;
  let fixture: ComponentFixture<PatientGetDoctorResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientGetDoctorResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGetDoctorResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
