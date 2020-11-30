import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { Patient } from '../patient';
import { NgServiceService } from '../ng-service.service';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {
  patient = new Patient();
  msg = '';

  // @Output()    featureSelected = new EventEmitter<string>();

  // // tslint:disable-next-line:typedef
  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }

  constructor(private route: Router, private service: NgServiceService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToWelcome(){
    this.route.navigate(['/home']);
  }

  // tslint:disable-next-line:typedef
  goToPatientLogin(){
    this.route.navigate(['/patientLogin']);
  }

  // tslint:disable-next-line:typedef
  patientRegister(){
    this.patient.declined = false;
    this.service.patientRegister(this.patient).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.goToPatientLogin();
        }else{
          this.msg = 'invalid information, please enter valid information';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.msg = 'invalid information, please enter valid information';
      }
    );
  }

}
