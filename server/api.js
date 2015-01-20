/**
 * Created by cohensha on 1/19/2015.
 */


module.exports = function(app) {

  // api ---------------------------------------------------------------------
  // get all todos
  app.get('/api/todos', function(req, res) {
    res.json({aaa:"aaa"});
  });

  // create todo and send back all todos after creation
  app.post('/api/todos', function(req, res) {

  });

  // delete a todo
  app.delete('/api/todos/:todo_id', function(req, res) {

  });

  // application -------------------------------------------------------------
  app.get('*', function(req, res) {
    res.sendfile('./app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
};
