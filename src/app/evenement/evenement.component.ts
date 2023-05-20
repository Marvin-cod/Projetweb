import {Component, OnInit} from '@angular/core';
import {Evenement} from "../Evenement";
import {ApiEvenementsService} from "../api-evenements.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit{

  // @ts-ignore
  evenement: Evenement;
  // @ts-ignore

  constructor(private apiEvenementService : ApiEvenementsService,
              private httpClient : HttpClient,
              private router : Router,
              private routeactive:ActivatedRoute){


  }

  ngOnInit(){
    const id = this.routeactive.snapshot.params['id']; //récupérer l'id àpartir du routage (du lien url)
    this.apiEvenementService.getEvenement(id).subscribe((data)=>{this.evenement=data});

    /*
    this.evenement = new Evenement();
    this.evenement.id=1;
    this.evenement.lieu_event="Toulouse";
    this.evenement.nom_event="la plus incroyable soirée avec plus de detail";
    this.evenement.date_cloture="17/09/2023";//ecrire le reste si on veut pour l'instant flemme
*/

  }

  suppression(id: number) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet événement?")) {
      this.apiEvenementService.supprimerEvenement(id);
    }
  }


}
