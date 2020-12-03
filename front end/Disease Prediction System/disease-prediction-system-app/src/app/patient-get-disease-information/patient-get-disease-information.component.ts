import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Disease } from '../disease';
import { NgServiceService } from '../ng-service.service';

@Component({
  selector: 'app-patient-get-disease-information',
  templateUrl: './patient-get-disease-information.component.html',
  styleUrls: ['./patient-get-disease-information.component.css']
})
export class PatientGetDiseaseInformationComponent implements OnInit {
  diseaseList: Disease[];
  msgForDisease = '';
  patientId: number;

  constructor(private route: Router, private service: NgServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.patientId = parseInt(this.activatedRoute.snapshot.paramMap.get('patientId'));
    this.getDisease();
  }

  getDisease(){
    this.service.getDisease().subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.diseaseList = data.response;
          if (this.diseaseList.length === 0){
            this.msgForDisease = 'There is no Disease';
          }
        }else{
          this.msgForDisease = 'There is some problem please refresh this page';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.msgForDisease = 'There is some problem please refresh this page';
      }
    );
  }

  goToWelcome(){
    this.route.navigate(['/home']);
  }

  goToPatientActions(){
    this.route.navigate(['/patientActions', this.patientId]);
  }

}
