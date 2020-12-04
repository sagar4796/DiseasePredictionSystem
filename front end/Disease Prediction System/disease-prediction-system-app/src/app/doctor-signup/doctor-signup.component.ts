import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { NgServiceService } from '../ng-service.service';
import { Doctor } from '../doctor';
import { State } from '../state';
import { City } from '../city';

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
  state = new State();
  city = new City();
  stateList: State[];
  cityList: City[];
  selectedFile: File;
  doctorId: number;

  constructor(private route: Router, private service: NgServiceService) { }

  ngOnInit(): void {
    this.getStateList();
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
public onFileChanged(event){
  this.selectedFile = event.target.files[0];
  console.log(this.selectedFile);
}


  // tslint:disable-next-line:typedef
  // getDoctorStateId(stateId: number){
  //     console.log('selected');
  //     this.doctor.doctorStateId = stateId;
  //     console.log(this.doctor.doctorStateId);
  // }

  // tslint:disable-next-line:typedef
  doctorRegister(){
    this.service.getDoctorByUsername(this.doctor.username).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.msg = "Username is already exist, please choose other";
        }else{
          let i = 0;
          for (i = 0; i < this.cityList.length; i++){
              if (this.city.cityName === this.cityList[i].cityName){
                  this.city.cityId = this.cityList[i].cityId;
              }
          }
          this.doctor.cityId = this.city.cityId;
          this.doctor.departmentId = 1;
          this.doctor.verified = false;
          this.doctor.declined = false;
          const selectedImageData = new FormData();
          selectedImageData.append('imagefile', this.selectedFile);
          this.service.doctorRegister(this.doctor).subscribe(
            data => {
              // tslint:disable-next-line:quotemark
              console.log("response receiver");
              console.log(data);
              console.log(data.status);
              if (data.status === 1){
                this.doctorId = data.response.doctorId;
                console.log('doctorId -->' + this.doctorId);
                this.service.saveDoctorCertificate(this.doctorId, selectedImageData).subscribe(
                  // tslint:disable-next-line:no-shadowed-variable
                  data => {
                    // tslint:disable-next-line:quotemark
                    console.log("response receiver");
                    console.log(data);
                    console.log(data.status);
                    if (data.status === 1){
                      this.goToDoctorWait();
                    }
                  },
                  error => {
                    console.log('exception occured');
                    this.msg = 'invalid information, please enter valid information';
                  }
                );
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
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.msg = 'There is some problem please refresh this page';
      }
    );
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
    this.doctor.doctorStateId = this.state.stateId;
    this.service.getCityListByState(this.doctor.doctorStateId).subscribe(
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

}
