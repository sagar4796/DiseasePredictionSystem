import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgServiceService } from '../ng-service.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-admin-handle-patient-account',
  templateUrl: './admin-handle-patient-account.component.html',
  styleUrls: ['./admin-handle-patient-account.component.css']
})
export class AdminHandlePatientAccountComponent implements OnInit {

  declinedPatientList: Patient[];
  notDeclinedPatientList: Patient[];
  msg = '';
  msgForNotDeclinedPatientList = '';
  msgForDeclinedPatientList = '';

  constructor(private route: Router, private service: NgServiceService) { }

  ngOnInit(): void {
    this.getDeclinedPatientList();
    this.getNotDeclinedPatientList();
  }

  // tslint:disable-next-line:typedef
  getNotDeclinedPatientList(){
    this.service.getPatientByDeclined(false).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.notDeclinedPatientList = data.response;
          if (this.notDeclinedPatientList.length === 0){
            this.msgForNotDeclinedPatientList = 'There is no Patient available at this time';
          }
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
  getDeclinedPatientList(){
    this.service.getPatientByDeclined(true).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.declinedPatientList = data.response;
          if (this.declinedPatientList.length === 0){
            this.msgForDeclinedPatientList = 'There is no rejected Patient available at this time';
          }
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
  rejectPatient(patient: Patient){
    patient.declined = true;
    this.service.patientRegister(patient).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.ngOnInit();
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
  approvePatient(patient: Patient){
    patient.declined = false;
    this.service.patientRegister(patient).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.ngOnInit();
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

}
