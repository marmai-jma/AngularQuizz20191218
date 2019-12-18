/**
 * @file
 * Service to manage the quiz state (i.e. current quiz, current question, etc.)
 */
import { Injectable } from '@angular/core';

// Models
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

/**
 * Stores the question being currently displayed.
 * The `allQuestionIds` property contains all questions of the current
 * quiz and is here for assisting with navigation.
 */
export interface QuestionState {
  currentQuestionId: number;
  allQuestionIds: number[];
}

/**
 * Stores all the answers submitted so far by the user,
 * keyed by questionId.
 */
export interface AnswersState {
  [questionId: number]: Answer;
}

/**
 * A question/answer pair.
 */
interface QA {
  question: Question;
  answer: Answer;
}

@Injectable({
  providedIn: 'root'
})
export class QuizStateManager {
  private _currentQuiz: Quiz;
  private _currentQuestionIndex: number;
  private _allAnswers: AnswersState;

  /**
   * Public API.
   */

  /**
   * Set the current quiz.
   */
  setQuiz(quiz: Quiz) {
    this._currentQuiz = quiz;
    this._currentQuestionIndex = null;
    this._allAnswers = {};
  }

  /**
   * Return the first question & answer in the quiz.
   */
  getFirstQA(): QA {
    this._currentQuestionIndex = 0;
    const q = this._currentQuiz.questions[this._currentQuestionIndex];
    return { question: q, answer: this._getAnswer(q.id) };
  }

  /**
   * Return the question & answer BEFORE the current ones.
   */
  getPreviousQA(): QA {
    this._currentQuestionIndex--;
    const q = this._currentQuiz.questions[this._currentQuestionIndex];
    return { question: q, answer: this._getAnswer(q.id) };
  }

  /**
   * Return the question & answer AFTER the current ones.
   */
  getNextQA(): QA {
    this._currentQuestionIndex++;
    const q = this._currentQuiz.questions[this._currentQuestionIndex];
    return { question: q, answer: this._getAnswer(q.id) };
  }

  /**
   * Memorize an answer.
   */
  saveAnswer(answer: Answer) {
    this._allAnswers[answer.questionId] = answer;
  }

  /**
   * Return all answers saved so far (useful to compute the score).
   */
  getAllAnswers(): AnswersState {
    return this._allAnswers;
  }

  /**
   * Private API.
   */

  /**
   * Return the answered saved for the given question,
   * or a new answer if the question doesn't have one yet.
   */
  private _getAnswer(questionId: number): Answer {
    return this._allAnswers[questionId] || new Answer({questionId: questionId});
  }

}
