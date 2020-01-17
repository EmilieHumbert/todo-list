import Project from './factories/project';
import Todo from './factories/todo';

// Projects stored in memory
const projects = [
  // Create a default project
  new Project('Default', 'Hello World!', [
    new Todo('Go shopping', 'Shopping list', '2020-01-20', 'high'),
    new Todo('Another thing', 'Not so important', '2020-01-21', 'low')
  ])
];

function getProjects() {
  return projects;
}

function getProjectIndex(project) {
  return projects.indexOf(project);
}

function upsertProject(project, data) {
  project.update(data);

  if (getProjectIndex(project) === -1) {
    projects.push(project);
  }
}

// If projects index is 0 (default) or project not save yet (-1) then project can't be deleted
function canDeleteProject(project) {
  return getProjectIndex(project) > 0;
}

function deleteProject(project) {
  if (canDeleteProject(project)) {
    projects.splice(getProjectIndex(project), 1);
  }
}

export {
  upsertProject,
  getProjects,
  canDeleteProject,
  deleteProject  
}
