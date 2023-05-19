import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GlobalDataService} from "../global-data.service";
import {ApiEvenementsService} from "../api-evenements.service";
import {HttpClient} from "@angular/common/http";
import {Personne} from "../Personne";
export interface User {
  username: string;
  password: string;
  isAdmin: boolean;
}
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent /*implements OnInit*/{
  //@ts-ignore
  username: string ;
  personnes: Personne[] = [];
  //@ts-ignore
  password: string ;
  //@ts-ignore
  TexteVide : String ;



  printer : string | undefined;
  constructor(private router: Router,
              private param : GlobalDataService//ajoutmarvin
              /*,public globalData: GlobalDataService,private httpClient: HttpClient*/
  ) {

  }
    private currentUser: User | null = null;

    login(username: string, password: string) {
      if (username === 'admin' && password === 'admin') {
        this.param.setMyGlobalVariableTrue();//ajout marvin la c'est true
        this.currentUser = {
          username,
          password,
          isAdmin: true
        };
      }
      else {
        this.param.setMyGlobalVariableFalse();//ajout marvin la c'est false
        this.currentUser = {
          username,
          password,
          isAdmin: false
        };
      }
    }

logout() {
  this.currentUser = null;
}

getCurrentUser() {
  return this.currentUser;
}

isAdminBool() {
  return this.currentUser?.isAdmin;
}

  onLogin(){
    this.login(this.username,this.password);
    if (this.password === undefined || this.username === undefined){
      this.TexteVide =  "Attention, vous n'avez rien ecrit de pseudo ou de mot de passe.";

    }else {
      this.TexteVide ="";
      this.router.navigate(['lister-evt']);
    }
  }



}
