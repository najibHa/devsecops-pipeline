const express = require('express');

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

module.exports = app;
