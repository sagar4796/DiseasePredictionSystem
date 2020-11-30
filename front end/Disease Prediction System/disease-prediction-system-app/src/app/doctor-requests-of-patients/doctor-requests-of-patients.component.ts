import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgServiceService } from '../ng-service.service';
import { Request } from '../request';
import { Response } from '../response';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-doctor-requests-of-patients',
  templateUrl: './doctor-requests-of-patients.component.html',
  styleUrls: ['./doctor-requests-of-patients.component.css']
})
export class DoctorRequestsOfPatientsComponent implements OnInit {

  doctorId: number;
  response = new Response();
  notCompletedRequestList: Request[];
  completedRequestList: Request[];
  msgForCompleted = '';
  msgForNotCompleted = '';

  constructor(private route: Router, private service: NgServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.doctorId = parseInt(this.activatedRoute.snapshot.paramMap.get('doctorId'));
    this.getNotCompletedRequestList();
    this.getCompletedRequestList();
  }

  // tslint:disable-next-line:typedef
  getNotCompletedRequestList(){
    this.service.getPatientRequest(this.doctorId, false).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.notCompletedRequestList = data.response;
          if (this.notCompletedRequestList.length === 0){
            this.msgForNotCompleted = 'There is no new request available';
          }
        }else{
          this.msgForNotCompleted = 'There is some problem please refresh this page';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.msgForNotCompleted = 'There is some problem please refresh this page';
      }
    );

  }

  // tslint:disable-next-line:typedef
  getCompletedRequestList(){
    this.service.getPatientRequest(this.doctorId, true).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.completedRequestList = data.response;
          if (this.completedRequestList.length === 0){
            this.msgForCompleted = 'There is no request completed yet';
          }
        }else{
          this.msgForCompleted = 'There is some problem please refresh this page';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.msgForCompleted = 'There is some problem please refresh this page';
      }
    );
  }


  // tslint:disable-next-line:typedef
  goToDoctorResponseToPatient(patientId: number, requestId: number){
    this.route.navigate(['/doctorResponseToPatient', patientId, this.doctorId, requestId]);
  }

  // tslint:disable-next-line:typedef
  goToDoctorActions(){
    this.route.navigate(['/doctorActions', this.doctorId]);
  }

  // tslint:disable-next-line:typedef
  getPatientFirstName(req: Request): string{
    let patientFirstName: string;
    let patientLastName: string;
    this.service.getPatientByPatientId(req.patientId).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          patientFirstName = data.response.firstName;
          patientLastName = data.response.lastName;
        }else{
          this.msgForCompleted = 'There is no request completed yet';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.msgForCompleted = 'There is some problem please refresh this page';
      }
    );
    return patientFirstName + patientLastName;
  }

}
