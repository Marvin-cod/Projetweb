export class Evenement{
  // @ts-ignore
  id: number;
  // @ts-ignore
  acronyme: string;
  // @ts-ignore
  nom_event: string;
  // @ts-ignore
  lieu_event: string;
  // @ts-ignore
  description: string;
  // @ts-ignore
  date_ouverture: string;
  // @ts-ignore
  date_cloture : string ;
  // @ts-ignore pour que cela ne soit pas souliogné en rouge car c'est la bonne écriture
  nombre_max: number;
  //ajouter compteur dans evenement pour savoir quand max personne est atteint
}
