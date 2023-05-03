import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { ListerEventComponent } from './lister-event/lister-event.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EvenementComponent } from './evenement/evenement.component';
import { PersonneComponent } from './personne/personne.component';

@NgModule({
  declarations: [
    AppComponent,
    ListerEventComponent,
    InscriptionComponent,
    EvenementComponent,
    PersonneComponent
  ],
  imports: [
    BrowserModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
