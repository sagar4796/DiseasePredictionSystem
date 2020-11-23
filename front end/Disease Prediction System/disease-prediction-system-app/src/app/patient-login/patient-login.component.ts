import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router';
import { NgServiceService } from '../ng-service.service';
import { Patient } from '../patient';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PAtientLoginComponent implements OnInit {

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
    goToPatientSignup(){
    this.route.navigate(['/patientSignup']);
    }

    // tslint:disable-next-line:typedef
    goToPatientActions(){
      this.route.navigate(['/patientActions']);
    }

    // tslint:disable-next-line:typedef
    goToWelcome(){
      this.route.navigate(['/home']);
    }

    // tslint:disable-next-line:typedef
    loginPatient(){
      this.service.loginPatient(this.patient.username, this.patient.password).subscribe(
        data => {
          // tslint:disable-next-line:quotemark
          console.log("response receiver");
          console.log(data);
          console.log(data.status);
          if (data.status === 1){
            this.goToPatientActions();
          }else{
            this.msg = 'wrong credentials, please enter valid username and password';
          }
        },
        error => {
          // tslint:disable-next-line:quotemark
          console.log("exception occured");
          this.msg = 'wrong credentials, please enter valid username and password';
        }
      );
    }


}
