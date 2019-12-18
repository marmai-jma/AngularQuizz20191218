import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, interval } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';


@Component({
  selector: 'observables-cmp',
  template: `
    <div class="container">
      <h1>Observables</h1>
      <ul *ngIf="items">
        <li *ngFor="let item of items">{{item}}</li>
      </ul>
      <div class="well" *ngFor="let log of logs"><h3>{{log}}</h3></div>
    </div>
  `
})
export class ObservablesComponent {
  private ROOT_URL = 'http://jsonplaceholder.typicode.com/posts/';
  public items: any[];
  public logs: string[] = [];

  constructor(private http: HttpClient) { }

  // In a real-world app, this code would probably be in a Service.
  getObs(): Observable<any> {
    // Create an observable which emits a number from 0 to 4 every 0.7 second.
    const obs = interval(700).pipe(take(5));

    // Transform the observable BEFORE returning it.
    return obs
      .pipe(

        // @TODO: Transform the Observable HERE

        map(val => val),

        // Log the data coming out of the Observable to the screen.
        tap(data => this.log(data), null, () => this.log('Fini'))
      );
  }

  // Logs values to the screen.
  private log(val: any): void {
    console.log(val);
    let valString = <string> val;
    this.logs.push(valString);
  }

}
