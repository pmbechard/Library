import downArrowIcon from '../../images/down-arrow.svg';

export function getBookList(sectionContainer) {
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
  titleHeading.textContent = 'Title';
  trow.appendChild(titleHeading);

  const titleSortImg = document.createElement('img');
  titleSortImg.src = downArrowIcon;
  titleSortImg.id = 'title-sort';
  titleHeading.appendChild(titleSortImg);

  const authorHeading = document.createElement('th');
  authorHeading.textContent = 'Author';
  trow.appendChild(authorHeading);

  const authorSortImg = document.createElement('img');
  authorSortImg.src = downArrowIcon;
  authorSortImg.id = 'author-sort';
  authorHeading.appendChild(authorSortImg);

  const yearHeading = document.createElement('th');
  yearHeading.textContent = 'Year';
  trow.appendChild(yearHeading);

  const yearSortImg = document.createElement('img');
  yearSortImg.src = downArrowIcon;
  yearSortImg.id = 'year-sort';
  yearHeading.appendChild(yearSortImg);

  const pubHeading = document.createElement('th');
  pubHeading.textContent = 'Publisher';
  trow.appendChild(pubHeading);

  const pubSortImg = document.createElement('img');
  pubSortImg.src = downArrowIcon;
  pubSortImg.id = 'publisher-sort';
  pubHeading.appendChild(pubSortImg);

  const stockHeading = document.createElement('th');
  stockHeading.textContent = 'In Stock / Total';
  trow.appendChild(stockHeading);

  const stockSortImg = document.createElement('img');
  stockSortImg.src = downArrowIcon;
  stockSortImg.id = 'inStock-sort';
  stockHeading.appendChild(stockSortImg);

  const moreInfoHeading = document.createElement('th');
  moreInfoHeading.textContent = 'More Info';
  trow.appendChild(moreInfoHeading);

  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
}
