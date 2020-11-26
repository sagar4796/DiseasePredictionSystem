import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewDoctorCertificateComponent } from './admin-view-doctor-certificate.component';

describe('AdminViewDoctorCertificateComponent', () => {
  let component: AdminViewDoctorCertificateComponent;
  let fixture: ComponentFixture<AdminViewDoctorCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewDoctorCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewDoctorCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
