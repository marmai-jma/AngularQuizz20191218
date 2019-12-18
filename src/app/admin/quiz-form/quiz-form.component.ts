import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/quiz/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html'
})
export class QuizFormComponent implements OnInit {
  quizForm: any;

  constructor(private fb: FormBuilder, private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.quizForm = this.fb.group({
      title: [''],
      description: ['', Validators.required],
      canRetryQuestion: [false]
    });
  }

  saveQuizForm() {
    const formData = this.quizForm.value;
    console.log(formData);
    const quiz = new Quiz({
      title: formData.title,
      description: formData.description,
      canRetryQuestion: formData.canRetryQuestion, // Pas le même nom donc on a fait un mapping
      // le mapping est optionel si le nom des propriétés est le même ici il aurait suffit de renommer canRetryQuestion
    });
    // Sauvegarde de l'instanxe de Quiz
    this.quizService.saveQuiz(quiz)
      .subscribe(() => {
        //Confirmation
        alert('Quiz bien enregistré');
        //Redirection
        this.router.navigate(['/admin/quiz']);
      });
  }
}
