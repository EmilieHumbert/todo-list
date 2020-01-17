/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/factories/project.js":
/*!**********************************!*\
  !*** ./src/factories/project.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Project);


/***/ }),

/***/ "./src/factories/todo.js":
/*!*******************************!*\
  !*** ./src/factories/todo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Todo);


/***/ }),

/***/ "./src/head.js":
/*!*********************!*\
  !*** ./src/head.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function head() {
  const metaViewport = document.createElement('meta');
  metaViewport.setAttribute('chartset', 'UTF-8');
  metaViewport.setAttribute('name', 'viewport');
  metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
  document.head.append(metaViewport);

  const linkStyle = document.createElement('link');
  linkStyle.setAttribute('rel', 'stylesheet');
  linkStyle.setAttribute('href', 'style.css');
  document.head.append(linkStyle);

  const linkGoogleFont = document.createElement('link');
  linkGoogleFont.setAttribute('rel', 'stylesheet');
  linkGoogleFont.setAttribute('href', 'https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
  document.head.append(linkGoogleFont);

  const title = document.createElement('title');
  title.innerHTML = 'todo list';
  document.head.append(title);
}

/* harmony default export */ __webpack_exports__["default"] = (head);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head */ "./src/head.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ "./src/navigation.js");



// Setup HTML <head>
Object(_head__WEBPACK_IMPORTED_MODULE_0__["default"])();

// Load default page
Object(_navigation__WEBPACK_IMPORTED_MODULE_1__["default"])('home');


/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/project */ "./src/pages/project.js");
/* harmony import */ var _pages_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/todo */ "./src/pages/todo.js");




function clearPage() {
  const currentPageContent = document.querySelector('.main-content');

  if (currentPageContent) {
    currentPageContent.remove();
  }
}

function getPageContent(page, data) {
  switch (page) {
    default:
    case 'home': {
      return Object(_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
    case 'project': {
      return Object(_pages_project__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
    }
    case 'todo': {
      return Object(_pages_todo__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
    }
  }
}

function navigation(page, data) {
  // Load content wrapper
  const content = document.getElementById('content');
  // Load page HTML
  const newPageContent = getPageContent(page, data);

  clearPage();
  content.appendChild(newPageContent);
}

/* harmony default export */ __webpack_exports__["default"] = (navigation);


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation */ "./src/navigation.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects */ "./src/projects.js");



function createHomePage() {
  // home container
  const homeContent = document.createElement('div');
  homeContent.setAttribute('class', 'main-content');

  // Display other projects
  const projects = Object(_projects__WEBPACK_IMPORTED_MODULE_1__["getProjects"])();

  // Loop and add to page
  projects.forEach((project) => {
    const projectEl = document.createElement('div');
    projectEl.setAttribute('class', 'home-content-section square projects-list-item');
    homeContent.append(projectEl);

    const projectContentEl = document.createElement('div');
    projectContentEl.innerHTML = project.title;
    projectEl.append(projectContentEl);

    projectEl.addEventListener('click', () => Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])('project', project));
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
  addProjectButton.addEventListener('click', () => Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])('project'));
  addProject.append(addProjectButton);


  // Add item
  const addItem = document.createElement('div');
  addItem.setAttribute('class', 'square add-item');
  addContent.append(addItem);

  const addItemButton = document.createElement('button');
  addItemButton.setAttribute('class', 'select-btn home-content-section add-item-button');
  addItemButton.innerHTML = 'Add new todo list\'s item';
  addItemButton.addEventListener('click', () => Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])('todo'));
  addItem.append(addItemButton);


  return homeContent;
};

/* harmony default export */ __webpack_exports__["default"] = (createHomePage);


/***/ }),

/***/ "./src/pages/project.js":
/*!******************************!*\
  !*** ./src/pages/project.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation */ "./src/navigation.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects */ "./src/projects.js");
/* harmony import */ var _factories_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/project */ "./src/factories/project.js");





function getFieldValue(elementId) {
  const field = document.getElementById(elementId);
  return field.value;
}

