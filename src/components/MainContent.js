import { getBookList } from './bookList/BookList';
import { getFilterBar } from './filterBar/FilterBar';

export function getMainContent() {
  const container = document.createElement('section');
  container.classList.add('main-content');
  document.body.appendChild(container);

  getFilterBar(container);
  getBookList(container);
}
