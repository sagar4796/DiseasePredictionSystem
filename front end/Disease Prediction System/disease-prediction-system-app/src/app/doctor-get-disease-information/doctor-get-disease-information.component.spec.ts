import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorGetDiseaseInformationComponent } from './doctor-get-disease-information.component';

describe('DoctorGetDiseaseInformationComponent', () => {
  let component: DoctorGetDiseaseInformationComponent;
  let fixture: ComponentFixture<DoctorGetDiseaseInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorGetDiseaseInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorGetDiseaseInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
