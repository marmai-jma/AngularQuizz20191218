import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

import {Question} from '../../models/question';
import {Answer} from '../../models/answer';
import { Choice } from '../../models/choice';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styles: []
})
export class QuizQuestionComponent implements OnInit, OnChanges {

  @Input() question: Question;
  @Input() answer: Answer;
  @Output() submit = new EventEmitter<Answer>();

  isSubmitted: boolean;
  submitLabel: string;
  submitClass: string;

  constructor() { }

  ngOnInit() {
    this.isSubmitted = this.answer.isAnswered();
    this.refreshButton();
  }

  ngOnChanges() {
    this.isSubmitted = this.answer.isAnswered();
    this.refreshButton();
  }

  clickChoice(choice: Choice) {
    // Si réponse déjà soumise, ne fais rien.
    if (this.isSubmitted) {
      return;
    }

    // Si le choix est déjà sélectionné, on le retire...
    if (this.answer.hasChoice(choice)) {
      this.answer.removeChoice(choice);
    } else {  // Sinon, on l'ajoute
      this.answer.addChoice(choice);
    }
  }

  submitAnswer() {
    this.isSubmitted = true;
    this.refreshButton();
    this.submit.emit(this.answer); //transmet la réponse de l'utilisateur au composant parent;
  }

  // Met à jour le libellé et la classe du bouton "Soumettre"
  private refreshButton() {
    this.submitLabel = !this.isSubmitted ? 'Soumettre' : this.answer.isCorrect ? 'CORRECT' : 'INCORRECT';
    this.submitClass = !this.isSubmitted ? 'btn-primary' : this.answer.isCorrect ? 'btn-success' : 'btn-danger';  // vert ou rouge
  }




  // Charge une nouvelle question et une nouvelle réponse.
  gotoNextQuestionTEMP() {
    this.question = new Question({
      'id': 35,
      'title': 'Angular est vraiment trop canon.',
      'choices': [
        { 'text': 'Vrai', 'isCorrect': true },
        { 'text': 'Faux'}
      ],
      'explanation': 'À ce stade, comment ne pas en être persuadé ? 😝'
    });
    this.answer = new Answer({
      questionId: 35,
      multipleChoicesAllowed: false
    });
    this.ngOnInit();
  }
}
