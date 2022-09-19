// TABLE SORTING BUTTONS
// SORT BY TITLE
const titleSort = document.getElementById('title-sort');
let sortedByTitleAscending = false;
titleSort.addEventListener('click', () => {
  if (!sortedByTitleAscending) {
    const booksTitleAscending = myLib.inventory.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA > titleB) {
        return 1;
      } else if (titleB > titleA) {
        return -1;
      } else {
        return 0;
      }
    });
    myLib.updateTable(booksTitleAscending);
    sortedByTitleAscending = true;
    titleSort.setAttribute(
      'src',
      'images/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg'
    );
  } else {
    const booksTitleDescending = myLib.inventory.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) {
        return 1;
      } else if (titleB < titleA) {
        return -1;
      } else {
        return 0;
      }
    });
    myLib.updateTable(booksTitleDescending);
    sortedByTitleAscending = false;
    titleSort.setAttribute(
      'src',
      'images/arrow_drop_up_FILL0_wght400_GRAD0_opsz48.svg'
    );
  }
});

// SORT BY AUTHOR
const authorSort = document.getElementById('author-sort');
let sortedByAuthorAscending = false;
authorSort.addEventListener('click', () => {
  if (!sortedByAuthorAscending) {
    const booksAuthorAscending = myLib.inventory.sort((a, b) => {
      const authorA = a.author.toLowerCase();
      const authorB = b.author.toLowerCase();
      if (authorA > authorB) {
        return 1;
      } else if (authorB > authorA) {
        return -1;
      } else {
        return 0;
      }
    });
    myLib.updateTable(booksAuthorAscending);
    sortedByAuthorAscending = true;
    authorSort.setAttribute(
      'src',
      'images/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg'
    );
  } else {
    const booksAuthorDescending = myLib.inventory.sort((a, b) => {
      const authorA = a.author.toLowerCase();
      const authorB = b.author.toLowerCase();
      if (authorA < authorB) {
        return 1;
      } else if (authorB < authorA) {
        return -1;
      } else {
        return 0;
      }
    });
    myLib.updateTable(booksAuthorDescending);
    sortedByAuthorAscending = false;
    authorSort.setAttribute(
      'src',
      'images/arrow_drop_up_FILL0_wght400_GRAD0_opsz48.svg'
    );
  }
});

// SORT BY YEAR
const yearSort = document.getElementById('year-sort');
let sortedByYearAscending = false;
yearSort.addEventListener('click', () => {
  if (!sortedByYearAscending) {
    const booksYearAscending = myLib.inventory.sort((a, b) => {
      const yearA = a.year.toLowerCase();
      const yearB = b.year.toLowerCase();
      if (yearA > yearB) {
        return 1;
      } else if (yearB > yearA) {
        return -1;
      } else {
        return 0;
      }
    });
    myLib.updateTable(booksYearAscending);
    sortedByYearAscending = true;
    yearSort.setAttribute(
      'src',
      'images/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg'
    );
  } else {
    const booksYearDescending = myLib.inventory.sort((a, b) => {
      const yearA = a.year.toLowerCase();
      const yearB = b.year.toLowerCase();
      if (yearA < yearB) {
        return 1;
      } else if (yearB < yearA) {
        return -1;
      } else {
        return 0;
      }
    });
    myLib.updateTable(booksYearDescending);
    sortedByYearAscending = false;
    yearSort.setAttribute(
      'src',
      'images/arrow_drop_up_FILL0_wght400_GRAD0_opsz48.svg'
    );
  }
});

// SORT BY YEAR
const pubSort = document.getElementById('publisher-sort');
let sortedByPubAscending = false;
pubSort.addEventListener('click', () => {
  if (!sortedByPubAscending) {
    const booksPubAscending = myLib.inventory.sort((a, b) => {
      const pubA = a.publisher.toLowerCase();
      const pubB = b.publisher.toLowerCase();
      if (pubA > pubB) {
        return 1;
      } else if (pubB > pubA) {
        return -1;
      } else {
        return 0;
      }
    });
    myLib.updateTable(booksPubAscending);
    sortedByPubAscending = true;
    pubSort.setAttribute(
      'src',
      'images/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg'
    );
  } else {
    const booksPubDescending = myLib.inventory.sort((a, b) => {
      const pubA = a.publisher.toLowerCase();
      const pubB = b.publisher.toLowerCase();
      if (pubA < pubB) {
        return 1;
      } else if (pubB < pubA) {
        return -1;
      } else {
        return 0;
      }
    });
    myLib.updateTable(booksPubDescending);
    sortedByPubAscending = false;
    pubSort.setAttribute(
      'src',
      'images/arrow_drop_up_FILL0_wght400_GRAD0_opsz48.svg'
    );
  }
});

// SORT BY IN-STOCK
const stockSort = document.getElementById('inStock-sort');
let sortedByStockAscending = false;
stockSort.addEventListener('click', () => {
  if (!sortedByStockAscending) {
    const booksStockAscending = myLib.inventory.sort((a, b) => {
      const stockA = Number.parseInt(a.numInStock);
      const stockB = Number.parseInt(b.numInStock);
      return stockA - stockB;
    });
    myLib.updateTable(booksStockAscending);
    sortedByStockAscending = true;
    stockSort.setAttribute(
      'src',
      'images/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg'
    );
  } else {
    const booksStockDescending = myLib.inventory.sort((a, b) => {
      const stockA = Number.parseInt(a.numInStock);
      const stockB = Number.parseInt(b.numInStock);
      return stockB - stockA;
    });
    myLib.updateTable(booksStockDescending);
    sortedByStockAscending = false;
    stockSort.setAttribute(
      'src',
      'images/arrow_drop_up_FILL0_wght400_GRAD0_opsz48.svg'
    );
  }
});
