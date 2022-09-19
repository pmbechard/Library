export class Library {
  constructor(libraryName) {
    this.libraryName = libraryName;
    this.inventory = [];
  }

  async addToInventory(book) {
    this.inventory.push(book);
    this.updateTable();
  }

  removeFromInventory(book) {
    this.inventory.splice(this.inventory.indexOf(book), 1);
    this.updateTable();
  }

  getAllBooks() {
    return this.inventory;
  }

  updateTable(bookList = this.inventory) {
    // Updating List Animation goes here...
    const uniqueBooks = [...new Set(bookList)];
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    for (let i = 0; i < uniqueBooks.length; i++) {
      if (
        uniqueBooks[i].numInStock === 0 &&
        uniqueBooks[i].currentlyHeldBy.length === 0
      ) {
        continue;
      }
      const newRow = tbody.appendChild(document.createElement('tr'));
      for (let key in uniqueBooks[i]) {
        if (key !== 'belongsTo') {
          if (key === 'title') {
            const tableData = newRow.appendChild(document.createElement('td'));
            tableData.textContent = uniqueBooks[i][key];
          } else if (key === 'currentlyHeldBy') {
            const tableData = newRow.appendChild(document.createElement('td'));
            tableData.innerHTML =
              '<img src="images/info_black_24dp.svg" alt="More info"></img>';
          } else if (key === 'numInStock') {
            const tableData = newRow.appendChild(document.createElement('td'));
            tableData.textContent = `${
              Number.parseInt(uniqueBooks[i][key]) -
              uniqueBooks[i]['currentlyHeldBy'].length
            } of ${Number.parseInt(uniqueBooks[i][key])}`;
          } else {
            const tableData = newRow.appendChild(document.createElement('td'));
            tableData.textContent = uniqueBooks[i][key];
          }
        }
      }
    }
    this.inventory = this.inventory.filter(
      (book) => book.numInStock + book.currentlyHeldBy.length > 0
    );
    // MORE INFO MODAL
    const moreInfoButton = document.querySelectorAll('td > img');
    const moreInfoBookModal = document.getElementById('moreinfo-book-modal');
    const closeMoreInfoBookModal = document.querySelector(
      '#moreinfo-book-modal .close'
    );
    const nameList = document.getElementById('held-by');
    let moreInfoBook;

    moreInfoButton.forEach((button) =>
      button.addEventListener('click', () => {
        nameList.innerHTML = '';
        const bookTitle =
          button.parentElement.parentElement.firstChild.textContent;
        myLib.inventory.forEach((book) => {
          if (book.title === bookTitle) {
            moreInfoBook = book;
          }
        });
        moreInfoBook.currentlyHeldBy.forEach((person) => {
          const nameListElement = document.createElement('li');
          nameList.appendChild(nameListElement);
          nameListElement.textContent = person;
        });
        moreInfoBookModal.style.display = 'block';
      })
    );

    closeMoreInfoBookModal.onclick = function () {
      moreInfoBookModal.style.display = 'none';
    };

    window.onclick = function (event) {
      if (event.target === moreInfoBookModal) {
        moreInfoBookModal.style.display = 'none';
      }
    };
  }
}
