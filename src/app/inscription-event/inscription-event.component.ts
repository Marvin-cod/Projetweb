import {Component, OnInit} from '@angular/core';
import {ApiEvenementsService} from "../api-evenements.service";
import {HttpClient} from "@angular/common/http";
import {Personne} from "../Personne";
import {Evenement} from "../Evenement";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-inscription-event',
  templateUrl: './inscription-event.component.html',
  styleUrls: ['./inscription-event.component.css']
})

export class InscriptionEventComponent implements OnInit {
  // @ts-ignore
  personnes: Personne;
  // @ts-ignore
  evenement: Evenement;
  //@ts-ignore
  ID: number;
  listeParticipants: Personne [] = [];
  isButtonDisabled = false;

  nbPersDansEvt: number = 0;
  nbPersMax: number = 0;
  msgImp: string | undefined;

  constructor(private apiEvenementService: ApiEvenementsService,
              private httpClient: HttpClient,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    this.ID = id;
    this.apiEvenementService.listerPersonnesEvent(id).subscribe((dataP: Personne[]) => {
      this.listeParticipants = dataP;

      for (let i = 0; i < this.listeParticipants.length; i++) {
        let tabID = this.listeParticipants[i].idEvent.split(" ");

        for (let j = 0; j < tabID.length; j++) {

          if (tabID[j] == id) {
            this.nbPersDansEvt = this.nbPersDansEvt + 1;
          }
        }
      }


      this.apiEvenementService.getEvenement(id).subscribe((data) => {
        this.evenement = data;
        this.nbPersMax = this.evenement.nombre_max;
        if (this.nbPersMax <= this.nbPersDansEvt) {
          this.msgImp = "Le nombre maximum d'utilisateurs a été atteint ";
          this.isButtonDisabled = true;

        }
      });

    });


    this.personnes = new Personne();

  }

  ajouteridEvent() {
    this.route.params.subscribe(params => {
      this.personnes.idEvent = params["id"]
    });
  }

  ajouterPersonne() {
    if (this.personnes.nom === undefined || this.personnes.mail === undefined || this.personnes.prenom === undefined){
      this.msgImp="Les champs (nom,prenom,mail) sont obligatoires";
    }
    else {
      this.ajouteridEvent();
      this.apiEvenementService.ajouterPersonne(this.personnes);
      this.router.navigate(['lister-evt']);
    }

  }
}
