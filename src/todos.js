function getTodos() {
  return todos;
}

function upsertTodo(project, todo, data) {
  todo.update(data);
  
  if (project.todos.indexOf(todo) === -1) {
    project.todos.push(todo);
  }
}

function getTodoIndex(project, todo) {
  return project.todos.indexOf(todo);
}

function canDeleteTodo(project, todo) {
  return getTodoIndex(project, todo) > -1;
}

function deleteTodo(project, todo) {
  if (canDeleteTodo(project, todo)) {
    project.todos.splice(getTodoIndex(project, todo), 1);
  }
}
export {
  upsertTodo,
  getTodos,
  canDeleteTodo,
  deleteTodo
}
