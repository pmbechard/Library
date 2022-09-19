import downArrowIcon from '../../images/down-arrow.svg';

export function getBookList() {
  const container = document.createElement('div');
  container.classList.add('books-list');
  sectionContainer.appendChild(container);

  const table = document.createElement('table');
  table.classList.add('books-table');
  container.appendChild(table);

  const thead = document.createElement('thead');
  table.appendChild(thead);

  const trow = document.createElement('tr');
  thead.appendChild(trow);

  const titleHeading = document.createElement('th');
  trow.appendChild(titleHeading);
  const titleSortImg = document.createElement('img');
  titleSortImg.src = downArrowIcon;
  titleSortImg.id = 'title-sort';
  titleHeading.textContent = 'Title';

  const authorHeading = document.createElement('th');
  trow.appendChild(authorHeading);
  const authorSortImg = document.createElement('img');
  authorSortImg.src = downArrowIcon;
  authorSortImg.id = 'author-sort';
  authorHeading.textContent = 'Author';

  const yearHeading = document.createElement('th');
  trow.appendChild(yearHeading);
  const yearSortImg = document.createElement('img');
  yearSortImg.src = downArrowIcon;
  yearSortImg.id = 'year-sort';
  yearHeading.textContent = 'Year';

  const pubHeading = document.createElement('th');
  trow.appendChild(pubHeading);
  const pubSortImg = document.createElement('img');
  pubSortImg.src = downArrowIcon;
  pubSortImg.id = 'publisher-sort';
  pubHeading.textContent = 'Publisher';

  const stockHeading = document.createElement('th');
  trow.appendChild(stockHeading);
  const stockSortImg = document.createElement('img');
  stockSortImg.src = downArrowIcon;
  stockSortImg.id = 'inStock-sort';
  stockHeading.textContent = 'In Stock / Total';

  const moreInfoHeading = document.createElement('th');
  trow.appendChild(moreInfoHeading);
  moreInfoHeading.textContent = 'More Info';

  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
}
