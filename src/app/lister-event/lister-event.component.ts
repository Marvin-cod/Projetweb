import {Component, NgModule, OnInit} from '@angular/core';
import {Evenement} from "../Evenement";
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {ApiEvenementsService} from "../api-evenements.service";
import {InscriptionComponent} from "../inscription/inscription.component";
import {GlobalDataService} from "../global-data.service"; //ajout marvin

@Component({
  selector: 'app-lister-event',
  templateUrl: './lister-event.component.html',
  styleUrls: ['./lister-event.component.css']
})

export class ListerEventComponent  implements OnInit{
  liste: Evenement[] = [];
  isAdmin: boolean | undefined;
  nom: string | undefined;

  constructor(
    private apiEvenementService: ApiEvenementsService,
    private authService: InscriptionComponent,
    private param : GlobalDataService
  ) {}

  ngOnInit() {
    this.isAdmin = this.param.myGlobalVariable; //ajout marvin
    this.apiEvenementService
      .recupererliste()
      .subscribe((data: Evenement[]) => {
        this.liste = data;
      });
  }









    /*
    const p1 = new Evenement();
    p1.nom_event="Soirée de fou";
    p1.lieu_event="Toulouse 3 chemin de la foire";
    p1.date_cloture=new Date(2023,5,2);//pas de 0 devant sinon pas compris
    this.liste.push(p1);
  */



}
