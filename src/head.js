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

export default head;
