import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { Observable, of } from 'rxjs';

import { Quiz } from '../models/quiz';

@Injectable()
export class QuizResolver implements Resolve<Quiz> {

  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    const quizId = +route.params['quizId'];
    return of(null);  // @TODO
  }
}
