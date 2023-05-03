import { Component } from '@angular/core';
import {Evenement} from "../Evenement";

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent {

  // @ts-ignore
  evenement: Evenement;

  ngOnInit(){
    this.evenement = new Evenement();
    this.evenement.id=1;
    this.evenement.lieu_event="Toulouse";
    this.evenement.nom_event="la plus incroyable soirée";
    this.evenement.date_cloture=new Date(2023,6,25);//ecrire le reste si on veut pour l'instant flemme

  }

}
