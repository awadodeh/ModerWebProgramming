"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        // private todosUrl = 'app/heroes';  // URL to web api 
        this.todosUrl = 'http://localhost:3000/api/v1/todos';
    }
    TodoService.prototype.getTodos = function () {
        return this.http.get(this.todosUrl)
            .toPromise()
            .then(function (response) { return JSON.parse(response.text()); });
        //    .catch(this.handleError);
    };
    // addTodos(todo:Todo): Todo {
    //     return this.http.post(this.todosUrl).toPromise()
    //     .then()
    // } // stub
    TodoService.prototype.updateTodos = function () { }; // stub
    TodoService.prototype.deleteTodos = function () { }; // stub
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map