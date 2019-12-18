import { Component, OnInit, OnChanges } from '@angular/core';
import { QUIZZES } from '../../data/quizzes';
import { Answer } from '../../models/answer';
import { AnswersState, QuizStateManager } from '../quiz-state-manager.service';
import { QuizService } from '../quiz.service';
import { Question } from '../../models/question';
import { Quiz } from '../../models/quiz';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styles: []
})
export class QuizPlayerComponent implements OnInit {
  currentQuiz: Quiz;
  currentQuestion: Question;
  currentAnswer:  Answer;
  currentAnswers: AnswersState;
  isStarted = false;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private qsm: QuizStateManager) { }

  ngOnInit() {
     // Récupère dans l'URL l'id du quizz à afficher.
    const quizId = +this.route.snapshot.paramMap.get('quizId');
    this.quizService.loadQuiz(quizId).subscribe(data => {
      this.currentQuiz = data;

    // définit le Quizz en cours dansle QuizState Manager
      this.qsm.setQuiz(this.currentQuiz);

    // Initialise la liste des réponses
      this.currentAnswers = this.qsm.getAllAnswers();
    })
  }

  refreshButton() {
    throw new Error('Method not implemented.');
  }

  // Méthose appelée à chaque fois que l'enfant émet une réponse
  saveAnswer(answer: Answer) {
    // Stocke la réponse reçue.
    this.qsm.saveAnswer(answer);
  }

  startQuiz() {
    this.isStarted = true;
    const qa = this.qsm.getFirstQA();
    this.currentQuestion = qa.question;
    this.currentAnswer = qa.answer;
  }

  gotoPreviousQuestion() {
    const qa = this.qsm.getPreviousQA();
    this.currentQuestion = qa.question;
    this.currentAnswer = qa.answer;
  }

  gotoNextQuestion() {
    const qa = this.qsm.getNextQA();
    this.currentQuestion = qa.question;
    this.currentAnswer = qa.answer;

  }




}
