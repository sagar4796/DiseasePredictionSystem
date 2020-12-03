import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-actions',
  templateUrl: './patient-actions.component.html',
  styleUrls: ['./patient-actions.component.css']
})
export class PatientActionsComponent implements OnInit {
  patientId: number;
  // @Output()    featureSelected = new EventEmitter<string>();


  // // tslint:disable-next-line:typedef
  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }


  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.patientId = parseInt(this.activatedRoute.snapshot.paramMap.get('patientId'));
  }

  // tslint:disable-next-line:typedef
  goToPredictDisease(){
    this.router.navigate(['/predictDisease', this.patientId]);
  }

  // tslint:disable-next-line:typedef
  goToPatientRequestToDoctor(){
    this.router.navigate(['/patientRequestToDoctor', this.patientId]);
  }

  goToWelcome(){
    this.router.navigate(['/home']);
  }

  goToPatientGetDoctorResponse(){
    this.router.navigate(['/responseOfDoctor', this.patientId]);
  }

  goToGetDisease(){
    this.router.navigate(['diseaseInfomationForPatient', this.patientId]);

  }

}
