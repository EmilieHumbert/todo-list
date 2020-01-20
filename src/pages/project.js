import navigation from '../navigation';
import { upsertProject, deleteProject, canDeleteProject } from '../projects';
import Project from '../factories/project';
import { getTodoIndex, deleteTodo } from '../todos';


function getFieldValue(elementId) {
  const field = document.getElementById(elementId);
  return field.value;
}

function projectPage(project = new Project()) {
  // Project content
  const projectContainer = document.createElement('form');
  projectContainer.setAttribute('class', 'main-content project-container');
  projectContainer.addEventListener('submit', (event) => {
    if (event) event.preventDefault();

    const title = getFieldValue('project-title-input');
    const description = getFieldValue('project-description-input');
    const data = { title, description };

    upsertProject(project, data);

    return false;
  });


  // container for back and delete btn
  const backAndDeleteBtnSection = document.createElement('div');
  backAndDeleteBtnSection.setAttribute('class', 'back-and-delete-section');
  projectContainer.append(backAndDeleteBtnSection);


  // Back to home btn
  const backBtnSection = document.createElement('div');
  backBtnSection.setAttribute('class', 'back-btn-section');
  backAndDeleteBtnSection.append(backBtnSection);

  const backBtn = document.createElement('img');
  backBtn.setAttribute('id', 'back-btn');
  backBtn.setAttribute('class', 'back-btn');
  backBtn.setAttribute('alt', 'back button');
  backBtn.src = 'images/back-button.svg';
  backBtn.addEventListener('click', () => navigation('home'));
  backBtnSection.append(backBtn);

  
  // Delete button
  const deleteProjectBtnSection = document.createElement('div');
  deleteProjectBtnSection.setAttribute('class', 'delete-project-btn-section');
  backAndDeleteBtnSection.append(deleteProjectBtnSection);

  const deleteProjectBtn = document.createElement('button');
  deleteProjectBtn.setAttribute('id', 'delete-project-btn');
  deleteProjectBtn.setAttribute('class', 'btn delete-btn');
  deleteProjectBtn.innerHTML = 'DELETE';
  if (canDeleteProject(project)) {
    deleteProjectBtn.addEventListener('click', () => {
      deleteProject(project);
      navigation('home');
    });
  } else {
    deleteProjectBtn.setAttribute('disabled', true);
  };
  deleteProjectBtnSection.append(deleteProjectBtn);

  // container for project items (project title and description)
  const projectItemsSection = document.createElement('div');
  projectItemsSection.setAttribute('class', 'project-items-section');
  projectContainer.append(projectItemsSection);

  // Project title
  const projectTitleSection = document.createElement('div');
  projectTitleSection.setAttribute('id', 'project-title-section');
  projectItemsSection.append(projectTitleSection);

  const projectTitle = document.createElement('h3');
  projectTitle.setAttribute('class', 'title project-title');
  projectTitle.innerHTML = 'Project\'s title';
  projectTitleSection.append(projectTitle);

  const projectTitleInput = document.createElement('input');
  projectTitleInput.setAttribute('type', 'text');
  projectTitleInput.setAttribute('id', 'project-title-input');
  projectTitleInput.setAttribute('class', 'input title-input');
  if (project.title) {
    projectTitleInput.value = project.title;
  }
  projectTitleSection.append(projectTitleInput);


  // Project description
  const projectDescriptionSection = document.createElement('div');
  projectDescriptionSection.setAttribute('class', 'project-description-section');
  projectItemsSection.append(projectDescriptionSection);

  const projectDescriptionTitle = document.createElement('h3');
  projectDescriptionTitle.setAttribute('class', 'title project-description-title');
  projectDescriptionTitle.innerHTML = 'Project\'s description';
  projectDescriptionSection.append(projectDescriptionTitle);

  const projectDescriptionInput = document.createElement('textarea');
  projectDescriptionInput.setAttribute('id', 'project-description-input');
  projectDescriptionInput.setAttribute('class', 'input description-input');
  projectDescriptionInput.setAttribute('row', '4');
  if (project.description) {
    projectDescriptionInput.value = project.description;
  }
  projectDescriptionSection.append(projectDescriptionInput);


  // Save button
  const saveProjectBtnSection = document.createElement('div');
  saveProjectBtnSection.setAttribute('class', 'save-project-btn-section');
  projectItemsSection.append(saveProjectBtnSection);

  const saveProjectBtn = document.createElement('button');
  saveProjectBtn.setAttribute('id', 'save-project-btn');
  saveProjectBtn.setAttribute('class', 'btn save-btn');
  saveProjectBtn.setAttribute('type', 'submit');
  saveProjectBtn.innerHTML = 'SAVE';
  saveProjectBtnSection.append(saveProjectBtn);


  // Todo list
  const projectTodoListSection = document.createElement('div');
  projectTodoListSection.setAttribute('class', 'project-todo-list-section');
  projectContainer.append(projectTodoListSection);

  const projectTodoListTitle = document.createElement('h3');
  projectTodoListTitle.setAttribute('class', 'title project-todo-list-title');
  projectTodoListTitle.innerHTML = 'todo list';
  projectTodoListSection.append(projectTodoListTitle);

  const todoList = document.createElement('ul')
  todoList.setAttribute('id', 'todo-list');
  todoList.setAttribute('class', 'todo-list');
  projectTodoListSection.append(todoList);

  if (Array.isArray(project.todos)) {
    project.todos.forEach((todo) => {
      const todoItem = document.createElement('li');
      todoItem.setAttribute('class', 'todo-item');
      todoItem.dataset.priority = todo.priority;
      const todoItemCheckbox = document.createElement('input');
      todoItemCheckbox.setAttribute('class', 'todo-item-checkbox');
      todoItemCheckbox.type = 'checkbox';
      todoItemCheckbox.addEventListener('change', () => todo.toggleComplete());
      if (todo.complete) {
        todoItemCheckbox.checked = todo.complete;
      }
      todoItem.append(todoItemCheckbox);

      const todoItemSpan = document.createElement('span');
      todoItemSpan.setAttribute('class', 'todo-item-span')
      todoItemSpan.addEventListener('click', (event) => {
        if (event) event.preventDefault();

        navigation('todo', { project, todo });

        return false;
      });
      todoItemSpan.innerHTML = todo.title;
      todoItem.append(todoItemSpan);

      const todoItemDeleteBtn = document.createElement('button');
      todoItemDeleteBtn.setAttribute('class', 'btn delete-btn todo-item-delete-btn');
      todoItemDeleteBtn.innerHTML = 'DELETE';
      todoItemDeleteBtn.addEventListener('click', () => {
        deleteTodo(project, todo);
        navigation('project', project);
      });
      
      todoItem.append(todoItemDeleteBtn)

      todoList.append(todoItem);
    });
  }


  // Add new item to todo list
  const emptyTodoItem = document.createElement('li');
  emptyTodoItem.setAttribute('class', 'todo-item add-new-item');
  emptyTodoItem.innerHTML = 'Add item';
  emptyTodoItem.addEventListener('click', () => navigation('todo', { project }));
  todoList.append(emptyTodoItem);


  return projectContainer;
};

export default projectPage;
