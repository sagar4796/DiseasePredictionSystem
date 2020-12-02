import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgServiceService } from '../ng-service.service';

@Component({
  selector: 'app-doctor-actions',
  templateUrl: './doctor-actions.component.html',
  styleUrls: ['./doctor-actions.component.css']
})
export class DoctorActionsComponent implements OnInit {

  doctorId: number;

  constructor(private route: Router, private service: NgServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.doctorId = parseInt(this.activatedRoute.snapshot.paramMap.get('doctorId'));
  }

  // tslint:disable-next-line:typedef
  goToDoctorGetRequestOfPatient(){
    this.route.navigate(['/doctorGetRequestOfPatient', this.doctorId]);
  }

  goToWelcome(){
		this.route.navigate(['/home']);
	}

}
