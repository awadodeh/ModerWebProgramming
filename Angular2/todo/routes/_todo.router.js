// */app/routes/_todo.router.js*

// ## Todo API Router

// HTTP Verb  Route                 Description

// GET             /api/todo             Get all of the todo items
// POST          /api/todo             Create a single todo item
// DELETE     /api/todo/:todo_id    Delete a single todo item

// Load the todo model we just created
import Todo from '../models/todo.model';

export default (app, router) => {

  // ### Todo API Routes

  // Define routes for the todo item API

  router.route('/todo')

    // ### Create a todo item

    // Accessed at POST http://localhost:8080/api/todo

    // Create a todo item
    .post((req, res) => {

      Todo.create({

        text : req.body.text

      }, (err, todo) => {

        // If we get an error during this operation, send it, which will prevent
        // everything below this statement from executing
        if (err)
          res.send(err);

        // DEBUG
        // This is an example of ES6 string interpolation
        // Reference: https://developers.google.com/web/updates/2015/01/ES6-Template-Strings?hl=en
        console.log(`Todo created: ${todo}`);

        // Get and return all todos after one has been created
        Todo.find((err, todos) => {
          if(err)
            res.send(err);

          res.json(todos);
        });
      });
    })

    // ### Get all of the todo items

    // Accessed at GET http://localhost:8080/api/todo
    .get((req, res) => {

      // Use mongoose to get all todo items in the database
      Todo.find((err, todo) => {

        if(err)
          res.send(err);

        else
          res.json(todo);
      });
    })

    // ### Delete a todo item by ID

    // Accessed at DELETE http://localhost:8080/api/todo/:todo_id
    .delete((req, res) => {

      // DEBUG
      console.log(`Attempting to delete todo with id: ${req.params.todo_id}`);

      Todo.remove({

        _id : req.params.todo_id
      }, (err, todo) => {

        if(err)
          res.send(err);

        console.log('Todo successfully deleted!');

        Todo.find((err, todos) => {
          if(err)
            res.send(err);

          res.json(todos);
        });
      });
    });
};