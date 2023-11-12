const todoForm = document.querySelector(".todo form");
const todoInput = document.querySelector(".todo form .todo__input");
const todoButton = document.querySelector(".todo form .todo__button");
const todoList = document.querySelector(".todo .todo__list");

const TODO_KEY = "todos";

memory = [];

function saveTodos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(memory));
}

function deleteTodos(event) {
  const li = event.target.parentElement;
  li.remove();
  memory = memory.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodos(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodos);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleInput(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  memory.push(newTodoObj);
  paintTodos(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleInput);

const todos = localStorage.getItem(TODO_KEY);

if (todos !== null) {
  const parsedTodos = JSON.parse(todos);
  memory = parsedTodos;
  parsedTodos.forEach(paintTodos);
}
