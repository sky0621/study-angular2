import { Component } from '@angular/core';

@Component({
  // HTMLの出力先として<app-root>を指定
  selector: 'app-root',

  // HTMLテンプレートファイルの指定
  templateUrl: './app.component.html',

  // CSSの指定
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  value = 'Hello!';
  cost = 100;
  values = [10, 20, 30, 40, 50];
  dumdum = "Dummy!!!!!";
  // valFlg = true;
}
