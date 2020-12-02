import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { NgServiceService } from '../ng-service.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // @Output()    featureSelected = new EventEmitter<string>();


  // // tslint:disable-next-line:typedef
  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }

  admin = new Admin();
  msg = '';

  constructor(private route: Router, private service: NgServiceService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToWelcome(){
    this.route.navigate(['/home']);
  }

  // tslint:disable-next-line:typedef
  goToAdminActions(){
    this.route.navigate(['/adminActions']);
  }

  goToHome(){
    this.route.navigate(['/home']);
  }

  // tslint:disable-next-line:typedef
  loginAdmin(){
    this.service.loginAdmin(this.admin.username, this.admin.password).subscribe(
      data => {
        // tslint:disable-next-line:quotemark
        console.log("response receiver");
        console.log(data);
        console.log(data.status);
        if (data.status === 1){
          this.goToAdminActions();
        }else{
          this.msg = 'wrong credentials, please enter valid username and password';
        }
      },
      error => {
        // tslint:disable-next-line:quotemark
        console.log("exception occured");
        this.msg = 'wrong credentials, please enter valid username and password';
      }
    );
  }
}
