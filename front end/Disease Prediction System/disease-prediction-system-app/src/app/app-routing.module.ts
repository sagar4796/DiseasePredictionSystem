import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {PAtientLoginComponent} from './patient-login/patient-login.component';
import {DoctorLoginComponent} from './doctor-login/doctor-login.component';
import {PatientSignupComponent} from './patient-signup/patient-signup.component';
import {DoctorSignupComponent} from './doctor-signup/doctor-signup.component';
import {AdminActionsComponent} from './admin-actions/admin-actions.component';
import {DoctorActionsComponent} from './doctor-actions/doctor-actions.component';
import {PatientActionsComponent} from './patient-actions/patient-actions.component';
import {DoctorWaitComponent} from './doctor-wait/doctor-wait.component';
import { PatientPredictDiseaseComponent } from './patient-predict-disease/patient-predict-disease.component';
import { PatientRequestToDoctorComponent } from './patient-request-to-doctor/patient-request-to-doctor.component';
import { AdminGetRequestOfDoctorComponent } from './admin-get-request-of-doctor/admin-get-request-of-doctor.component';
import { AdminViewDoctorCertificateComponent } from './admin-view-doctor-certificate/admin-view-doctor-certificate.component';
import { PatientSendRequestComponent } from './patient-send-request/patient-send-request.component';
import { DoctorRequestsOfPatientsComponent } from './doctor-requests-of-patients/doctor-requests-of-patients.component';
import { DoctorResponseToPatientComponent } from './doctor-response-to-patient/doctor-response-to-patient.component';
import { AdminHandlePatientAccountComponent } from './admin-handle-patient-account/admin-handle-patient-account.component';
import { PatientGetDoctorResponseComponent } from './patient-get-doctor-response/patient-get-doctor-response.component';
import { PatientGetResponseForRequestComponent } from './patient-get-response-for-request/patient-get-response-for-request.component';
import { PatientRequestFromResponseComponent } from './patient-request-from-response/patient-request-from-response.component';
import { DiseaseAndSymptomComponent } from './disease-and-symptom/disease-and-symptom.component';
import { DoctorGetDiseaseInformationComponent } from './doctor-get-disease-information/doctor-get-disease-information.component';
import { PatientGetDiseaseInformationComponent } from './patient-get-disease-information/patient-get-disease-information.component';

const routes: Routes = [
  {path : '', component: WelcomeComponent},
  {path: 'adminLogin', component: AdminComponent},
  {path: 'patientLogin', component: PAtientLoginComponent},
  {path: 'doctorLogin', component: DoctorLoginComponent},
  {path: 'patientSignup', component: PatientSignupComponent},
  {path: 'doctorSignup', component: DoctorSignupComponent},
  {path: 'home', component: WelcomeComponent},
  {path: 'adminActions', component: AdminActionsComponent},
  {path: 'doctorActions/:doctorId', component: DoctorActionsComponent},
  {path: 'patientActions/:patientId', component: PatientActionsComponent},
  {path: 'doctorWait', component: DoctorWaitComponent},
  {path: 'predictDisease/:patientId', component: PatientPredictDiseaseComponent},
  {path: 'patientRequestToDoctor/:patientId', component: PatientRequestToDoctorComponent},
  {path: 'adminGetRequestOfDoctor', component: AdminGetRequestOfDoctorComponent},
  {path: 'ViewDoctorCertificate/:doctorId', component: AdminViewDoctorCertificateComponent},
  {path: 'patientSendRequest/:patientId/:doctorId', component: PatientSendRequestComponent},
  {path: 'doctorGetRequestOfPatient/:doctorId', component: DoctorRequestsOfPatientsComponent},
  {path: 'doctorResponseToPatient/:patientId/:doctorId/:requestId', component: DoctorResponseToPatientComponent},
  {path: 'patientAccounts', component: AdminHandlePatientAccountComponent},
  {path: 'responseOfDoctor/:patientId', component: PatientGetDoctorResponseComponent},
  {path: 'responseForRequest/:requestId/:doctorId/:patientId', component: PatientGetResponseForRequestComponent},
  {path: 'requestDoctorFromResponse/:patientId/:doctorId', component: PatientRequestFromResponseComponent},
  {path: 'diseaseAndSymptoms', component: DiseaseAndSymptomComponent},
  {path: 'diseaseInfomationForDoctor/:doctorId', component: DoctorGetDiseaseInformationComponent},
  {path: 'diseaseInfomationForPatient/:patientId', component: PatientGetDiseaseInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
