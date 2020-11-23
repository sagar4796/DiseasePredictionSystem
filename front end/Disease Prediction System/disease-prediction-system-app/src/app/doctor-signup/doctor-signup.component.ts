import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { NgServiceService } from '../ng-service.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})
export class DoctorSignupComponent implements OnInit {

  // @Output()    featureSelected = new EventEmitter<string>();


  // // tslint:disable-next-line:typedef
  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }

  doctor = new Doctor();
  msg = '';

  constructor(private route: Router, private service: NgServiceService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToWelcome(){
    this.route.navigate(['/home']);
  }

  // tslint:disable-next-line:typedef
  goToDoctorWait(){
    this.route.navigate(['/doctorWait']);
  }

  // tslint:disable-next-line:typedef
  doctorRegister(){
    this.service.doctorRegister(this.doctor).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.goToDoctorWait();
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
