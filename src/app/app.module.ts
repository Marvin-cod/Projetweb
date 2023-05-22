import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {AppComponent} from './app.component';
import {ListerEventComponent} from './lister-event/lister-event.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {EvenementComponent} from './evenement/evenement.component';
import {FormsModule} from "@angular/forms";
import { RouterModule, Routes} from "@angular/router";
import {AjouterEventComponent} from './ajouter-event/ajouter-event.component';
import { HttpClientModule} from "@angular/common/http";
import {ApiEvenementsService} from "./api-evenements.service";
import {InscriptionEventComponent} from './inscription-event/inscription-event.component';
import {StatistiquesComponent} from './statistiques/statistiques.component';
import {StatistiquesEventComponent} from './statistiques-event/statistiques-event.component';

const appRoutes: Routes = [
  {path: 'lister-evt', component: ListerEventComponent},
  {path: 'evenement/:id', component: EvenementComponent},
  {path: "inscription-event/:id", component: InscriptionEventComponent},
  {path: 'add-event', component: AjouterEventComponent},
  {path: 'stats', component: StatistiquesComponent},
  {path: 'stats-event/:id', component: StatistiquesEventComponent},
  {path: '', component: InscriptionComponent},
  {path: "**", component: InscriptionComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ListerEventComponent,
    InscriptionComponent,
    EvenementComponent,
    AjouterEventComponent,
    InscriptionEventComponent,
    StatistiquesComponent,
    StatistiquesEventComponent,
  ],
  imports: [
    BrowserModule, NgbModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule
  ],
  providers: [ApiEvenementsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
