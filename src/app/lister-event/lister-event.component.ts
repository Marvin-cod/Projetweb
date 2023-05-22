import {Component, NgModule, OnInit} from '@angular/core';
import {Evenement} from "../Evenement";
import {ApiEvenementsService} from "../api-evenements.service";
import {InscriptionComponent} from "../inscription/inscription.component";
import {GlobalDataService} from "../global-data.service";

@Component({
  selector: 'app-lister-event',
  templateUrl: './lister-event.component.html',
  styleUrls: ['./lister-event.component.css']
})

export class ListerEventComponent implements OnInit {
  liste: Evenement[] = [];
  isAdmin: boolean | undefined;

  listeSansAncien: Evenement[] = [];

  //@ts-ignore

  constructor(
    private apiEvenementService: ApiEvenementsService,
    private authService: InscriptionComponent,
    private param: GlobalDataService
  ) {
  }

  ngOnInit() {
    this.isAdmin = this.param.myGlobalVariable;
    let addEvent = document.getElementById("addEvent");
    let stat = document.getElementById("stat");

    if (this.isAdmin === false) {
      // @ts-ignore
      stat.style.display = "none";
      // @ts-ignore
      addEvent.style.display = "none";
    }


    this.apiEvenementService
      .recupererliste()
      .subscribe((data: Evenement[]) => {
        this.listeSansAncien = data.filter(evt => {
          let dateParts = evt.date_cloture.split("/");
          let date = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
          return new Date().getTime() <= date.getTime();
        });
        this.liste = data;


      });


  }


}
