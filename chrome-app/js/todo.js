const toDoForm = document.getElementById("todo_form");
const toDoInput = document.querySelector("#todo_form input");
const toDoList = document.getElementById("todo_list");

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function printTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

const todoArr = [];

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todoArr));
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  todoArr.push(newTodo);
  printTodo(newTodo);
  saveTodo();
}

toDoForm.addEventListener("submit", handleTodoSubmit);
