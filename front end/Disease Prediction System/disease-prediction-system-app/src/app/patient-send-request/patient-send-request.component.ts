import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgServiceService } from '../ng-service.service';
import {NgForm} from '@angular/forms';
import {Request} from '../request';

@Component({
  selector: 'app-patient-send-request',
  templateUrl: './patient-send-request.component.html',
  styleUrls: ['./patient-send-request.component.css']
})
export class PatientSendRequestComponent implements OnInit {

  patientId: number;
  doctorId: number;
  req = new Request();
  requestMessage: string;
  msg = '';

  constructor(private route: Router, private service: NgServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.patientId = parseInt(this.activatedRoute.snapshot.paramMap.get('patientId'));
    // tslint:disable-next-line:radix
    this.doctorId = parseInt(this.activatedRoute.snapshot.paramMap.get('doctorId'));
  }

  // tslint:disable-next-line:typedef
  submitRequest(){
    this.req.patientId = this.patientId;
    this.req.doctorId = this.doctorId;
    this.req.complete = false;
    console.log('requestMessage -->' + this.req.request);
    this.service.savePatientRequest(this.req).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.goToPatientRequestToDoctor();
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
  goToPatientRequestToDoctor(){
    this.route.navigate(['patientRequestToDoctor', this.patientId]);
  }



}
