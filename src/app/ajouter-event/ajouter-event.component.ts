import {Component, OnInit} from '@angular/core';
import {ApiEvenementsService} from "../api-evenements.service";
import {HttpClient} from "@angular/common/http";
import {Evenement} from "../Evenement";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouter-event',
  templateUrl: './ajouter-event.component.html',
  styleUrls: ['./ajouter-event.component.css']
})
export class AjouterEventComponent implements OnInit {

  // @ts-ignore
  evenement: Evenement;
  // @ts-ignore
  msg : string;
  // @ts-ignore
  msgG : String;

  constructor(private apiEvenementService: ApiEvenementsService,
              private httpClient: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
    this.evenement = new Evenement();
  }

  ajouter() {

    let dateTemp = this.evenement.date_cloture.split("-"); // chaîne de date au format yyyy-mm-dd, sépare la chaîne en parties (année, mois, jour)
    this.evenement.date_cloture = dateTemp.reverse().join("/"); // inverse l'ordre des parties et les joint avec des "/"
    // format dd/mm/yyyy
    if (this.evenement.nom_event == undefined || this.evenement.lieu_event == undefined){
      this.msgG = "Vous n'avez pas rempli tous les champs obligatoires";
    }
    else if (this.verifDate(this.evenement.date_cloture, this.evenement.date_ouverture)){
      this.router.navigate(['lister-evt']);
      this.apiEvenementService.ajouterEvenement(this.evenement)
    }
    else{
      this.msg="Mauvaise date";
    }
  }
  public verifDate(dateCloture : string, dateOuverture : string){
    let dateCtemp :Date = new Date (dateCloture);
    let dateOtemp : Date = new Date(dateOuverture);
    if (dateOtemp > dateCtemp){
      return false;
    }
    return true;
  }
}
