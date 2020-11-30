import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../city';
import { Doctor } from '../doctor';
import { NgServiceService } from '../ng-service.service';
import { State } from '../state';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-patient-request-to-doctor',
  templateUrl: './patient-request-to-doctor.component.html',
  styleUrls: ['./patient-request-to-doctor.component.css']
})
export class PatientRequestToDoctorComponent implements OnInit {
  msg = '';
  state = new State();
  city = new City();
  stateList: State[];
  cityList: City[];
  doctorList: Doctor[];
  doctor = new Doctor();
  patientId: number;
  constructor(private route: Router, private service: NgServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.patientId = parseInt(this.activatedRoute.snapshot.paramMap.get('patientId'));
    this.getStateList();
  }


  // tslint:disable-next-line:typedef
  goToViewDoctorForRequest(doctorId: number){
    this.route.navigate(['/patientSendRequest', this.patientId, doctorId]);
  }

  // tslint:disable-next-line:typedef
  goToPatientActions(){
    this.route.navigate(['/patientActions', this.patientId]);
  }

   // tslint:disable-next-line:typedef
   getStateList(){
    this.service.getStateList().subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.stateList = data.response;
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
  getCityListByStateId(){
    // tslint:disable-next-line:curly
    let i = 0;
    for (i = 0; i < this.stateList.length; i++){
        if (this.state.stateName === this.stateList[i].stateName){
            this.state.stateId = this.stateList[i].stateId;
        }
    }
    // this.doctor.doctorStateId = this.state.stateId;
    this.service.getCityListByState(this.state.stateId).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.cityList = data.response;
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
  getDoctorByCity(){
    let i = 0;
    for (i = 0; i < this.cityList.length; i++){
      if (this.city.cityName === this.cityList[i].cityName){
        this.city.cityId = this.cityList[i].cityId;
      }
    }
    this.service.getDoctorByCity(this.city.cityId).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.doctorList = data.response;
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
