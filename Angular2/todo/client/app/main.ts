import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

import { TodoList } from './components/todoList';
import { TodosComponent }  from './components/todos';

// const platform = platformBrowserDynamic();
// platform.bootstrapModule(AppModule);

// platform.bootstrapModule(TodoList);
// platform.bootstrapModule(TodosComponent);

platformBrowserDynamic().bootstrapModule(AppModule);