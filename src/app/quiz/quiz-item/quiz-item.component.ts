import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Quiz } from '../../models/quiz';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styles: []
})
export class QuizItemComponent implements OnInit, OnDestroy {

  @Input() quiz: Quiz;  // undefined

  constructor() {
    console.log('constructor', this.quiz);
  }

  ngOnInit() {
    console.log('ngOnInit', this.quiz);
  }

  ngOnDestroy() {

  }

  ngOnChanges() {

  }

}
