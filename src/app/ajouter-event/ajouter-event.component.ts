import {Component, OnInit} from '@angular/core';
import {Evenement} from "../Evenement";

@Component({
  selector: 'app-ajouter-event',
  templateUrl: './ajouter-event.component.html',
  styleUrls: ['./ajouter-event.component.css']
})
export class AjouterEventComponent implements OnInit {

  // @ts-ignore
  evenement : Evenement;

  ngOnInit() {
    this.evenement = new Evenement();
  }

}
