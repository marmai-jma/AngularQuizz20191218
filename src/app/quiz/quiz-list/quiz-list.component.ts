import { Component, OnInit } from '@angular/core';
import { QUIZZES } from '../../data/quizzes';
import { Quiz } from '../../models/quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styles: []
})
export class QuizListComponent implements OnInit {
  quizList: Quiz[]; // undefined

  constructor(private quizservice: QuizService) { }

  ngOnInit() {
    this.quizservice.loadQuizzes().subscribe(data => this.quizList = data);
  }

  public addQuiz() {
    this.quizList.push(new Quiz({title: 'Quiz bidon'}));
  }

  public deleteQuiz() {
    this.quizList.pop();
  }

}
