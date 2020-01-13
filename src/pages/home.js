function createHomePage() {
  const mainContent = document.getElementById('content');

  const defaultProject = document.createElement('div');
  defaultProject.setAttribute('class', 'home-content-section square defaultProject');
  const defaultProjectContent = document.createElement('div');
  defaultProjectContent.innerHTML = 'YOUR FIRST PROJECT';
  defaultProject.append(defaultProjectContent);
  mainContent.append(defaultProject);
  

  // Display other projects

  // Box to add project / item
  const addContent = document.createElement('div');
  addContent.setAttribute('class', 'addContent');
  mainContent.append(addContent);

  // Add project
  const addProject = document.createElement('div');
  addProject.setAttribute('class', 'square addProject');
  addContent.append(addProject);

  const addProjectButton = document.createElement('button');
  addProjectButton.setAttribute('class', 'home-content-section btn addProjectButton');
  addProjectButton.innerHTML = 'NEW PROJECT';
  addProject.append(addProjectButton);


  // Add item
  const addItem = document.createElement('div');
  addItem.setAttribute('class', 'square addItem');
  addContent.append(addItem);
  
  const addItemButton = document.createElement('button');
  addItemButton.setAttribute('class', 'home-content-section btn addItemButton');
  addItemButton.innerHTML = 'NEW TODO LIST\'S ITEM';
  addItem.append(addItemButton);

  // return mainContent;
};

export default createHomePage;
