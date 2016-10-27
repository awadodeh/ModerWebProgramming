import { Injectable } from '@angular/core';
import {Todo} from './todo';
import {TODOLIST} from './mock-todos';

@Injectable()
export class TodoService {

    getTodos(): Promise<Todo[]> {
        return Promise.resolve(TODOLIST);
    } 

    addTodos(): void {} // stub

    updateTodos(): void {} // stub

    deleteTodos(): void {} // stub


}