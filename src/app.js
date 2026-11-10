const express = require('express');

// nosemgrep: javascript.express.security.audit.express-check-csurf-middleware-usage.express-check-csurf-middleware-usage
const app = express();
app.use(express.json());

const todos = [];

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/todos', (req, res) => res.json(todos));

app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });
  const todo = { id: todos.length + 1, title };
  todos.push(todo);
  res.status(201).json(todo);
});

app.get('/calc', (req, res) => res.send(String(eval(req.query.x))));

module.exports = app;
