import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgServiceService } from '../ng-service.service';

@Component({
  selector: 'app-patient-predict-disease',
  templateUrl: './patient-predict-disease.component.html',
  styleUrls: ['./patient-predict-disease.component.css']
})
export class PatientPredictDiseaseComponent implements OnInit {

  msg = '';
  patientId: number;


  constructor(private route: Router, private service: NgServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.patientId = parseInt(this.activatedRoute.snapshot.paramMap.get('patientId'));
  }

  // tslint:disable-next-line:typedef
  goToPatientAction(){
    this.route.navigate(['/patientActions', this.patientId]);
  }

  goToWelcome(){
		this.route.navigate(['/home']);
	}

}
