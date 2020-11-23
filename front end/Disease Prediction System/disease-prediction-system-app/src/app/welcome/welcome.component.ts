import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Output()    featureSelected = new EventEmitter<string>();

  // tslint:disable-next-line:typedef
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }


  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToAdminLogin(){
    this.route.navigate(['/adminLogin']);
  }

  // tslint:disable-next-line:typedef
  goToPatientLogin(){
    this.route.navigate(['/patientLogin']);
  }

  // tslint:disable-next-line:typedef
  goToDoctorLogin(){
    this.route.navigate(['/doctorLogin']);
  }

}
