import { Component, OnInit } from '@angular/core';
import {ApiEvenementsService} from "../api-evenements.service";
import {HttpClient} from "@angular/common/http";
// import {liste} from "../lister-event/lister-event.component"; a voir j'ai pensé a cette solution
import {Personne} from "../Personne";
import {Evenement} from "../Evenement";
import {ActivatedRoute, Router} from "@angular/router";




@Component({
  selector: 'app-inscription-event',
  templateUrl: './inscription-event.component.html',
  styleUrls: ['./inscription-event.component.css']
})
export class InscriptionEventComponent implements OnInit{
  // @ts-ignore
  personnes : Personne;
  // @ts-ignore
  evenement: Evenement;
  listeParticipants : Personne [] = [];

    test : Number | undefined  ;

  constructor(private apiEvenementService : ApiEvenementsService,
              private httpClient: HttpClient,
              private route : ActivatedRoute,
              private router : Router) {
  }
  ngOnInit() {

    const id = this.route.snapshot.params['id']; //récupérer l'id àpartir du routage (du lien url)
    this.apiEvenementService.listerPersonnesEvent(id).subscribe((dataP : Personne[])=>{
      this.listeParticipants = dataP;
    });
    this.test = this.listeParticipants.length; // NICO : ICI DANS LISTE DE PARTICIPANT J'AI RIEN, J'AI TJRS 0 EN NOMBRE DE PERSONNE

    //------------------------
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
