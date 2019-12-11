import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jWebshop';

  value = 'jWebshop edit input';
  saveValue(value) {
    this.value = value;
  }
}
