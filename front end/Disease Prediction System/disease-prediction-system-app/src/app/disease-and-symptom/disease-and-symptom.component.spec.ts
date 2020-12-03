import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseAndSymptomComponent } from './disease-and-symptom.component';

describe('DiseaseAndSymptomComponent', () => {
  let component: DiseaseAndSymptomComponent;
  let fixture: ComponentFixture<DiseaseAndSymptomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseaseAndSymptomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseAndSymptomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
