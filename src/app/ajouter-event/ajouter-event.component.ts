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
  msg: string;
  // @ts-ignore
  msgA: string;
  // @ts-ignore
  msgN: string;

  constructor(private apiEvenementService: ApiEvenementsService,
              private httpClient: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
    this.evenement = new Evenement();
  }

  ajouter() {
    let dateCtemp = this.evenement.date_cloture; //Garder la date en format yyyy-mm-dd pour la verifDate()
    let dateTemp = this.evenement.date_cloture.split("-"); // chaîne de date au format yyyy-mm-dd, sépare la chaîne en parties (année, mois, jour)
    this.evenement.date_cloture = dateTemp.reverse().join("/"); // inverse l'ordre des parties et les joint avec des "/"
    // format dd/mm/yyyy
    if(this.evenement.acronyme != undefined){
      this.msgA="";
      if(this.verifDate(dateCtemp, this.evenement.date_ouverture)){
        this.msg="";
        if(this.evenement.nombre_max >0){
          this.router.navigate(['lister-evt']);
          this.apiEvenementService.ajouterEvenement(this.evenement);
        }
        else{
          this.msgN="Veuillez saisir le nombre maximum de participants";
        }
      }
      else{
        this.msg="Mauvaise date";
      }
    }
    else{
      this.msgA="Veuillez ajouter l'acronyme";
    }
  }

  public verifDate(dateCloture: string, dateOuverture: string) {
    let dateCtemp: Date = new Date(dateCloture);
    let dateOtemp: Date = new Date(dateOuverture);
    if (dateOtemp > dateCtemp ) {
      return false;
    }
    return true;
  }
}
