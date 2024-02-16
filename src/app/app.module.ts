import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemsComponent } from './components/sidebar/sidebar-items/sidebar-items.component';
import { AddPatientComponent } from './components/patient/add-patient/add-patient.component';
import { AllPatientsComponent } from './components/patient/all-patients/all-patients.component';
import {PatientService} from "./services/patient.service";

import { AddUtilisateurComponent } from './components/utilitateur/add-utilisateur/add-utilisateur.component';
import { UpdatePatientComponent } from './components/patient/update-patient/update-patient.component';
import { AddAnalyseComponent } from './components/analyse/add-analyse/add-analyse.component';
import { AllAnalyseComponent } from './components/analyse/all-analyse/all-analyse.component';
import { AddEchantillonComponent } from './components/echantillon/add-echantillon/add-echantillon.component';
import { ListEchantillonComponent } from './components/echantillon/list-echantillon/list-echantillon.component';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EchantillonService } from '../app/services/echantillon.service';

import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { AddFournisseurComponent } from './components/fournisseur/add-fournisseur/add-fournisseur.component';
import { UpdateFournisseurComponent } from './components/fournisseur/update-fournisseur/update-fournisseur.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactifComponent } from './components/reactif/reactif.component';
import { AddReactifComponent } from './components/reactif/add-reactif/add-reactif.component';
import { CommonModule, DatePipe } from '@angular/common';
import { UpdateReactifComponent } from './components/reactif/update-reactif/update-reactif.component';
import {AllUtilisateurComponent} from "./components/utilitateur/all-utilisateur/all-utilisateur.component";
import { UpdateUtilisateurComponent } from './components/utilitateur/update-utilisateur/update-utilisateur.component';
import { PlanificationComponent } from './components/planification/planification.component';
import { AddPlanificationComponent } from './components/planification/add-planification/add-planification.component';
import { UpdateEchantillonComponent } from './components/echantillon/update-echantillon/update-echantillon.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarItemsComponent,
    AddPatientComponent,
    AllPatientsComponent,
    AddUtilisateurComponent,
    UpdatePatientComponent,
    AddAnalyseComponent,
    AllAnalyseComponent,
    AddEchantillonComponent,
    ListEchantillonComponent,
    FournisseurComponent,
    AddFournisseurComponent,
    UpdateFournisseurComponent,
    ReactifComponent,
    AddReactifComponent,
    UpdateReactifComponent,
    AllUtilisateurComponent,
    UpdateUtilisateurComponent,
    PlanificationComponent,
    AddPlanificationComponent,
    UpdateEchantillonComponent,
    HomeComponent,
    AuthenticationComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,FormsModule,
    // BsDatepickerModule.forRoot(),



  ],

  providers: [DatePipe],

  bootstrap: [AppComponent]
})
export class AppModule { }
