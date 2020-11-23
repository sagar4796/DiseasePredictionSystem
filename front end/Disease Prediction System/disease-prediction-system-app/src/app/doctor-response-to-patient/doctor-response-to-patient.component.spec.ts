import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorResponseToPatientComponent } from './doctor-response-to-patient.component';

describe('DoctorResponseToPatientComponent', () => {
  let component: DoctorResponseToPatientComponent;
  let fixture: ComponentFixture<DoctorResponseToPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorResponseToPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorResponseToPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
