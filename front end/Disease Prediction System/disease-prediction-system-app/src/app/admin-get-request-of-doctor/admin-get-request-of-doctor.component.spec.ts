import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetRequestOfDoctorComponent } from './admin-get-request-of-doctor.component';

describe('AdminGetRequestOfDoctorComponent', () => {
  let component: AdminGetRequestOfDoctorComponent;
  let fixture: ComponentFixture<AdminGetRequestOfDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetRequestOfDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetRequestOfDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
