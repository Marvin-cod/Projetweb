import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { ListerEventComponent } from './lister-event/lister-event.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EvenementComponent } from './evenement/evenement.component';
import {FormsModule} from "@angular/forms";
import {Router, RouterModule, Routes} from "@angular/router";
import { AjouterEventComponent } from './ajouter-event/ajouter-event.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ApiEvenementsService} from "./api-evenements.service";
import { InscriptionEventComponent } from './inscription-event/inscription-event.component';
//import { PageAccueilComponent } from './page-accueil/page-accueil.component';
const appRoutes:Routes = [
  // 1 route par module afin de charger les pages
  {path : 'lister-evt', component: ListerEventComponent },
  {path : 'evenement/:id', component: EvenementComponent },
  {path: "inscription-event", component : InscriptionEventComponent},
  {path : 'add-event', component: AjouterEventComponent},
  //{path : 'inscription', component:InscriptionComponent},
  {path : '', component: InscriptionComponent},
  {path : "**", component : InscriptionComponent}

  //{path : 'page-accueil', component: PageAccueilComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ListerEventComponent,
    InscriptionComponent,
    EvenementComponent,
    AjouterEventComponent,
    InscriptionEventComponent,
    //PageAccueilComponent
  ],
  imports: [
    BrowserModule, NgbModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule
  ],
  providers: [ApiEvenementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
