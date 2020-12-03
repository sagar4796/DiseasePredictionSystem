import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { NgServiceService } from '../ng-service.service';
import { Response } from '../response';

@Component({
  selector: 'app-patient-get-response-for-request',
  templateUrl: './patient-get-response-for-request.component.html',
  styleUrls: ['./patient-get-response-for-request.component.css']
})
export class PatientGetResponseForRequestComponent implements OnInit {
  patientId: number;
  doctorId: number;
  requestId: number;
  responseList: Response[];
  responseListMsg = '';
  doctor = new Doctor();

  constructor(private route: Router, private service: NgServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.patientId = parseInt(this.activatedRoute.snapshot.paramMap.get('patientId'));
    this.doctorId = parseInt(this.activatedRoute.snapshot.paramMap.get('doctorId'));
    this.requestId = parseInt(this.activatedRoute.snapshot.paramMap.get('requestId'));
    this.getResponseByRequestId();
    this.getDoctorByDoctorId();
  }

  goToWelcome(){
    this.route.navigate(['/home']);
  }

  goToPatientGetAllRequests(){
    this.route.navigate(['/responseOfDoctor', this.patientId]);
  }

  goToPatientRequestFromResponse(){
    this.route.navigate(['/requestDoctorFromResponse', this.patientId, this.doctorId]);
  }

  getResponseByRequestId(){
    this.service.getResponseByRequestId(this.requestId).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.responseList = data.response;
          if (this.responseList.length === 0){
            this.responseListMsg = 'No responce made for this request, please check after some time';
          }
        }else{
          this.responseListMsg = 'There is some problem please refresh this page';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.responseListMsg = 'There is some problem please refresh this page';
      }
    );
  }

  getDoctorByDoctorId(){
    this.service.getDoctorByDoctorId(this.doctorId).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.doctor = data.response;
        }else{
          this.responseListMsg = 'There is some problem please refresh this page';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.responseListMsg = 'There is some problem please refresh this page';
      }
    );
  }

}
