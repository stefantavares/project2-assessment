var express = require('express');
var router = express.Router();
const todos = require('../data/todos');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Unit 2 Asessment', todos });
});

// POST '/todos' - Create Route
router.post('/todos', function (req, res) {
  req.body.done = false;
  todos.push(req.body);
  console.log(todos);
  res.redirect('/');
});

// DELETE "/todos/:idx" - Delete Route
router.delete('/todos/:idx', function (req, res) {
  todos.splice(req.params.idx, 1);
  res.redirect('/');
})


module.exports = router;
