import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`

  constructor(private todoDataService: TodoDataService) {
  }

  // Service is now avaialble as this.todoDataService

  onAddTodo(todo: Todo) {
    if (!this.isNullOrWhiteSpace(todo.title)) {
      this.todoDataService.addTodo(todo);
    }
  }

  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  isNullOrWhiteSpace(input: string) {
    // credit: Dexter on stackoverflow
    if (typeof input === 'undefined' || input == null) {
      return true;
    }

    return input.replace(/\s/g, '').length < 1;
  }
}
