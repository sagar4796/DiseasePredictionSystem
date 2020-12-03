import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Disease } from '../disease';
import { NgServiceService } from '../ng-service.service';

@Component({
  selector: 'app-doctor-get-disease-information',
  templateUrl: './doctor-get-disease-information.component.html',
  styleUrls: ['./doctor-get-disease-information.component.css']
})
export class DoctorGetDiseaseInformationComponent implements OnInit {
  diseaseList: Disease[];
  msgForDisease = '';
  doctorId: number;

  constructor(private route: Router, private service: NgServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.doctorId = parseInt(this.activatedRoute.snapshot.paramMap.get('doctorId'));
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

  goToDoctorActions(){
    this.route.navigate(['/doctorActions', this.doctorId]);
  }

  goToWelcome(){
    this.route.navigate(['/home']);
  }

}
