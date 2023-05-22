import {Component, OnInit} from '@angular/core';
import {Evenement} from "../Evenement";
import {Personne} from "../Personne";
import {ApiEvenementsService} from "../api-evenements.service";


@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit{
  listestats: Evenement[] = [];
  listeParticipants: Personne[] = [];
  nombreEvent = 0;
  nombrePersonnes = 0;
  nombreMoyens = 0;

  constructor(private apiEvenementService: ApiEvenementsService) {
  }

  ngOnInit() { //dès le démarrage (nginit) initialise notre liste
    this.apiEvenementService.recupererliste().subscribe((dataE: Evenement[]) => {
      this.listestats = dataE;
      this.nombreEvent = this.listestats.length;
      this.nombreMoyens = this.nombrePersonnes / this.nombreEvent;
    });
    this.apiEvenementService.listerPersonnes().subscribe((dataP: Personne[]) => {
      this.listeParticipants = dataP;
      this.nombrePersonnes = this.listeParticipants.length;
      this.nombreMoyens = this.nombrePersonnes / this.nombreEvent;
    });
  }
}
