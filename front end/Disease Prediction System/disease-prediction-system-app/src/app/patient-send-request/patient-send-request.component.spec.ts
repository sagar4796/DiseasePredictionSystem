import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSendRequestComponent } from './patient-send-request.component';

describe('PatientSendRequestComponent', () => {
  let component: PatientSendRequestComponent;
  let fixture: ComponentFixture<PatientSendRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSendRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
