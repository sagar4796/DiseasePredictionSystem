import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPredictDiseaseComponent } from './patient-predict-disease.component';

describe('PatientPredictDiseaseComponent', () => {
  let component: PatientPredictDiseaseComponent;
  let fixture: ComponentFixture<PatientPredictDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPredictDiseaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPredictDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
