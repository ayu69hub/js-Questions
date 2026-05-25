// TODO LIST
let todoList = [];

function addTodo(task) {
    todoList.push(task);
}

function removeTodo(task) {
    todoList = todoList.filter(t => t !== task);
}

function displayTodos() {
    console.log("TODO List:");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}
// Example usage:
addTodo("Buy groceries");
addTodo("Complete JavaScript project");
addTodo("Call mom");
displayTodos();
removeTodo("Complete JavaScript project");
displayTodos();