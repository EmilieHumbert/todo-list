import navigation from '../navigation';
import { upsertTodo, deleteTodo, canDeleteTodo } from '../todos';
import Todo from '../factories/todo';
import { getProjects } from '../projects';



function getFieldValue (elementId) {
  const field = document.getElementById(elementId);
  return field.value;
}

function todoPage({ project, todo = new Todo() } = {}) {
  const projects = getProjects();

  // Main container
  const todoContainer = document.createElement('form');
  todoContainer.setAttribute('class', 'main-content todo-container');

  todoContainer.addEventListener('submit', (event) => {
    if (event) event.preventDefault();

    const title = getFieldValue('todo-title-input');
    const description = getFieldValue('todo-description-input');
    const date = getFieldValue('deadline-date-input');
    const priority = getFieldValue('todo-priority-select');
    const complete = getFieldValue('complete-select') === 'yes';

    if (!project) {
      const projectIndex = getFieldValue('project-select');
      project = projects[projectIndex];
    }

    const data = { title, description, date, priority, complete };
    upsertTodo(project, todo, data);

    return false;
  });


  // Container for back and delete btn
  const backAndDeleteBtnSection = document.createElement('div');
  backAndDeleteBtnSection.setAttribute('class', 'back-and-delete-section');
  todoContainer.append(backAndDeleteBtnSection);


  // Back to project btn
  const backBtnSection = document.createElement('div');
  backBtnSection.setAttribute('class', 'back-todo-btn-section');
  backAndDeleteBtnSection.append(backBtnSection);

  const backBtn = document.createElement('img');
  backBtn.setAttribute('id', 'back-btn');
  backBtn.setAttribute('class', 'back-btn');
  backBtn.setAttribute('alt', 'back button');
  backBtn.src = 'images/back-button.svg';
  backBtn.addEventListener('click', (event) => {
    if (project) {
      navigation('project', project);
    } else {
      navigation('home');
    }

    return false;
  });

  backBtnSection.append(backBtn);


  // Delete btn
  const deleteTodoBtnSection = document.createElement('div');
  deleteTodoBtnSection.setAttribute('class', 'delete-todo-btn-section');
  backAndDeleteBtnSection.append(deleteTodoBtnSection);

  const deleteTodoBtn = document.createElement('button');
  deleteTodoBtn.setAttribute('id', 'delete-todo-btn');
  deleteTodoBtn.setAttribute('class', 'btn delete-btn');
  deleteTodoBtn.innerHTML = 'DELETE';
  if (project && canDeleteTodo(project, todo)) {
    deleteTodoBtn.addEventListener('click', (event) => {
      deleteTodo(project, todo);
      navigation('project', project);
    });
  } else {
    deleteTodoBtn.setAttribute('disabled', true);
  };
  deleteTodoBtnSection.append(deleteTodoBtn);


  // Pick the project
  if (!project) {
    const pickProjectSection = document.createElement('div');
    pickProjectSection.setAttribute('id', 'pick-project');
    pickProjectSection.setAttribute('class', 'pick-project');
    todoContainer.append(pickProjectSection);

    const pickProjectTitle = document.createElement('h3');
    pickProjectTitle.setAttribute('class', 'title pick-project-title');
    pickProjectTitle.innerHTML = 'PICK YOUR PROJECT';
    pickProjectSection.append(pickProjectTitle);

    const projectSelect = document.createElement('select');
    projectSelect.setAttribute('id', 'project-select');
    projectSelect.setAttribute('class', 'drop-btn project-select');
    projects.forEach((project, index) => {
      const projectOption = document.createElement('option');
      projectOption.setAttribute('value', index);
      projectOption.innerHTML = project.title;
      projectSelect.appendChild(projectOption);
    });
    pickProjectSection.append(projectSelect);
  }


  // Todo title
  const todoTitleSection = document.createElement('div');
  todoTitleSection.setAttribute('id', 'todo-title-section');
  todoContainer.append(todoTitleSection);

  const todoTitle = document.createElement('h3');
  todoTitle.setAttribute('class', 'title todo-title');
  todoTitle.innerHTML = 'TODO\'S TITLE';
  todoTitleSection.append(todoTitle);

  const todoTitleInput = document.createElement('input');
  todoTitleInput.setAttribute('type', 'text');
  todoTitleInput.setAttribute('id', 'todo-title-input');
  todoTitleInput.setAttribute('class', 'input title-input');
  if (todo.title) {
    todoTitleInput.value = todo.title;
  }
  todoTitleSection.append(todoTitleInput);


  // Todo description
  const todoDescriptionSection = document.createElement('div');
  todoDescriptionSection.setAttribute('class', 'todo-description-section');
  todoContainer.append(todoDescriptionSection);

  const todoDescriptionTitle = document.createElement('h3');
  todoDescriptionTitle.setAttribute('class', 'title todo-description-title');
  todoDescriptionTitle.innerHTML = 'TODO\'S DESCRIPTION';
  todoDescriptionSection.append(todoDescriptionTitle);

  const todoDescriptionInput = document.createElement('textarea');
  todoDescriptionInput.setAttribute('id', 'todo-description-input');
  todoDescriptionInput.setAttribute('class', 'input description-input');
  todoDescriptionInput.setAttribute('row', '4');
  if (todo.description) {
    todoDescriptionInput.value = todo.description;
  }
  todoDescriptionSection.append(todoDescriptionInput);

 
  // Container for todo's details
  const todoDetailSection = document.createElement('div');
  todoDetailSection.setAttribute('class', 'todo-detail-section');
  todoContainer.append(todoDetailSection);


  // Todo due date
  const deadlineDateSection = document.createElement('div');
  deadlineDateSection.setAttribute('class', 'deadline-date-section');
  todoDetailSection.append(deadlineDateSection);

  const deadlineDateTitle = document.createElement('h3');
  deadlineDateTitle.setAttribute('class', 'title deadline-date-title');
  deadlineDateTitle.innerHTML = 'DATE';
  deadlineDateSection.append(deadlineDateTitle);

  const deadlineDateInput = document.createElement('input');
  deadlineDateInput.setAttribute('id', 'deadline-date-input');
  deadlineDateInput.setAttribute('class', 'drop-btn deadline-date-input');
  deadlineDateInput.setAttribute('type', 'date');
  if (todo.date) {
    deadlineDateInput.setAttribute('value', todo.date);
  }
  deadlineDateSection.append(deadlineDateInput);


  // Todo priority
  const prioritySection = document.createElement('div');
  prioritySection.setAttribute('class', 'priority-section');
  todoDetailSection.append(prioritySection);

  const priorityTitle = document.createElement('h3');
  priorityTitle.setAttribute('class', 'title priority-title');
  priorityTitle.innerHTML = 'PRIORITY LEVEL';
  prioritySection.append(priorityTitle);

  console.log(todo);
  const selectedPriority = todo.priority || 'medium';
  const prioritySelect = document.createElement('select');
  prioritySelect.setAttribute('id', 'todo-priority-select');
  prioritySelect.setAttribute('class', 'drop-btn todo-priority-select');
  [
    'High',
    'Medium',
    'Low'
  ].forEach((priority) => {
    const priorityOption = document.createElement('option');
    priorityOption.setAttribute('value', priority.toLowerCase());
    priorityOption.innerHTML = priority;
    if (priority.toLowerCase() === selectedPriority) {
      priorityOption.setAttribute('selected', '');
    }
    prioritySelect.appendChild(priorityOption);
  });
  prioritySection.append(prioritySelect);


  // Completed?
  const completeSection = document.createElement('div');
  completeSection.setAttribute('id', 'complete-section');
  todoDetailSection.append(completeSection);

  const completeTitle = document.createElement('h3');
  completeTitle.setAttribute('id', 'complete-title');
  completeTitle.setAttribute('class', 'title complete-title');
  completeTitle.innerHTML = 'COMPLETED?';
  completeSection.append(completeTitle);

  const selectedComplete = todo.complete || 'no';
  const completeSelect = document.createElement('select');
  completeSelect.setAttribute('id', 'complete-select')
  completeSelect.setAttribute('class', 'drop-btn complete-label');
  [
    'Yes',
    'No'
  ].forEach((complete) => {
    const completeOption = document.createElement('option');
    completeOption.setAttribute('value', complete.toLowerCase());
    completeOption.innerHTML = complete;
    if (complete.toLowerCase() === selectedComplete) {
      completeOption.setAttribute('selected', '');
    }
    completeSelect.appendChild(completeOption);
  });
  completeSection.append(completeSelect);


  // Save button
  const saveTodoBtnSection = document.createElement('div');
  saveTodoBtnSection.setAttribute('class', 'save-todo-btn-section');
  todoDetailSection.append(saveTodoBtnSection);

  const saveTodoBtn = document.createElement('button');
  saveTodoBtn.setAttribute('id', 'save-btn');
  saveTodoBtn.setAttribute('class', 'todo-save-btn');
  saveTodoBtn.setAttribute('type', 'submit');
  saveTodoBtn.innerHTML = 'SAVE';
  saveTodoBtnSection.append(saveTodoBtn);


  return todoContainer;
};

export default todoPage;
