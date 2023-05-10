import {Component, OnInit} from '@angular/core';
import {Evenement} from "../Evenement";
import {ApiEvenementsService} from "../api-evenements.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ajouter-event',
  templateUrl: './ajouter-event.component.html',
  styleUrls: ['./ajouter-event.component.css']
})
export class AjouterEventComponent implements OnInit {

  // @ts-ignore
  evenement : Evenement;
  constructor(private apiEvenementService : ApiEvenementsService,
              private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.evenement = new Evenement();
  }

  ajouter(){
    this.apiEvenementService.ajouterEvenement(this.evenement)
  }
}
