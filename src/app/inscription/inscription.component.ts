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

  printer : string | undefined;
  constructor(private router: Router) {}

  onLogin() {
      //this.router.navigate(['lister-evt']);
      let u = this.username;
      let p = this.password;
    if (u === 'admin' && p === 'admin') {
      this.router.navigate(['lister-evt']
      );

    }
  }
}
