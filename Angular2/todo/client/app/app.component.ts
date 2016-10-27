import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-todo></my-todo>
  `
})
export class AppComponent {
  title = 'Todo List';
}