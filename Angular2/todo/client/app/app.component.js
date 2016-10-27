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
var TODOLIST = [
    { id: 11, txt: 'bring shit', isCompleted: false },
    { id: 12, txt: 'get oil', isCompleted: false },
    { id: 13, txt: 'Bombasto', isCompleted: false },
    { id: 14, txt: 'Celeritas', isCompleted: false },
    { id: 15, txt: 'Magneta', isCompleted: false },
    { id: 16, txt: 'RubberMan', isCompleted: false },
    { id: 17, txt: 'Dynama', isCompleted: false },
    { id: 18, txt: 'Dr IQ', isCompleted: false },
    { id: 19, txt: 'Magma', isCompleted: false },
    { id: 20, txt: 'Tornado', isCompleted: false }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Todo App';
        this.todos = TODOLIST;
    }
    AppComponent.prototype.onSelect = function (todo) {
        this.selectedTodo = todo;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>My Todo-List</h1>\n    <ul class=\"todos\">\n      <li *ngFor=\"let todo of todos\"\n        [class.selected]=\"todo === selectedTodo\"\n        (click)=\"onSelect(todo)\">\n        <span class=\"badge\">{{todo.id}}</span> {{todo.txt}}\n      </li>\n\n    </ul>\n     <my-todo-detail [todo]=\"selectedTodo\"></my-todo-detail>\n  ",
            styles: ["\n  \n  \n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .todos {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .todos li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .todos li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .todos li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .todos .text {\n    position: relative;\n    top: -3px;\n  }\n  .todos .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map