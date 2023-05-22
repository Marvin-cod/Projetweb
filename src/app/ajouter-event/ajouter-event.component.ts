import {Component, OnInit} from '@angular/core';
import {ApiEvenementsService} from "../api-evenements.service";
import {HttpClient} from "@angular/common/http";
import {Evenement} from "../Evenement";

@Component({
  selector: 'app-ajouter-event',
  templateUrl: './ajouter-event.component.html',
  styleUrls: ['./ajouter-event.component.css']
})
export class AjouterEventComponent implements OnInit {

  // @ts-ignore
  evenement: Evenement;

  constructor(private apiEvenementService: ApiEvenementsService,
              private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.evenement = new Evenement();
  }

  ajouter() {
    let dateTemp = this.evenement.date_cloture.split("-"); // chaîne de date au format yyyy-mm-dd, sépare la chaîne en parties (année, mois, jour)
    this.evenement.date_cloture = dateTemp.reverse().join("/"); // inverse l'ordre des parties et les joint avec des "/"
    // format dd/mm/yyyy
    this.apiEvenementService.ajouterEvenement(this.evenement)
  }
}
