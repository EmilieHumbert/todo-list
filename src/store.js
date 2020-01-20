import Project from './factories/project';
import Todo from './factories/todo';

// Projects stored in memory
const projects = [];

// Check local storage
function storageAvailable(type) {
  let storage;
  try {
    const x = '__storage_test__';
    storage = window[type];
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch(e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      (storage && storage.length !== 0);
  }
}

// Local storage
if (storageAvailable('localStorage')) {
  const storedProjects = JSON.parse(window.localStorage.getItem('myprojects'));

  if (Array.isArray(storedProjects) && storedProjects.length > 0) {
    storedProjects.forEach((storedProject) => {
      const todos = storedProject.todos.map((storedTodo) => new Todo(
        storedTodo.title,
        storedTodo.description,
        storedTodo.date,
        storedTodo.priority,
        storedTodo.complete
      ));
      const project = new Project(storedProject.title, storedProject.description, todos);
      projects.push(project);
    });
  }
}

// Create default project
if (projects.length < 1) {
  const defaultProject = new Project('Default', 'Hello World!', [
    new Todo('Go shopping', 'Shopping list', '2020-01-20', 'high'),
    new Todo('Another thing', 'Not so important', '2020-01-21', 'low')
  ]);
  projects.push(defaultProject);
}

// Save projects to local storage
function updateLocalStorage() {
  if (storageAvailable('localStorage')) {
    window.localStorage.setItem('myprojects', JSON.stringify(projects));
  }
}

export {
  projects,
  updateLocalStorage
};
