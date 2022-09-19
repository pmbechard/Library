export function getFooter() {
  const container = document.createElement('footer');
  document.appendChild(container);

  const footerText = document.createElement('small');
  footerText.innerHTML = 'Peyton Bechard &copy; 2022';
  container.appendChild(footerText);
}
