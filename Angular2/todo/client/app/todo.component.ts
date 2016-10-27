import { Component, Input, Output } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-todo',
  templateUrl: 'app/todolist/todo.html',
  styleUrls: ['app/todolist/todolist.css'],
  providers: [TodoService]

})

export class TodoComponent implements OnInit{


constructor(private todoService: TodoService) { }

  title='Todo App';
  todos : Todo[];

  selectedTodo: Todo;

  // @Input
  newTodo: Todo;

   public toggles = [
    { value: 'toggled', display: 'Toggled' },
    { value: 'untoggled', display: 'UnToggled' },
  ];
 
 
  onSelect(todo: Todo): void {
  this.selectedTodo = todo;
}



  getTodos(): void {
     this.todoService.getTodos().then(todos => this.todos = todos);
  }

addTodo(): void {
     this.todoService.getTodos().then(todos => this.todos = todos);
  }
  
  ngOnInit(): void {
    this.getTodos();
  }

 }


