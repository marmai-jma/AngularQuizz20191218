import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TotoComponent } from './toto/toto.component';
import { QuizModule } from './quiz/quiz.module';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { LoginComponent } from './common/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [ AuthGuard ] }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TotoComponent,
    TodoListComponent,
    LoginComponent
  ],
  imports: [ BrowserModule, QuizModule, RouterModule.forRoot(routes), HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
