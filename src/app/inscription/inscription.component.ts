import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
//@ts-ignore
  loginMessage : string;

  constructor(private router: Router) {}

  onLogin() {
    //  this.router.navigate(['lister-evt']);
    if (this.username === 'admin' && this.password === 'admin') {
      this.loginMessage = `Username: ${this.username}, Password: ${this.password}`;
    } else {
      this.loginMessage = `Username: ${this.username}, Password: ${this.password}`;
    }

  }
}
