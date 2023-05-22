import {Component} from '@angular/core';
import {Personne} from "../Personne";
import { Router} from "@angular/router";
import {ApiEvenementsService} from "../api-evenements.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-creation-compte',
  templateUrl: "./creation-compte.component.html",
  styleUrls: ['./creation-compte.component.css']
})
export class CreationCompteComponent {

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
