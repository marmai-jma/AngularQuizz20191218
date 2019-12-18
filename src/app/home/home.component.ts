import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appName2 = 'SuperQuiz';

  // PROPRIETE: TYPE = VALEUR

  prenoms: string[] = ['Damien', 'Mohamed', 'Jean-Marc', 'Joooohane'];

  constructor() {
    setTimeout(() => this.prenoms.push('Antoine'), 2000);
  }

  ngOnInit() {
  }

}
