import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {GlobalDataService} from "../global-data.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  //@ts-ignore
  username: string ;
  //@ts-ignore
  password: string ;

  printer : string | undefined;
  constructor(private router: Router,public globalData: GlobalDataService) {}

  onLogin() {
      //this.router.navigate(['lister-evt']);
      let u = this.username;
      let p = this.password;
    if (u === 'admin' && p === 'admin') {
      this.router.navigate(['lister-evt']
      );
      this.globalData.setMyGlobalVariableTrue(true) ;
    }
    //let marche = this.globalData.myGlobalVariable;

  }


}
