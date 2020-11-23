import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor-wait',
  templateUrl: './doctor-wait.component.html',
  styleUrls: ['./doctor-wait.component.css']
})
export class DoctorWaitComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToWelcome(){
    this.route.navigate(['/home']);
  }

}
