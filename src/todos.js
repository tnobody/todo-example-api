let todos = [];

function addTodo(todo) {
    todos = [...todos, todo];
}

function removeTodo(todo) {
    todos = todos.filter(t => t !== todo);
}

function byId(idToFind) {
    return todos.find(({id}) => id === idToFind);
}

function getAll() {
    return todos;
}

module.exports = {
    addTodo, removeTodo, byId, getAll
}