import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './components/patient/add-patient/add-patient.component';
import { AllPatientsComponent } from './components/patient/all-patients/all-patients.component';
import {UpdatePatientComponent} from "./components/patient/update-patient/update-patient.component";
import {AddUtilisateurComponent} from "./components/utilitateur/add-utilisateur/add-utilisateur.component";
import { AddAnalyseComponent } from './components/analyse/add-analyse/add-analyse.component';
import { AddEchantillonComponent } from './components/echantillon/add-echantillon/add-echantillon.component';
import { ListEchantillonComponent } from './components/echantillon/list-echantillon/list-echantillon.component';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { AddFournisseurComponent } from './components/fournisseur/add-fournisseur/add-fournisseur.component';
import { UpdateFournisseurComponent } from './components/fournisseur/update-fournisseur/update-fournisseur.component';
import { ReactifComponent } from './components/reactif/reactif.component';
import { AddReactifComponent } from './components/reactif/add-reactif/add-reactif.component';
import { UpdateReactifComponent } from './components/reactif/update-reactif/update-reactif.component';
import {AllUtilisateurComponent} from "./components/utilitateur/all-utilisateur/all-utilisateur.component";
import {UpdateUtilisateurComponent} from "./components/utilitateur/update-utilisateur/update-utilisateur.component";
import { AllAnalyseComponent } from './components/analyse/all-analyse/all-analyse.component';

import {AddPlanificationComponent} from "./components/planification/add-planification/add-planification.component";

import { UpdateEchantillonComponent } from './components/echantillon/update-echantillon/update-echantillon.component';

import { HomeComponent } from './components/home/home.component';

import {PlanificationComponent} from "./components/planification/planification.component";
import {AuthenticationComponent} from "./authentication/authentication.component";




const routes: Routes = [
  { path: 'addPatient', component: AddPatientComponent },
  { path: 'patient/all', component: AllPatientsComponent },
  { path: 'patient/update/:id', component: UpdatePatientComponent },
  { path: 'addUser', component: AddUtilisateurComponent },
  { path: 'user/all', component: AllUtilisateurComponent },
  { path:  'utilisateur/update/:id', component: UpdateUtilisateurComponent },
  { path: 'addAnalyse', component: AddAnalyseComponent },
  { path: 'addEchantillon', component: AddEchantillonComponent },
  { path: 'echantillon/all', component: ListEchantillonComponent },
  { path: 'addSupplier', component: AddFournisseurComponent },
  { path: 'supplier/all', component: FournisseurComponent },
  { path: 'updateSupplier/:id', component: UpdateFournisseurComponent },
  { path: 'reactif/all', component: ReactifComponent },
  { path: 'addReactif', component: AddReactifComponent },
  { path: 'updateReactif/:id', component: UpdateReactifComponent },
  { path: 'analyse/all', component: AllAnalyseComponent },
  { path: 'addAnalyse', component: AddAnalyseComponent },
  { path: 'addPlanification', component: AddPlanificationComponent },
  { path: 'updateSample/:id', component: UpdateEchantillonComponent },

  { path: '', component: HomeComponent },
  {path: "auth", component:AuthenticationComponent},
  { path: 'planification/all', component: PlanificationComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
