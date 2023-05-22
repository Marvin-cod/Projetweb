import {Component, OnInit} from '@angular/core';
import {Evenement} from "../Evenement";
import {ApiEvenementsService} from "../api-evenements.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Personne} from "../Personne";
import {GlobalDataService} from "../global-data.service";

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  // @ts-ignore
  evenement: Evenement;
  // @ts-ignore
  nombrePersonnes: number = 0;
  listeParticipants: Personne [] = []
  isAdmin: boolean | undefined;

  constructor(private apiEvenementService: ApiEvenementsService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute,
              private param: GlobalDataService) {


  }

  ngOnInit() {
    this.isAdmin = this.param.myGlobalVariable;
    const id = this.routeactive.snapshot.params['id'];
    this.apiEvenementService.getEvenement(id).subscribe((data) => {
      this.evenement = data
    });
    this.apiEvenementService.listerPersonnesEvent(id).subscribe((dataP: Personne[]) => {
      this.listeParticipants = dataP;
      this.nombrePersonnes = this.listeParticipants.length;
    });
    let supprimer = document.getElementById("supprimer");
    if (!this.isAdmin) {
      // @ts-ignore
      supprimer.style.display = "none";
    }

  }

  suppression(id: number) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet événement? \n " +
      "Cela implique que toutes les participants seront automatiquement désinscrit")) {
      this.apiEvenementService.supprimerEvenement(id);
      //parcourir la liste des personnes à cet event et les supprimer
      for (let i = 0; i < this.listeParticipants.length; i++) {
        this.apiEvenementService.supprimerPersonneEvent(this.listeParticipants[i].mail, id);
      }
    }
  }


}
