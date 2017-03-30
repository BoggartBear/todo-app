import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  // Events
  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  // Event Handlers
  onToggleTodoComplete(todo: Todo) {
    debugger;
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    debugger;
    this.remove.emit(todo);
  }

  ngOnInit() {
  }
}
