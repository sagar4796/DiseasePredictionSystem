import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Admin} from './admin';
import { Patient } from './patient';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class NgServiceService {

  constructor(private http: HttpClient) { }

  // Admin login (getAdmin(username, password))
  public loginAdmin(username: string, password: string): Observable<any>{
    // tslint:disable-next-line:quotemark
    return this.http.get<any>("http://localhost:8080/admin/getAdmin/" + username + "/" + password);
  }


  // Doctor Login (getDoctor(username, password))
  public loginDoctor(username: string, password: string): Observable<any>{
    // tslint:disable-next-line:quotemark
    return this.http.get<any>("http://localhost:8080/doctor/getDoctor/" + username + "/" + password);
  }

  // Patient Login
  public loginPatient(username: string, password: string): Observable<any>{
     // tslint:disable-next-line:quotemark
    return this.http.get<any>("http://localhost:8080/patient/getPatient/" + username + "/" + password);
  }

  // Patient Registration
  public patientRegister(patient: Patient): Observable<any>{
         // tslint:disable-next-line:quotemark
    return this.http.post<any>("http://localhost:8080/patient/savePatient", patient);
  }

  // doctor registration
  public doctorRegister(doctor: Doctor): Observable<any>{
    // tslint:disable-next-line:quotemark
    return this.http.post<any>("http://localhost:8080/doctor/saveDoctor", doctor);
  }

  public getStateList(): Observable<any>{
    // tslint:disable-next-line:quotemark
    return this.http.get<any>("http://localhost:8080/location/getAllState");
  }

  public getCityListByState(steteId: number): Observable<any>{
    // tslint:disable-next-line:quotemark
    return this.http.get<any>("http://localhost:8080/location/getCityByState/" + steteId);
  }

  // public getCityList(): Observable<any>{
  //   // tslint:disable-next-line:quotemark
  //   return this.http.get<any>("http://localhost:8080/patient/getPatient/");
  // }
}
