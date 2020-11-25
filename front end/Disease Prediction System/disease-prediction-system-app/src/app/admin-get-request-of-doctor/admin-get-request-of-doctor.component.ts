import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { NgServiceService } from '../ng-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-get-request-of-doctor',
  templateUrl: './admin-get-request-of-doctor.component.html',
  styleUrls: ['./admin-get-request-of-doctor.component.css']
})
export class AdminGetRequestOfDoctorComponent implements OnInit {
  doctorList: Doctor[];
  msg = '';
  doctor = new Doctor();
  verifiedDoctorList: Doctor[];
  declinedDoctorList: Doctor[];
  retrievedImage: any;
  base64Data: any;

  constructor(private route: Router, private service: NgServiceService) { }

  ngOnInit(): void {
    this.adminGetDoctorRequest();
    this.getVerifiedDoctorList();
    this.getDeclinedDoctorList();
  }


  // tslint:disable-next-line:typedef
  getCertificateImage(doctorId: number){
    this.service.getCertificateByDoctorId(doctorId).subscribe(
      data => {
        this.base64Data = data.response.certificate;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      },
      error => {
        console.log('exception occured');
        this.msg = 'There is some problem please refresh this page';
      }
    );
  }





  // get all doctor request, where verified = false, declined = false;
  // tslint:disable-next-line:typedef
  adminGetDoctorRequest(){
    this.service.getDoctorByIsVerified(false).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.doctorList = data.response;
          if (this.doctorList.length === 0){
            this.msg = 'There is no new request available at this time';
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


  // set verify = true for doctor from all request part
  // tslint:disable-next-line:typedef
  updateDoctorIsVerify(doctorId: number){
    let i = 0;
    for (i = 0; i < this.doctorList.length; i++){
      if (doctorId === this.doctorList[i].doctorId){
        this.doctor = this.doctorList[i];
      }
    }
    this.doctor.verified = true;
    this.service.updateDoctor(this.doctor).subscribe(
      data => {
        console.log('response receiver');
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.ngOnInit();
        }else{
          this.msg = 'there is some problem, please refresh this page again';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.msg = 'There is some problem please refresh this page';
      }
    );
  }

  // set declined = false for doctor from declined part
  // tslint:disable-next-line:typedef
  updateDoctorIsVerifiedFromDeclined(doctorId: number){
    let i = 0;
    for (i = 0; i < this.declinedDoctorList.length; i++){
      if (doctorId === this.declinedDoctorList[i].doctorId){
        this.doctor = this.declinedDoctorList[i];
      }
    }
    this.doctor.verified = true;
    this.doctor.declined = false;
    this.service.updateDoctor(this.doctor).subscribe(
      data => {
        console.log('response receiver');
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.ngOnInit();
        }else{
          this.msg = 'there is some problem, please refresh this page again';
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
  updateDoctorIsDeclinedFromVerified(doctorId: number){
    let i = 0;
    for (i = 0; i < this.verifiedDoctorList.length; i++){
      if (doctorId === this.verifiedDoctorList[i].doctorId){
        this.doctor = this.verifiedDoctorList[i];
      }
    }
    this.doctor.verified = false;
    this.doctor.declined = true;
    this.service.updateDoctor(this.doctor).subscribe(
      data => {
        console.log('response receiver');
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.ngOnInit();
        }else{
          this.msg = 'there is some problem, please refresh this page again';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.msg = 'There is some problem please refresh this page';
      }
    );
  }


  // set declined = true for doctor from all request part
  // tslint:disable-next-line:typedef
  updateDoctorIsDeclined(doctorId: number){
    let i = 0;
    for (i = 0; i < this.doctorList.length; i++){
      if (doctorId === this.doctorList[i].doctorId){
        this.doctor = this.doctorList[i];
      }
    }
    this.doctor.declined = true;
    this.service.updateDoctor(this.doctor).subscribe(
      data => {
        console.log('response receiver');
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.ngOnInit();
        }else{
          this.msg = 'there is some problem, please refresh this page again';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.msg = 'There is some problem please refresh this page';
      }
    );
  }




  // get all verified doctor list
  // tslint:disable-next-line:typedef
  getVerifiedDoctorList(){
    this.service.getDoctorByIsVerified(true).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.verifiedDoctorList = data.response;
          if (this.doctorList.length === 0){
            this.msg = 'There is no new request available at this time';
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


  // get all declined doctor list
  // tslint:disable-next-line:typedef
  getDeclinedDoctorList(){
    this.service.getDoctorByDeclined(true).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.declinedDoctorList = data.response;
          if (this.doctorList.length === 0){
            this.msg = 'There is no declined request available';
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




}
