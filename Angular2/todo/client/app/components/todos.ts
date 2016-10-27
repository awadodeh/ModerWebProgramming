//the todos component

  import { Component,OnInit } from '@angular/core';
  import { Todo } from '../todo';
  import { TodoService } from '../todo.service';

  @Component({
    selector: 'todos',
    templateUrl: 'app/todolist/template.html',
    styleUrls: ['app/todolist/todos.css'],
    providers: [TodoService]
  })

  export class TodosComponent implements OnInit{

    newTodo: string;
    todos: any;
    todoObj: any;
    todos1 : Todo[];

    constructor(private todoService: TodoService) {
      this.newTodo = '';
      this.todos = [];
      
    }

    addTodo(event) {
      this.todoObj = {
        newTodo: this.newTodo,
        completed: false
      }
      this.todos.push(this.todoObj);
      this.newTodo = '';
      event.preventDefault();
    }

    deleteTodo(index) {
      this.todos.splice(index, 1);
    }

    deleteSelectedTodos() {
      //need ES5 to reverse loop in order to splice by index
      for(var i=(this.todos.length -1); i > -1; i--) {
        if(this.todos[i].completed) {
          this.todos.splice(i, 1);
        }
      }
    }


  getTodos(): void {
     this.todoService.getTodos().then(todos => this.todos1 = todos);
  }
  
  ngOnInit(): void {
    this.getTodos();
  }
  }