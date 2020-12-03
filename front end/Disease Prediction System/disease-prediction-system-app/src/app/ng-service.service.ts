import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Admin} from './admin';
import { Patient } from './patient';
import { Doctor } from './doctor';
import {Request} from './request';
import { Response } from './response';

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

  public getDisease(): Observable<any>{
    return this.http.get<any>("http://localhost:8080/disease/getDisease");
  }

  public getSymptom(): Observable<any>{
    return this.http.get<any>("http://localhost:8080/symptom/getSymptom");
  }

  public getSortedSymptoms(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/symptom/getSymptom/getSortedSymptoms')
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

  public getPatientRequest(doctorId: number, complete: boolean): Observable<any>{
    return this.http.get<any>('http://localhost:8080/patient/getPatientRequest/' + doctorId + '/' + complete);
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

  public saveResponse(response: Response): Observable<any>{
    return this.http.post<any>('http://localhost:8080/doctor/saveResponse', response);
  }

  public getRequestByRequestId(requestId: number): Observable<any>{
    return this.http.get<any>('http://localhost:8080/request/getRequest/getRequestbyRequestId/' + requestId);
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

  public savePatientRequest(request: Request): Observable<any>{
    return this.http.post<any>('http://localhost:8080/patient/savePatientRequest', request);
  }

  public getPatientByPatientId(patientId: number): Observable<any>{
    return this.http.get<any>('http://localhost:8080/patient/getPatient/getPatientByPatientId/' + patientId);
  }

  public getPatientByDeclined(declined: boolean): Observable<any>{
    return this.http.get<any>('http://localhost:8080/patient/getPatient/getPatientByDeclined/' + declined);
  }

  public getRequestByPatientId(patientId: number): Observable<any>{
    return this.http.get<any>('http://localhost:8080/request/getRequest/getRequestByPatientId/' + patientId);
  }

  public getResponseByRequestId(requestId: number): Observable<any>{
    return this.http.get<any>('http://localhost:8080/response/getResponse/getResponseByRequestId/' + requestId);
  }

  public getDoctorByDoctorId(doctorId: number): Observable<any>{
    return this.http.get<any>('http://localhost:8080/doctor/getDoctor/getDoctorByDoctorId/' + doctorId);
  }
}
