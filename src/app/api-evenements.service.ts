import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Evenement} from "./Evenement";
import {Observable} from "rxjs";
import {Personne} from "./Personne";

@Injectable({
  providedIn: 'root'
})
export class ApiEvenementsService {
  private urlevent = 'http://localhost:3000/api/evenements';
  private urlpersonne = 'http://localhost:3000/api/personnes';
  constructor(private httpClient: HttpClient) { }

  public recupererliste() : Observable<Evenement[]>{  // coté client les erreurs
    return this.httpClient.get<Evenement[]>(this.urlevent);
  }
  public getEvenement(id : number): Observable<Evenement>{
    return this.httpClient.get<Evenement>(this.urlevent + '/'+ id);
  }
  public supprimerEvenement(id : number){
    this.httpClient.delete<Evenement>(this.urlevent +'/'+id).subscribe(
      (reponse : Evenement)=> {console.log(reponse);},
      (error)=>{console.log("erreur lors de l'ajout")}
    );
  }
  public ajouterEvenement(event: Evenement){
    this.httpClient.post<Evenement>(this.urlevent, event).subscribe(
      (reponse : Evenement)=> {console.log(reponse);},
      (error)=>{console.log("erreur lors de l'ajout")}
    )

  }
  public ajouterPersonne(personne : Personne){
    this.httpClient.post<Personne>(this.urlpersonne, personne).subscribe(
      (reponse : Personne)=> {console.log(reponse);},
      (error)=>{console.log("erreur lors de l'ajout")})
  }
  public listerPersonnes(){
    return this.httpClient.get<Personne []>(this.urlpersonne);
  }
}
