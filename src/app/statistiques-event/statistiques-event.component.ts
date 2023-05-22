import {Component} from '@angular/core';
import {ApiEvenementsService} from "../api-evenements.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Evenement} from "../Evenement";
import {Personne} from "../Personne";

@Component({
  selector: 'app-statistiques-event',
  templateUrl: './statistiques-event.component.html',
  styleUrls: ['./statistiques-event.component.css']
})
export class StatistiquesEventComponent {
  // @ts-ignore
  evenement: Evenement;
  listeParticipants: Personne [] = []
  nombreParticipants = 0;

  constructor(private apiEvenementService: ApiEvenementsService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.routeactive.snapshot.params['id']; //récupérer l'id àpartir du routage (du lien url)
    this.apiEvenementService.getEvenement(id).subscribe((data) => {
      this.evenement = data
    });
    this.apiEvenementService.listerPersonnesEvent(id).subscribe((dataP: Personne[]) => {
      this.listeParticipants = dataP;
      this.nombreParticipants = this.listeParticipants.length;
    });

  }

  supprimerPersonnesEvent(mail: string, idEvent: number) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette personne?")) {
      this.apiEvenementService.supprimerPersonneEvent(mail, idEvent)
    }
  }

  protected readonly String = String;
}

