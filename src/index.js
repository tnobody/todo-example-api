const express = require('express');
const bodyParser = require('body-parser');
const { getAll, byId, removeTodo, addTodo } = require('./todos');

const app = express();

app.use(bodyParser.json());

app.get('/api/todolist', (req, res) => {
    res.json(getAll());
})

app.delete('/api/todo/:id', (req, res) => {
    const {id} = req.params;
    res.json(removeTodo(byId(id)));
})

app.get('/api/todo/:id', (req, res) => {
    const {id} = req.param;
    res.json(byId(id));
})

app.post('/api/todolist', (req, res) => {
    addTodo(req.body);
    res.send(req.body.id);
})

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is running');
})