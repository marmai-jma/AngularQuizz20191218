import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { QuizPlayerComponent } from './quiz-player/quiz-player.component';
import { QuizNavComponent } from './quiz-nav/quiz-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../common/login/login.component';

const routes: Routes = [
  { path: 'quizzes', component: QuizListComponent },
  { path: 'quiz/:quizId', component: QuizPlayerComponent },
  ];

@NgModule({
  declarations: [
    QuizListComponent,
    QuizQuestionComponent,
    QuizItemComponent,
    QuizPlayerComponent,
    QuizNavComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)],
  providers: [
    {provide: 'BACKEND_URL', useValue:'http://localhost:3004' },
  ],
  exports: [
    // pour rendre le QuizPlayer affichable EN DEHRS de son module
    CommonModule
  ]
})
export class QuizModule { }
