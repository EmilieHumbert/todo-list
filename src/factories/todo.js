class Todo {
  constructor(title, description, date, priority, complete = false) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.complete = complete;
  }

  update(data) {
    Object.assign(this, data);
  }

  toggleComplete() {
    this.complete = !this.complete;
  }
}

export default Todo;
