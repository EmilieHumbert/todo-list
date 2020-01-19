function getTodos() {
  return todos;
}

function upsertTodo(project, todo, data) {
  todo.update(data);
  
  if (project.todos.indexOf(todo) === -1) {
    project.todos.push(todo);
  }
}

function getTodoIndex(todo) {
  return project.todos.indexOf(todo);
}

function deleteTodo(todo) {
  project.todos.splice(getTodoIndex(todo), 1);
}

export {
  upsertTodo,
  getTodos,
  deleteTodo
}
