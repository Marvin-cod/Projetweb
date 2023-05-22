import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalDataService} from "../global-data.service";
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

export class InscriptionComponent {
  //@ts-ignore
  username: string;
  personnes: Personne[] = [];
  //@ts-ignore
  password: string;
  //@ts-ignore
  TexteVide: String;


  printer: string | undefined;

  constructor(private router: Router,
              private param: GlobalDataService,
  ) {

  }

  private currentUser: User | null = null;

  logout() {
    this.currentUser = null;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isAdminBool() {
    return this.currentUser?.isAdmin;
  }

  onLogin() {
    if (this.password === undefined || this.username === undefined) {
      this.TexteVide = "Attention, vous n'avez pas saisi toutes les informations nécessaires";
    } else {
      if (this.username === "admin" && this.password === "admin") {
        this.param.setMyGlobalVariableTrue();
        this.router.navigate(['lister-evt']);
      } else {
        this.TexteVide = "Compte inexistant, veuillez-vous rappochez de l'admin pour vous connecter";
      }


    }
  }


}
