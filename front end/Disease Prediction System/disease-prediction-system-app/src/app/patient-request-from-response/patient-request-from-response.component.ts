import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgServiceService } from '../ng-service.service';
import { Request } from '../request';

@Component({
  selector: 'app-patient-request-from-response',
  templateUrl: './patient-request-from-response.component.html',
  styleUrls: ['./patient-request-from-response.component.css']
})
export class PatientRequestFromResponseComponent implements OnInit {

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

  submitRequest(){
    this.req.patientId = this.patientId;
    this.req.doctorId = this.doctorId;
    this.req.complete = false;
    console.log("patientID -->" + this.patientId);
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

  goToPatientRequestToDoctor(){
    this.route.navigate(['responseOfDoctor', this.patientId]);
  }

  goToWelcome(){
    this.route.navigate(['/home']);
  }

}
