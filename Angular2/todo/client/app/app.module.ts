import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { TodoDetailComponent } from './todo-detail.component';
import { TodoComponent }     from './todo.component';
import { TodoService }         from './todo.service';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

// import { TodoList }  from './components/todoList';
import { TodosComponent }  from './components/todos';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    // AppComponent,
     TodoDetailComponent,
    //  AppComponent
    //  TodoComponent//,
     TodosComponent
     

  ],
   providers: [
    TodoService
  ],
  // bootstrap: [ AppComponent ]
    bootstrap:[TodosComponent]
})
export class AppModule { }