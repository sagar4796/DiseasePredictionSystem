import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Disease } from '../disease';
import { NgServiceService } from '../ng-service.service';
import { Symptom } from '../symptom';

@Component({
  selector: 'app-disease-and-symptom',
  templateUrl: './disease-and-symptom.component.html',
  styleUrls: ['./disease-and-symptom.component.css']
})
export class DiseaseAndSymptomComponent implements OnInit {
  diseaseList: Disease[];
  msgForDisease = '';
  msgForSymptom = '';
  symptomList: Symptom[];

  constructor(private route: Router, private service: NgServiceService) { }

  ngOnInit(): void {
    this.getDisease();
    this.getSymptom();
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

  getSymptom(){
    this.service.getSymptom().subscribe(
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


  goToAdminActions(){
    this.route.navigate(['/adminActions']);
  }

  goToWelcome(){
    this.route.navigate(['/home']);
  }

}
