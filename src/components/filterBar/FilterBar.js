import searchIcon from '../../img/search.svg';

export function getFilterBar(sectionContainer) {
  const container = document.createElement('div');
  container.classList.add('filters');
  sectionContainer.appendChild(container);

  const searchArea = document.createElement('div');
  searchArea.classList.add('search-area');
  container.appendChild(searchArea);

  const searchLabel = document.createElement('label');
  searchLabel.for = 'book-search';
  searchArea.appendChild(searchLabel);

  const searchImg = document.createElement('img');
  searchImg.src = searchIcon;
  searchLabel.appendChild(searchImg);

  const searchInput = document.createElement('input');
  searchInput.type = 'search';
  searchInput.name = 'book-search';
  searchInput.id = 'book-search';
  searchArea.appendChild(searchInput);

  const buttonsArea = document.createElement('div');
  buttonsArea.classList.add('add-remove-buttons');
  container.appendChild(buttonsArea);

  const checkoutButton = document.createElement('button');
  checkoutButton.id = 'checkout-book-button';
  checkoutButton.textContent = 'Check Out';
  buttonsArea.appendChild(checkoutButton);

  const returnButton = document.createElement('button');
  returnButton.id = 'return-book-button';
  returnButton.textContent = 'Return';
  buttonsArea.appendChild(returnButton);

  const addNewButton = document.createElement('button');
  addNewButton.id = 'add-new-book-button';
  addNewButton.textContent = 'Add New';
  buttonsArea.appendChild(addNewButton);

  const addExistingButton = document.createElement('button');
  addExistingButton.id = 'add-existing-book-button';
  addExistingButton.textContent = 'Add Existing';
  buttonsArea.appendChild(addExistingButton);

  const removeButton = document.createElement('button');
  removeButton.id = 'remove-book-button';
  removeButton.textContent = 'Remove';
  buttonsArea.appendChild(removeButton);
}
