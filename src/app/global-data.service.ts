import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  myGlobalVariable = false;

  setMyGlobalVariableTrue() {
    this.myGlobalVariable = true;
  }

  setMyGlobalVariableFalse() {
    this.myGlobalVariable = false;
  }
}
