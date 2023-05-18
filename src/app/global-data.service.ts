import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  myGlobalVariable = false;

  setMyGlobalVariableTrue(newValue: boolean) {
    this.myGlobalVariable = true;
  }
  setMyGlobalVariableFalse(newValue: boolean) {
    this.myGlobalVariable = false;
  }
}
