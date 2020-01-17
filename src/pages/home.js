import navigation from '../navigation';
import { getProjects } from '../projects';

function createHomePage() {
  // home container
  const homeContent = document.createElement('div');
  homeContent.setAttribute('class', 'main-content');

  // Display other projects
  const projects = getProjects();

  // Loop and add to page
  projects.forEach((project) => {
    const projectEl = document.createElement('div');
    projectEl.setAttribute('class', 'home-content-section square projects-list-item');
    homeContent.append(projectEl);

    const projectContentEl = document.createElement('div');
    projectContentEl.innerHTML = project.title;
    projectEl.append(projectContentEl);

    projectEl.addEventListener('click', () => navigation('project', project));
  });


  // Section with boxes to add project / item
  const addContent = document.createElement('div');
  addContent.setAttribute('class', 'add-content');
  homeContent.append(addContent);


  // Add project
  const addProject = document.createElement('div');
  addProject.setAttribute('class', 'square add-project');
  addContent.append(addProject);

  const addProjectButton = document.createElement('button');
  addProjectButton.setAttribute('class', 'select-btn home-content-section add-project-button');
  addProjectButton.innerHTML = 'Add new project';
  addProjectButton.addEventListener('click', () => navigation('project'));
  addProject.append(addProjectButton);


  // Add item
  const addItem = document.createElement('div');
  addItem.setAttribute('class', 'square add-item');
  addContent.append(addItem);

  const addItemButton = document.createElement('button');
  addItemButton.setAttribute('class', 'select-btn home-content-section add-item-button');
  addItemButton.innerHTML = 'Add new todo list\'s item';
  addItemButton.addEventListener('click', () => navigation('todo'));
  addItem.append(addItemButton);


  return homeContent;
};

export default createHomePage;
