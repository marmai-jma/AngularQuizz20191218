/**
 * @file
 * A user logged into the application.
 */
interface UserOptions {
  name: string;
  email: string;
  photo?: string;
  active?: boolean;
}

// Créer la classe User ici.
export class User {
  name: string;
  email: string;
  photo: string;
  active: boolean;

  constructor(options: UserOptions) {
    this.name = options.name;
    this.email = options.email;
    this.photo = options.photo || 'images/placeholder.png';
    this.active = options.active === undefined ? true : options.active;
  }
}
