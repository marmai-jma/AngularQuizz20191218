/**
 * @file
 * Create an observable which emits a number from 0 to 4 every 0.7 second.
 */
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { interval } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observables-cmp',
  templateUrl: './observables.component.html'
})
export class ObservablesComponent {
  private ROOT_URL = 'http://jsonplaceholder.typicode.com/posts';
  public logs: string[] = [];

  constructor(private http: HttpClient) {

    // Récupère un observable.
    const obs = this.getObs();

    obs
      // Log the data coming out of the Observable to the screen.
      .pipe(tap(data => this.log(data), null, () => this.log('Fini')))

      // Subscribing will execute the observable.
      .subscribe();
  }

  /**
   * Method returning a transformed observable.
   *
   * In a real-world project, the observable would come
   * from an HTTP request or from a user action.
   */
  getObs() {
    const originalObs = interval(700).pipe(take(5));

    const transformedObs = originalObs
        .pipe(
          // @TODO: Transformer l'observable ici. Par exemple :
          map(val => val)
        );

    return transformedObs;
  }

  // Logs values to the screen.
  private log(val: any): void {
    console.log(val);
    this.logs.push(val as string);
  }

}
