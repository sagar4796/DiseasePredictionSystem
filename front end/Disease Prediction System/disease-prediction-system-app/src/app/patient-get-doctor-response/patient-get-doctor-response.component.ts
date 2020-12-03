import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgServiceService } from '../ng-service.service';
import { Request } from '../request';

@Component({
  selector: 'app-patient-get-doctor-response',
  templateUrl: './patient-get-doctor-response.component.html',
  styleUrls: ['./patient-get-doctor-response.component.css']
})
export class PatientGetDoctorResponseComponent implements OnInit {

  patientId: number;
  msg = '';
  patientRequestList: Request[];
  patientRequestListmsg = '';

  constructor(private route: Router, private service: NgServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.patientId = parseInt(this.activatedRoute.snapshot.paramMap.get('patientId'));
    this.getPatientRequestByPatientId();
  }

  getPatientRequestByPatientId(){
    this.service.getRequestByPatientId(this.patientId).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.patientRequestList = data.response;
          if (this.patientRequestList.length === 0){
            this.patientRequestListmsg = 'you made no request to any doctor';
          }
        }else{
          this.patientRequestListmsg = 'There is some problem please refresh this page';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.patientRequestListmsg = 'There is some problem please refresh this page';
      }
    );
  }

  goToGetResponseForRequest(doctorId: number, requestId: number, ){
    this.route.navigate(['/responseForRequest',requestId, doctorId, this.patientId]);
  }

  goToWelcome(){
    this.route.navigate(['/home']);
  }

  goToPatientActions(){
    this.route.navigate(['/patientActions', this.patientId]);
  }

}
