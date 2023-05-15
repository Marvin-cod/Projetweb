import { Component, OnInit } from '@angular/core';
import {ApiEvenementsService} from "../api-evenements.service";
import {HttpClient} from "@angular/common/http";
// import {liste} from "../lister-event/lister-event.component"; a voir j'ai pensé a cette solution
import {Personne} from "../Personne";
import {Evenement} from "../Evenement";
import {ActivatedRoute} from "@angular/router";




@Component({
  selector: 'app-inscription-event',
  templateUrl: './inscription-event.component.html',
  styleUrls: ['./inscription-event.component.css']
})
export class InscriptionEventComponent implements OnInit{
  // @ts-ignore
  personnes : Personne;

  constructor(private apiEvenementService : ApiEvenementsService,
              private httpClient: HttpClient,
              private route : ActivatedRoute) {
  }
  ngOnInit() {
    this.personnes = new Personne();

  }
  ajouteridEvent(){
    this.route.params.subscribe(params => {this.personnes.idEvent= params["id"]});
  }
  ajouterPersonne(){
    this.ajouteridEvent();
    this.apiEvenementService.ajouterPersonne(this.personnes);
  }

}
