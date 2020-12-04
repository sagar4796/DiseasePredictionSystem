import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgServiceService } from '../ng-service.service';
import { Symptom } from '../symptom';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-patient-predict-disease',
  templateUrl: './patient-predict-disease.component.html',
  styleUrls: ['./patient-predict-disease.component.css']
})
export class PatientPredictDiseaseComponent implements OnInit {

  msg = '';
  patientId: number;
  msgForSymptom = '';
  symptomList: Symptom[];
  diseaseName: string;

  // symptom1 = 'Select';
  // symptom2 = 'Select';
  // symptom3 = 'Select';
  // symptom4 = 'Select';
  // symptom5 = 'Select';


  symptom1: string;
  symptom2: string;
  symptom3: string;
  symptom4: string;
  symptom5: string;




  constructor(private route: Router, private service: NgServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.patientId = parseInt(this.activatedRoute.snapshot.paramMap.get('patientId'));
    this.getSymptom();
  }

  // tslint:disable-next-line:typedef
  goToPatientAction(){
    this.route.navigate(['/patientActions', this.patientId]);
  }

  goToWelcome(){
		this.route.navigate(['/home']);
  }

  predictDisease(){
    console.log("symptom1 ->"  + this.symptom1);
    console.log("symptom2 ->"  + this.symptom2);
    console.log("symptom3 ->"  + this.symptom3);
    console.log("symptom4 ->"  + this.symptom4);
    console.log("symptom5 ->"  + this.symptom5);
    this.service.getDiseaseFromSymptoms(this.symptom1, this.symptom2, this.symptom3, this.symptom4, this.symptom5).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.prediction);
        this.diseaseName = data.prediction;
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.msgForSymptom = 'There is some problem please refresh this page';
      }
    );
  }
  

  getSymptom(){
    this.service.getSortedSymptoms().subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.symptomList = data.response;
          if (this.symptomList.length === 0){
            this.msgForSymptom = 'There is no Disease';
          }
        }else{
          this.msgForSymptom = 'There is some problem please refresh this page';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.msgForSymptom = 'There is some problem please refresh this page';
      }
    );
  }


}
