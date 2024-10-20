const toDoForm = document.getElementById("todo_form");
const toDoInput = document.querySelector("#todo_form input");
const toDoList = document.getElementById("todo_list");

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  //span.innerText = newTodo;
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

let todoArr = [];

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todoArr));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  todoArr = todoArr.filter((item) => item.id !== parseInt(li.id));
  saveTodo();
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  //todoArr.push(newTodo);
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todoArr.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const saveTodos = localStorage.getItem("todos");

if (saveTodos) {
  const parsedTodos = JSON.parse(saveTodos);
  todoArr = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
