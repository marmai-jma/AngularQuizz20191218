import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  currentUser = new User({name: 'bob', email: 'bob@bob.com'});

  couleurRecue(bgColor: string) {
    alert(`Couleur reçue : ${bgColor}`);
  }
}
