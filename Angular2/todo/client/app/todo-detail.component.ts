import { Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'my-todo-detail',
  templateUrl: 'app/todolist/tododetails.html'
})
export class TodoDetailComponent {
     @Input()
    todo: Todo;
}
