import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgServiceService } from '../ng-service.service';
import { Request } from '../request';
import { Response } from '../response';
import {NgForm} from '@angular/forms';
import { Patient } from '../patient';

@Component({
  selector: 'app-doctor-response-to-patient',
  templateUrl: './doctor-response-to-patient.component.html',
  styleUrls: ['./doctor-response-to-patient.component.css']
})
export class DoctorResponseToPatientComponent implements OnInit {

  doctorId: number;
  patientId: number;
  requestId: number;
  res = new Response();
  msg = '';
  patient = new Patient();
  request: string;
  requestComplete = new Request();

  constructor(private route: Router, private service: NgServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.doctorId = parseInt(this.activatedRoute.snapshot.paramMap.get('doctorId'));
    // tslint:disable-next-line:radix
    this.patientId = parseInt(this.activatedRoute.snapshot.paramMap.get('patientId'));
    // tslint:disable-next-line:radix
    this.requestId = parseInt(this.activatedRoute.snapshot.paramMap.get('requestId'));
    this.getPatientByPatientId(this.patientId);
    this.getRequestByRequestId(this.requestId);
  }

  // tslint:disable-next-line:typedef
  getPatientByPatientId(patientId: number){
    this.service.getPatientByPatientId(patientId).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.patient = data.response;
        }else{
          this.msg = 'There is some problem please refresh this page';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.msg = 'There is some problem please refresh this page';
      }
    );
  }

  // tslint:disable-next-line:typedef
  getRequestByRequestId(requestId: number){
    this.service.getRequestByRequestId(requestId).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.request = data.response.request;
        }else{
          this.msg = 'There is some problem please refresh this page';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.msg = 'There is some problem please refresh this page';
      }
    );
  }


  // tslint:disable-next-line:typedef
  submitResponse(){
    this.res.doctorId = this.doctorId;
    this.res.patientId = this.patientId;
    this.res.requestId = this.requestId;
    this.service.saveResponse(this.res).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.requestComplete.patientId = this.patientId;
          this.requestComplete.doctorId = this.doctorId;
          this.requestComplete.requestId = this.requestId;
          this.requestComplete.request = this.request;
          this.requestComplete.complete = true;
          this.service.savePatientRequest(this.requestComplete).subscribe();
          this.goToDoctorGetPatientRequest();
        }else{
          this.msg = 'There is some problem please refresh this page';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.msg = 'There is some problem please refresh this page';
      }
    );
  }

  // tslint:disable-next-line:typedef
  goToDoctorGetPatientRequest(){
    this.route.navigate(['doctorGetRequestOfPatient', this.doctorId]);
  }

}
