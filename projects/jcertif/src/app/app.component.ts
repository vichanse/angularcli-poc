import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jcertif';

  value = 'jcertif edit input';
  saveValue(value) {
    this.value = value;
  }
}
