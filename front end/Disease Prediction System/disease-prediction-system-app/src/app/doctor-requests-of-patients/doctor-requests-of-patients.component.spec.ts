import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRequestsOfPatientsComponent } from './doctor-requests-of-patients.component';

describe('DoctorRequestsOfPatientsComponent', () => {
  let component: DoctorRequestsOfPatientsComponent;
  let fixture: ComponentFixture<DoctorRequestsOfPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorRequestsOfPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRequestsOfPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
