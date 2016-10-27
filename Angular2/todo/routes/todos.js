var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
// Load our API routes for the todo app
// import todoRoutes from './routes/_todo.router.js';

var mongoose = require('mongoose');
// Create a schema for the Todo model
var todoSchema = new mongoose.Schema({
  // The only data we need to manage for our todos are their text
  text: { type : String },
  isCompleted: {type: Boolean}
});

var todos = mongoose.model('todos', todoSchema);
mongoose.connect('mongodb://admin:admin123@ds037827.mongolab.com:37827/ng2todoapp');
 
/* GET All Todos */
router.get('/todos', function(req, res, next) {
    todos.find({},function(err, todos) {
        if (err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    });
});
 
/* GET One Todo with the provided ID */
router.get('/todos/:id', function(req, res, next) {
    todos.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, todos) {
        if (err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    });
});
 
/* POST/SAVE a Todo */
router.post('/todos', function(req, res, next) {
    var todo = req.body;
    if (!todo.text || !(todo.isCompleted + '')) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {

        var todo_obj = new todos({
            text: todo.text,
            isCompleted: todo.isCompleted
            });

        todo_obj.save(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});
 
/* PUT/UPDATE a Todo */
router.put('/todos/:id', function(req, res, next) {
    var todo = req.body;
    var updObj = {};
 
    if (todo.isCompleted) {
        updObj.isCompleted = todo.isCompleted;
    }
    if (todo.text) {
        updObj.text = todo.text;
    }
 
    if (!updObj) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        todos.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updObj, {}, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
 
 
});
 
/* DELETE a Todo */
router.delete('/todos/:id', function(req, res) {
    todos.remove({
        _id: req.params.id
    }, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });

    // todoRoutes(app, router);
 
});
 
module.exports = router;