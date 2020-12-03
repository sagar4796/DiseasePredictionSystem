import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PAtientLoginComponent } from './patient-login/patient-login.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { DoctorActionsComponent } from './doctor-actions/doctor-actions.component';
import { PatientActionsComponent } from './patient-actions/patient-actions.component';
import { AdminActionsComponent } from './admin-actions/admin-actions.component';
import { PatientRequestToDoctorComponent } from './patient-request-to-doctor/patient-request-to-doctor.component';
import { PatientPredictDiseaseComponent } from './patient-predict-disease/patient-predict-disease.component';
import { AdminVerifyDoctorComponent } from './admin-verify-doctor/admin-verify-doctor.component';
import { AdminUpdateDataComponent } from './admin-update-data/admin-update-data.component';
import { DoctorRequestsOfPatientsComponent } from './doctor-requests-of-patients/doctor-requests-of-patients.component';
import { DoctorResponseToPatientComponent } from './doctor-response-to-patient/doctor-response-to-patient.component';
import { DoctorWaitComponent } from './doctor-wait/doctor-wait.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminGetRequestOfDoctorComponent } from './admin-get-request-of-doctor/admin-get-request-of-doctor.component';
import { AdminViewDoctorCertificateComponent } from './admin-view-doctor-certificate/admin-view-doctor-certificate.component';
import { PatientSendRequestComponent } from './patient-send-request/patient-send-request.component';
import { AdminHandlePatientAccountComponent } from './admin-handle-patient-account/admin-handle-patient-account.component';
import { PatientGetDoctorResponseComponent } from './patient-get-doctor-response/patient-get-doctor-response.component';
import { PatientGetResponseForRequestComponent } from './patient-get-response-for-request/patient-get-response-for-request.component';
import { PatientRequestFromResponseComponent } from './patient-request-from-response/patient-request-from-response.component';
import { DiseaseAndSymptomComponent } from './disease-and-symptom/disease-and-symptom.component';
import { DoctorGetDiseaseInformationComponent } from './doctor-get-disease-information/doctor-get-disease-information.component';
import { PatientGetDiseaseInformationComponent } from './patient-get-disease-information/patient-get-disease-information.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    AdminComponent,
    PAtientLoginComponent,
    DoctorLoginComponent,
    DoctorSignupComponent,
    PatientSignupComponent,
    DoctorActionsComponent,
    PatientActionsComponent,
    AdminActionsComponent,
    PatientRequestToDoctorComponent,
    PatientPredictDiseaseComponent,
    AdminVerifyDoctorComponent,
    AdminUpdateDataComponent,
    DoctorRequestsOfPatientsComponent,
    DoctorResponseToPatientComponent,
    DoctorWaitComponent,
    AdminGetRequestOfDoctorComponent,
    AdminViewDoctorCertificateComponent,
    PatientSendRequestComponent,
    AdminHandlePatientAccountComponent,
    PatientGetDoctorResponseComponent,
    PatientGetResponseForRequestComponent,
    PatientRequestFromResponseComponent,
    DiseaseAndSymptomComponent,
    DoctorGetDiseaseInformationComponent,
    PatientGetDiseaseInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
