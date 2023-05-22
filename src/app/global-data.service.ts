import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  myGlobalVariable = false;

  setMyGlobalVariableTrue() {
    this.myGlobalVariable = true;
  }

  setMyGlobalVariableFalse() {//j'ai enlevé à l'interieur la variable
    this.myGlobalVariable = false;
  }
}
