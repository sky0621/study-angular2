import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'マイサイト';
  getID(): string {
    return "ID12345";
  };
  values = [100, 200, 300, 400, 500];
  showSaveBtn = true;
  swValue = "case2";
  btnIsDisabled = true;
  clsIsActive = true;
  save($event) {
    this.showSaveBtn = false;
  };
  lowercaseVal = "abcdefg";
}
