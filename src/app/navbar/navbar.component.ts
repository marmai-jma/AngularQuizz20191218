import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';

interface NavItem {
  text: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo = '/assets/logo_superquiz.png';
  user = new User({name: `Bob l'éponge`, email: 'bob@bob.com'});
  navItems: NavItem[] = [
    { text: 'Accueil', link: '/home' },
    { text: 'Quizzes', link: '/quizzes' },
    { text: 'Admin', link: '/admin' },
    { text: 'Login', link: '/login' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
