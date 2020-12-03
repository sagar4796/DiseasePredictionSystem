import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGetDiseaseInformationComponent } from './patient-get-disease-information.component';

describe('PatientGetDiseaseInformationComponent', () => {
  let component: PatientGetDiseaseInformationComponent;
  let fixture: ComponentFixture<PatientGetDiseaseInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientGetDiseaseInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGetDiseaseInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
