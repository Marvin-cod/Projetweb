import { Component } from '@angular/core';
import {Evenement} from "../Evenement";

@Component({
  selector: 'app-lister-event',
  templateUrl: './lister-event.component.html',
  styleUrls: ['./lister-event.component.css']
})
export class ListerEventComponent {
  // @ts-ignore
  liste: Evenement[] = [];
  constructor() {}
  ngOnInit(){
    const p1 = new Evenement();
    p1.nom_event="Soirée de fou";
    p1.lieu_event="Toulouse 3 chemin de la foire";
    p1.date_cloture=new Date(2023,5,2);//pas de 0 devant sinon pas compris
    this.liste.push(p1);
  }




}
