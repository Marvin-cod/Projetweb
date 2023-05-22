import {Component, OnInit} from '@angular/core';
import {Personne} from "../Personne";
import {Evenement} from "../Evenement";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiEvenementsService} from "../api-evenements.service";
import {HttpClient} from "@angular/common/http";
import {GlobalDataService} from "../global-data.service";


@Component({
  selector: 'app-creation-compte',
  templateUrl: "./creation-compte.component.html",
  styleUrls: ['./creation-compte.component.css']
})
export class CreationCompteComponent {

  personnes: Personne[] = [];
  //@ts-ignore
  pers: Personne;

  constructor(private apiEvenementService: ApiEvenementsService, private router: Router, private httpClient: HttpClient
  ) {
    this.pers = new Personne();
  }


  ajouterPersonne() {
    this.pers.idEvent = "";
    this.apiEvenementService.ajouterPersonne(this.pers);
  }


}
