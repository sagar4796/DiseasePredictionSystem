import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router';
import { Doctor } from '../doctor';
import { NgServiceService } from '../ng-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  doctor = new Doctor();
  msg = '';

  constructor(private route: Router, private service: NgServiceService) { }

  // @Output()    featureSelected = new EventEmitter<string>();


  // // tslint:disable-next-line:typedef
  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToDoctorSignup(){
    this.route.navigate(['/doctorSignup']);
  }

  // tslint:disable-next-line:typedef
  goToDoctorActions(){
    this.route.navigate(['/doctorActions']);
  }

  // tslint:disable-next-line:typedef
  goToWelcome(){
    this.route.navigate(['/home']);
  }

  // tslint:disable-next-line:typedef
  loginDoctor(){
    this.service.loginDoctor(this.doctor.username, this.doctor.password).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.goToDoctorActions();
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
