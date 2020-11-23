import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorWaitComponent } from './doctor-wait.component';

describe('DoctorWaitComponent', () => {
  let component: DoctorWaitComponent;
  let fixture: ComponentFixture<DoctorWaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorWaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
