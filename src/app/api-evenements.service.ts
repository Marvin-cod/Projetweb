import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Evenement} from "./Evenement";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiEvenementsService {
  private url = 'http://localhost:3000/api/evenements';
  constructor(private httpClient: HttpClient) { }

  public recupererliste() : Observable<Evenement[]>{  // coté client les erreurs
    return this.httpClient.get<Evenement[]>(this.url);
  }
  public getEvenement(id : number): Observable<Evenement>{
    return this.httpClient.get<Evenement>(this.url + '/'+ id);
  }
  public ajouterEvenement(event: Evenement){
    this.httpClient.post<Evenement>(this.url, event).subscribe(
      (reponse : Evenement)=> {console.log(reponse);},
      (error)=>{console.log("erreur lors de l'ajout")}
    )

  }
}
