import { Component, OnInit } from '@angular/core';

interface Todo {
  text: string;
  done: boolean;
}

enum Filter {
  ALL,
  DONE,
  NOT_DONE
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // Source de vérité
  todos: Todo[] = [
    {text: 'Mon premier todo', done: false},
    {text: 'Préparer la formation', done: true},
    {text: 'Revoir les bases', done: false},
  ];
  currentFilter: Filter = Filter.ALL;

  // propriété = valeur
  filterEnum = Filter;

  constructor() {}

  maMethode() {
    return this.todos.filter((todo) => {
      // Renvoie true pour garder, false pour jeter
      if (this.currentFilter === Filter.ALL) {
        return true;
      } else if (this.currentFilter === Filter.DONE) {
        return todo.done;
      } else if (this.currentFilter === Filter.NOT_DONE) {
        return !todo.done;
      }
    });
  }

  filterTodos(filter: Filter) {
    this.currentFilter = filter;
  }

  addTodo(todoText: string, ev: Event) {
    // Empêche la soumission du formulaire (événement par défaut).
    ev.preventDefault();
    // Crée un nouvel objet Todo
    const todo: Todo = { text: todoText, done: false };
    // Ajoute ce nouveau todo à la liste
    this.todos.push(todo);
  }

  toggleTodo(todo: Todo) {
    // Option 1 - Quick & Dirty (effets de bord)
    todo.done = !todo.done;

    // Option 2 - Recrée cpt la liste des todos
    // ATTENTION. Le todo à changer est identifié par son texte !!
    // this.todos = this.todos.map(td => {
    //   return td.text === todo.text ? {...td, done: !td.done} : td;
    // });
  }

  deleteTodo(todo: Todo, ev: Event) {
    // Empêche le clic sur la poubelle de déclencher le toggle (effet de bord)
    ev.stopPropagation();

    // Option 1 - Cherche l'index du todo à supprimer + Splice
    const index = this.todos.findIndex(td => td.text === todo.text);
    this.todos.splice(index, 1);

    // Option 2 - Recrée la liste des todos sans le todo à supprimer
    this.todos = this.todos.filter(td => td.text !== todo.text);
  }

}
