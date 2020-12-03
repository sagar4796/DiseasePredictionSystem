import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGetResponseForRequestComponent } from './patient-get-response-for-request.component';

describe('PatientGetResponseForRequestComponent', () => {
  let component: PatientGetResponseForRequestComponent;
  let fixture: ComponentFixture<PatientGetResponseForRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientGetResponseForRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGetResponseForRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