function projectPage(project = new _factories_project__WEBPACK_IMPORTED_MODULE_2__["default"]()) {
  // Project content
  const projectContainer = document.createElement('form');
  projectContainer.setAttribute('class', 'main-content project-container');
  projectContainer.addEventListener('submit', (event) => {
    if (event) event.preventDefault();

    const title = getFieldValue('project-title-input');
    const description = getFieldValue('project-description-input');
    const data = { title, description };

    Object(_projects__WEBPACK_IMPORTED_MODULE_1__["upsertProject"])(project, data);

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
  backBtn.addEventListener('click', () => Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])('home'));
  backBtnSection.append(backBtn);

  
  // Delete button
  const deleteProjectBtnSection = document.createElement('div');
  deleteProjectBtnSection.setAttribute('class', 'delete-project-btn-section');
  backAndDeleteBtnSection.append(deleteProjectBtnSection);

  const deleteProjectBtn = document.createElement('button');
  deleteProjectBtn.setAttribute('id', 'delete-project-btn');
  deleteProjectBtn.setAttribute('class', 'btn delete-btn');
  deleteProjectBtn.innerHTML = 'DELETE';
  if (Object(_projects__WEBPACK_IMPORTED_MODULE_1__["canDeleteProject"])(project)) {
    deleteProjectBtn.addEventListener('click', () => {
      Object(_projects__WEBPACK_IMPORTED_MODULE_1__["deleteProject"])(project);
      Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])('home');
    });
  } else {
    deleteProjectBtn.setAttribute('disabled', true);
  }
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
      todoItem.setAttribute('class', 'li')

      const todoItemCheckbox = document.createElement('input');
      todoItemCheckbox.setAttribute('class', 'todo-item-checkbox');
      todoItemCheckbox.type = 'checkbox';
      todoItemCheckbox.addEventListener('change', () => todo.toggleComplete());
      if (todo.complete) {
        todoItemCheckbox.checked = todo.complete;
      }
      todoItem.append(todoItemCheckbox);

      const todoItemSpan = document.createElement('span');
      todoItemSpan.addEventListener('click', (event) => {
        if (event) event.preventDefault();

        Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])('todo', { project, todo });

        return false;
      });
      todoItemSpan.innerHTML = todo.title;
      todoItem.append(todoItemSpan);

      todoList.append(todoItem);
    });
  }


  // Add new item to todo list
  const emptyTodoItem = document.createElement('li');
  emptyTodoItem.setAttribute('class', 'li add-new-item');
  emptyTodoItem.innerHTML = 'Add item';
  emptyTodoItem.addEventListener('click', () => Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])('todo', { project }));
  todoList.append(emptyTodoItem);


  return projectContainer;
};

/* harmony default export */ __webpack_exports__["default"] = (projectPage);


/***/ }),

/***/ "./src/pages/todo.js":
/*!***************************!*\
  !*** ./src/pages/todo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation */ "./src/navigation.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todos */ "./src/todos.js");
/* harmony import */ var _factories_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/project */ "./src/factories/project.js");
/* harmony import */ var _factories_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factories/todo */ "./src/factories/todo.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects */ "./src/projects.js");






function isCheckbox (field) {
  return field.getAttribute('type') === 'checkbox';
}

function getFieldValue (elementId) {
  const field = document.getElementById(elementId);
  if (isCheckbox(field)) {
    return field.checked;
  }
  return field.value;
}

