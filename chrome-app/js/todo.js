const todoFrom = document.querySelector("#todo_form");
const todoInput = document.querySelector("#todo_form input");
const todoList = document.querySelector("#todo_list");

function handleTodoSubmit(e) {
  e.preventDefault;
  const newTodo = todoInput.value;
  todoInput.value = "";
  console.log(newTodo);
}

todoFrom.addEventListener("submit", handleTodoSubmit);
