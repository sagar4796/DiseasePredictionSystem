import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgServiceService } from '../ng-service.service';

@Component({
  selector: 'app-admin-view-doctor-certificate',
  templateUrl: './admin-view-doctor-certificate.component.html',
  styleUrls: ['./admin-view-doctor-certificate.component.css']
})
export class AdminViewDoctorCertificateComponent implements OnInit {

  doctorId: number;
  retrievedImage: any;
  base64Data: any;
  msg = '';

  constructor(private route: Router, private service: NgServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.doctorId = parseInt(this.activatedRoute.snapshot.paramMap.get('doctorId'));
    this.getCertificateImage(this.doctorId);
  }

  // tslint:disable-next-line:typedef
  getCertificateImage(doctorId: number){
    this.service.getCertificateByDoctorId(doctorId).subscribe(
      data => {
        this.base64Data = data.response.certificate;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      },
      error => {
        console.log('exception occured');
        this.msg = 'There is some problem please refresh this page';
      }
    );
  }


  // tslint:disable-next-line:typedef
  goToAdminGetRequestOfDoctor(){
    this.route.navigate(['/adminGetRequestOfDoctor']);
  }

}
