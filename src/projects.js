import { projects, updateLocalStorage } from './store';

function getProjectIndex(project) {
  return projects.indexOf(project);
}

// Update projects
function upsertProject(project, data) {
  project.update(data);

  if (getProjectIndex(project) === -1) {
    projects.push(project);
  }

  updateLocalStorage();
}

function getProjects() {
  return projects;
}

// If projects index is 0 (default) or project not save yet (-1) then project can't be deleted
function canDeleteProject(project) {
  return getProjectIndex(project) > 0;
}

function deleteProject(project) {
  if (canDeleteProject(project)) {
    projects.splice(getProjectIndex(project), 1);
    updateLocalStorage();
  }
}

export {
  upsertProject,
  getProjects,
  canDeleteProject,
  deleteProject  
}
