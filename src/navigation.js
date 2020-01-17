import home from './pages/home';
import project from './pages/project';
import todo from './pages/todo';

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
      return home();
    }
    case 'project': {
      return project(data);
    }
    case 'todo': {
      return todo(data);
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

export default navigation;
