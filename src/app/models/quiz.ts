/**
 * @file
 * A quiz and its metadata.
 */
import { Question } from './question';
import { QuizOptions } from './quiz-options';

export class Quiz {
  id: number;
  title: string;
  description: string;
  canRetryQuestion: boolean;
  questions: Question[];

  constructor(options: QuizOptions = {}) {
    this.id = options.id || null;
    this.title = options.title || '';
    this.description = options.description || '';
    this.canRetryQuestion = options.canRetryQuestion === undefined ? false : options.canRetryQuestion;
    // Re-hydrate the questions.
    this.questions = options.questions ? options.questions.map((q: any) => new Question(q)) : [];
  }

  /**
   * Return a JSON representation of the quiz
   * which is compatible with our backend.
   */
  toJson() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      canRetryQuestion: this.canRetryQuestion,
      questions: this.questions.map(q => q.toJson())
    };
  }

}

