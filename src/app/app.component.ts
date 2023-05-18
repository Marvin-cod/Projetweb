import { Component } from '@angular/core';
import {GlobalDataService} from "./global-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projetweb';
  constructor(public globalData: GlobalDataService) {}

  changeGlobalVariableTrue() {
    this.globalData.setMyGlobalVariableTrue(true);

}
  changeGlobalVariableFalse() {
    this.globalData.setMyGlobalVariableFalse(false);

  }
}
