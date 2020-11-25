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


  // Admin

  // Admin login (getAdmin(username, password))
  public loginAdmin(username: string, password: string): Observable<any>{
    // tslint:disable-next-line:quotemark
    return this.http.get<any>("http://localhost:8080/admin/getAdmin/" + username + "/" + password);
  }





  // Doctor

  // Doctor Login (getDoctor(username, password))
  public loginDoctor(username: string, password: string): Observable<any>{
    // tslint:disable-next-line:quotemark
    return this.http.get<any>("http://localhost:8080/doctor/getDoctor/" + username + "/" + password);
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

  public getDoctorByCity(cityId: number): Observable<any>{
    return this.http.get<any>('http://localhost:8080/doctor/getDoctor/getDoctorByCity/' + cityId);
  }


  // upload doctor certificate
  public saveDoctorCertificate(doctorId: number, selectedImageData: FormData): Observable<any>{
    // tslint:disable-next-line:quotemark
    return this.http.post<any>("http://localhost:8080/doctor/saveDoctor/certificate/" + doctorId, selectedImageData);
  }

  // get List of doctor, who are not verified yet
  public getDoctorByIsVerified(verified: boolean): Observable<any>{
    return this.http.get<any>('http://localhost:8080/doctor/getDoctor/getDoctorByIsVerified/' + verified);
  }

  public getDoctorByDeclined(declined: boolean): Observable<any>{
    return this.http.get<any>('http://localhost:8080/doctor/getDoctor/getDoctorByIsDeclined/' + declined);
  }

  public updateDoctor(doctor: Doctor): Observable<any>{
    return this.http.put<any>('http://localhost:8080/doctor/updateDoctor', doctor);
  }

  // get certificateByDoctorId
  public getCertificateByDoctorId(doctorId: number): Observable<any>{
    return this.http.get<any>('http://localhost:8080/doctor/getCertificate/getCertificateByDoctorId/' + doctorId);
  }




  // Patient

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
}
