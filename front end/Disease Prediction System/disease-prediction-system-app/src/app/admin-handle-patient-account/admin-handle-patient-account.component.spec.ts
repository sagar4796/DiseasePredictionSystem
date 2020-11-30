import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHandlePatientAccountComponent } from './admin-handle-patient-account.component';

describe('AdminHandlePatientAccountComponent', () => {
  let component: AdminHandlePatientAccountComponent;
  let fixture: ComponentFixture<AdminHandlePatientAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHandlePatientAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHandlePatientAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
