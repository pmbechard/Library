import logo from '../images/logo.svg';

export function getHeader() {
  const container = document.createElement('header');
  container.classList.add('header');
  document.body.appendChild(container);

  const headerLogo = document.createElement('img');
  headerLogo.src = logo;
  container.appendChild(headerLogo);

  const title = document.createElement('h1');
  title.textContent = 'Online Library System';
  container.appendChild(title);
}
