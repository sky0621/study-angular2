import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  value = 'Hello!';
  cost = 100;
  values = [10, 20, 30, 40, 50];
}
