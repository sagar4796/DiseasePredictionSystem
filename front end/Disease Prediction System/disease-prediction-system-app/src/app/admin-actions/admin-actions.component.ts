import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-actions',
  templateUrl: './admin-actions.component.html',
  styleUrls: ['./admin-actions.component.css']
})
export class AdminActionsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToAdminGetRequestOfDoctor(){
    this.route.navigate(['/adminGetRequestOfDoctor']);
  }

  goToAdminHandlePatientAccount(){
    this.route.navigate(['/patientAccounts']);
  }

  goToWelcome(){
    this.route.navigate(['/home']);
  }

}
