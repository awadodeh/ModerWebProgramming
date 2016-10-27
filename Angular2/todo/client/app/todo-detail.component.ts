import { Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'my-todo-detail',
  template: `
   <div *ngIf="todo">
      <h2>{{todo.txt}} details!</h2>
      <div><label>id: </label>{{todo.id}}</div>
      <div>
        <label>text: </label>
        <input [(ngModel)]="todo.txt" placeholder="txt"/>
      </div>
    </div>
`
})
export class TodoDetailComponent {
     @Input()
    todo: Todo;
}