function todoPage({ project, todo = new _factories_todo__WEBPACK_IMPORTED_MODULE_3__["default"]() } = {}) {
  const projects = Object(_projects__WEBPACK_IMPORTED_MODULE_4__["getProjects"])();

  // Main container
  const todoContainer = document.createElement('form');
  todoContainer.setAttribute('class', 'main-content todo-container');

  todoContainer.addEventListener('submit', (event) => {
    if (event) event.preventDefault();

    const title = getFieldValue('todo-title-input');
    const description = getFieldValue('todo-description-input');
    const date = getFieldValue('deadline-date-input');
    const priority = getFieldValue('todo-priority-select');
    const complete = getFieldValue('complete-checkbox');

    if (!project) {
      const projectIndex = getFieldValue('project-select');
      project = projects[projectIndex];
    }

    const data = { title, description, date, priority, complete };
    Object(_todos__WEBPACK_IMPORTED_MODULE_1__["upsertTodo"])(project, todo, data);

    return false;
  });


  // Back to project btn
  const backBtnSection = document.createElement('div');
  backBtnSection.setAttribute('class', 'back-btn-section');
  todoContainer.append(backBtnSection);

  const backBtn = document.createElement('img');
  backBtn.setAttribute('id', 'back-btn');
  backBtn.setAttribute('class', 'back-btn');
  backBtn.setAttribute('alt', 'back button');
  backBtn.src = 'images/back-button.svg';
  backBtn.addEventListener('click', (event) => {
    if (event) event.preventDefault();

    if (project) {
      Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])('project', project);
    } else {
      Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])('home');
    }

    return false;
  });

  backBtnSection.append(backBtn);


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
    projectSelect.setAttribute('class', 'drop-btn');
    projectSelect.setAttribute('id', 'project-select');
    projectSelect.setAttribute('class', 'project-select');
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

 
  // Todo due date
  const deadlineDateSection = document.createElement('div');
  deadlineDateSection.setAttribute('class', 'deadline-date-section');
  todoContainer.append(deadlineDateSection);

  const deadlineDateTitle = document.createElement('h3');
  deadlineDateTitle.setAttribute('class', 'title deadline-date-title');
  deadlineDateTitle.innerHTML = 'DATE';
  deadlineDateSection.append(deadlineDateTitle);

  const deadlineDateInput = document.createElement('input');
  deadlineDateInput.setAttribute('id', 'deadline-date-input');
  deadlineDateInput.setAttribute('class', 'deadline-date-input');
  deadlineDateInput.setAttribute('type', 'date');
  if (todo.date) {
    deadlineDateInput.setAttribute('value', todo.date);
  }
  deadlineDateSection.append(deadlineDateInput);


  // Todo priority
  const prioritySection = document.createElement('div');
  prioritySection.setAttribute('class', 'priority-section');
  todoContainer.append(prioritySection);

  const priorityTitle = document.createElement('h3');
  priorityTitle.setAttribute('class', 'title priority-title');
  priorityTitle.innerHTML = 'PRIORITY LEVEL';
  prioritySection.append(priorityTitle);

  console.log(todo);
  const selectedPriority = todo.priority || 'medium';
  const prioritySelect = document.createElement('select');
  prioritySelect.setAttribute('id', 'todo-priority-select');
  prioritySelect.setAttribute('class', 'drop-btn');
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


  // Todo completed?
  const completeSection = document.createElement('div');
  completeSection.setAttribute('id', 'complete-section');
  todoContainer.append(completeSection);

  const completeTitle = document.createElement('h3');
  completeTitle.setAttribute('id', 'complete-title');
  completeTitle.setAttribute('class', 'title complete-title');
  completeTitle.innerHTML = 'COMPLETED?';
  completeSection.append(completeTitle);

  const completeLabel = document.createElement('label');
  completeLabel.setAttribute('class', 'complete-label');
  completeSection.append(completeLabel);

  const completeCheckbox = document.createElement('input');
  completeCheckbox.setAttribute('id', 'complete-checkbox')
  completeCheckbox.type = 'checkbox';
  completeCheckbox.name = 'checkbox';
  if (todo.complete) {
    completeCheckbox.checked = todo.complete;
    Object(_todos__WEBPACK_IMPORTED_MODULE_1__["deleteTodo"])(todo);
  }
  completeLabel.append(completeCheckbox);

  const completeSpan = document.createElement('span');
  completeSpan.innerHTML = 'YES';
  completeLabel.append(completeSpan);


  // Save button
  const saveTodoBtnSection = document.createElement('div');
  saveTodoBtnSection.setAttribute('class', 'save-todo-btn-section');
  todoContainer.append(saveTodoBtnSection);

  const saveTodoBtn = document.createElement('button');
  saveTodoBtn.setAttribute('id', 'save-btn');
  saveTodoBtn.setAttribute('type', 'submit');
  saveTodoBtn.innerHTML = 'SAVE';
  saveTodoBtnSection.append(saveTodoBtn);


  return todoContainer;
};

/* harmony default export */ __webpack_exports__["default"] = (todoPage);


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/*! exports provided: upsertProject, getProjects, canDeleteProject, deleteProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upsertProject", function() { return upsertProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjects", function() { return getProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canDeleteProject", function() { return canDeleteProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProject", function() { return deleteProject; });
/* harmony import */ var _factories_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/project */ "./src/factories/project.js");
/* harmony import */ var _factories_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/todo */ "./src/factories/todo.js");



// Projects stored in memory
const projects = [
  // Create a default project
  new _factories_project__WEBPACK_IMPORTED_MODULE_0__["default"]('Default', 'Hello World!', [
    new _factories_todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Go shopping', 'Shopping list', '2020-01-20', 'high'),
    new _factories_todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Another thing', 'Not so important', '2020-01-21', 'low')
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




/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/*! exports provided: upsertTodo, getTodos, deleteTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upsertTodo", function() { return upsertTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodos", function() { return getTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTodo", function() { return deleteTodo; });
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

function deleteTodo(project, todo) {
  project.todos.splice(getTodoIndex(todo), 1);
}




/***/ })

/******/ });
//# sourceMappingURL=main.js.map