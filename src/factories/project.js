class Project {
  constructor(title, description, todos = []) {
    this.title = title;
    this.description = description;
    this.todos = todos;
  }

  update(data) {
    Object.assign(this, data);
  }
}

export default Project;
