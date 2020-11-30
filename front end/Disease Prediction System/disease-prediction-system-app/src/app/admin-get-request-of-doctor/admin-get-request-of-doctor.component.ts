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
  msgNewRequest = '';
  msgVerifiedRequest = '';
  msgDeclinedRequest = '';
  doctor = new Doctor();
  verifiedDoctorList: Doctor[];
  declinedDoctorList: Doctor[];

  constructor(private route: Router, private service: NgServiceService) { }

  ngOnInit(): void {
    this.adminGetDoctorRequest();
    this.getVerifiedDoctorList();
    this.getDeclinedDoctorList();
  }

  // tslint:disable-next-line:typedef
  openModal() {
    document.getElementById('myModal').style.display = 'block';
  }


  // tslint:disable-next-line:typedef
  // getCertificateImage(doctorId: number){
  //   this.service.getCertificateByDoctorId(doctorId).subscribe(
  //     data => {
  //       this.base64Data = data.response.certificate;
  //       this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  //     },
  //     error => {
  //       console.log('exception occured');
  //       this.msg = 'There is some problem please refresh this page';
  //     }
  //   );
  //   this.goToVIewCertificate(this.retrievedImage);
  // }


  // tslint:disable-next-line:typedef
  goToVIewCertificate(doctorId: number){
    this.route.navigate(['/ViewDoctorCertificate', doctorId]);
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
            this.msgNewRequest = 'There is no new request available at this time';
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
  updateDoctorIsVerify(doctor: Doctor){
    // let i = 0;
    // for (i = 0; i < this.doctorList.length; i++){
    //   if (doctorId === this.doctorList[i].doctorId){
    //     this.doctor = this.doctorList[i];
    //   }
    // }
    doctor.verified = true;
    this.service.updateDoctor(doctor).subscribe(
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
  updateDoctorIsVerifiedFromDeclined(doctor: Doctor){
    // let i = 0;
    // for (i = 0; i < this.declinedDoctorList.length; i++){
    //   if (doctorId === this.declinedDoctorList[i].doctorId){
    //     this.doctor = this.declinedDoctorList[i];
    //   }
    // }
    doctor.verified = true;
    doctor.declined = false;
    this.service.updateDoctor(doctor).subscribe(
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
  updateDoctorIsDeclinedFromVerified(doctor: Doctor){
    // let i = 0;
    // for (i = 0; i < this.verifiedDoctorList.length; i++){
    //   if (doctorId === this.verifiedDoctorList[i].doctorId){
    //     this.doctor = this.verifiedDoctorList[i];
    //   }
    // }
    doctor.verified = false;
    doctor.declined = true;
    this.service.updateDoctor(doctor).subscribe(
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
  updateDoctorIsDeclined(doctor: Doctor){
    // let i = 0;
    // for (i = 0; i < this.doctorList.length; i++){
    //   if (doctorId === this.doctorList[i].doctorId){
    //     this.doctor = this.doctorList[i];
    //   }
    // }
    doctor.declined = true;
    this.service.updateDoctor(doctor).subscribe(
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
          if (this.verifiedDoctorList.length === 0){
            this.msgVerifiedRequest = 'There is no doctor verified yet';
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
          if (this.declinedDoctorList.length === 0){
            this.msgDeclinedRequest = 'There is no declined request available';
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
