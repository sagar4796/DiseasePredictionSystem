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

const routes: Routes = [
  {path : '', component: WelcomeComponent},
  {path: 'adminLogin', component: AdminComponent},
  {path: 'patientLogin', component: PAtientLoginComponent},
  {path: 'doctorLogin', component: DoctorLoginComponent},
  {path: 'patientSignup', component: PatientSignupComponent},
  {path: 'doctorSignup', component: DoctorSignupComponent},
  {path: 'home', component: WelcomeComponent},
  {path: 'adminActions', component: AdminActionsComponent},
  {path: 'doctorActions', component: DoctorActionsComponent},
  {path: 'patientActions', component: PatientActionsComponent},
  {path: 'doctorWait', component: DoctorWaitComponent},
  {path: 'predictDisease', component: PatientPredictDiseaseComponent},
  {path: 'patientRequestToDoctor', component: PatientRequestToDoctorComponent},
  {path: 'adminGetRequestOfDoctor', component: AdminGetRequestOfDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
