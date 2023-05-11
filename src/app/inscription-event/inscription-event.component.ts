import { Component, OnInit } from '@angular/core';
import {ApiEvenementsService} from "../api-evenements.service";
import {HttpClient} from "@angular/common/http";
import {Personne} from "../Personne";
import {Evenement} from "../Evenement";

@Component({
  selector: 'app-inscription-event',
  templateUrl: './inscription-event.component.html',
  styleUrls: ['./inscription-event.component.css']
})
export class InscriptionEventComponent implements OnInit{
  // @ts-ignore
  personnes : Personne;
  constructor(private apiEvenementService : ApiEvenementsService,
              private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.personnes = new Personne();
  }
  ajouterPersonne(){
    this.apiEvenementService.ajouterPersonne(this.personnes);
  }
}
