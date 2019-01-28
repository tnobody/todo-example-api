const express = require('express');
const {readFile} = require('fs');
const {join} = require('path');
const bodyParser = require('body-parser');
const { getAll, byId, removeTodo, addTodo } = require('./todos');

const app = express();


app.use(bodyParser.json());

app.get('', (_, res) => {
    readFile(join(__dirname, 'index.html'), (e, data) => {
        res.end(data);
    })
})

app.get('/api/todolist', (req, res) => {
    res.json(getAll());
})

app.delete('/api/todo/:id', (req, res) => {
    const {id} = req.params;
    res.json(removeTodo(byId(id)));
})

app.get('/api/todo/:id', (req, res) => {    
    const {id} = req.params;
    const todo = byId(id);
    res.json(todo);
})

app.post('/api/todolist', (req, res) => {
    addTodo(req.body);
    res.end("");
})

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is running');
})