import { Injectable } from '@angular/core';
import {Todo} from './todo';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class TodoService {
    
    constructor(private http: Http) { }

    // private todosUrl = 'app/heroes';  // URL to web api 
    private todosUrl = 'http://localhost:3000/api/v1/todos';

    getTodos(): Promise<Todo[]> {
        return this.http.get(this.todosUrl)
               .toPromise()
            //    .then(response => response.json().data as Todo[])
            .then(response => JSON.parse(response.text()) as Todo[])
            //    .catch(this.handleError);
        
    } 

    addTodos(): void {} // stub

    updateTodos(): void {} // stub

    deleteTodos(): void {} // stub


}