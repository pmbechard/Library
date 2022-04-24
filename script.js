/*
Library System
by Peyton Bechard

Last Updated: 23 Apr 2022

To Do:
    - Add Return/Check out functionality
    - Set max limit on removable # / delete item when 0
    - Add More Info icon to see total copies, who checked out ...
    - Add ability to edit
    - Expand information to include ISBN, date registered, previous checkout list, etc.
    - Refactor repetition in table sorting methods

*/

class Library {
    constructor(libraryName) {
        this.libraryName = libraryName
        this.inventory = []
    }

    addToInventory(book) {
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

    updateTable( bookList = this.inventory ) {
        // Updating List Animation goes here...
        const uniqueBooks = [... new Set(bookList)];
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '';
        for (let i = 0; i < uniqueBooks.length; i++) {
            const newRow = tbody.appendChild(document.createElement('tr'));
            for (let key in uniqueBooks[i]) {
                if (key !== 'belongsTo') {
                    if (key === 'title') {
                        const tableData = newRow.appendChild(document.createElement('td'));
                        // tableData.innerHTML = '<img src="images/info_black_24dp.svg" alt="More info"></img>'
                        tableData.textContent = uniqueBooks[i][key];
                    } else if (key === 'currentlyHeldBy') {
                        const tableData = newRow.appendChild(document.createElement('td'));
                        tableData.innerHTML = '<img src="images/file_download_black_24dp.svg" alt="Return"><img src="images/logout_black_24dp.svg" alt="Check out">';            
                    } else if (key === 'numInStock') {
                        const tableData = newRow.appendChild(document.createElement('td'));
                        tableData.textContent = `${uniqueBooks[i][key]} of ${Number.parseInt(uniqueBooks[i][key]) + uniqueBooks[i]['currentlyHeldBy'].length}`;
                    } else {
                        const tableData = newRow.appendChild(document.createElement('td'));
                        tableData.textContent = uniqueBooks[i][key];
                    }
                }
            }
        }
    }
}

class Book {
    constructor(title, author, year, publisher, numInStock, belongsTo) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.publisher = publisher;
        this.numInStock = numInStock;
        this.currentlyHeldBy = []
        this.belongsTo = belongsTo;
        this.belongsTo.addToInventory(this);
    }

    toString() {
        return `${this.title} by ${this.name} (${this.publisher} ${this.year})\n\t${this.numInStock} in stock.`;
    }

    checkOut(name) {
        if (this.numInStock !== 0) {
            numInStock -= 1;
            this.currentlyHeldBy.push(name);
        }
    }

    checkIn(name) {
        numInStock += 1;
        this.currentlyHeldBy = this.currentlyHeldBy.splice(0, this.currentlyHeldBy.indexOf(name)) + this.currentlyHeldBy.splice(this.currentlyHeldBy.indexOf(name)+1);
    }
}


// Examples
const myLib = new Library('Allie\'s Home Library');
const book1 = new Book('Fluent Python', 'Luciano Ramalho', '2015', 'O\'Reilly', 3, myLib);
const book2 = new Book('American Psycho', 'Bret Easton Ellis', '1991', 'Random House', 1, myLib);


// SEARCH BAR
const searchBar = document.getElementById('book-search');
searchBar.addEventListener('keyup', () => {
    const uniqueBooks = [... new Set(myLib.inventory)];
    const matchingBooks = uniqueBooks.filter( (item) => {
        const search = searchBar.value.toLowerCase();
        return item.title.toLowerCase().includes(search) || item.author.toLowerCase().includes(search) || item.publisher.toLowerCase().includes(search) || item.year.includes(search);
    });
    myLib.updateTable(matchingBooks);
});


// TABLE SORTING BUTTONS
// SORT BY TITLE
const titleSort = document.getElementById('title-sort');
let sortedByTitleAscending = false;
titleSort.addEventListener('click', () => {
    if (!sortedByTitleAscending) {
        const booksTitleAscending = myLib.inventory.sort( (a, b) => {
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
        titleSort.setAttribute('src', 'images/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg');
    } else {
        const booksTitleDescending = myLib.inventory.sort( (a, b) => {
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
        titleSort.setAttribute('src', 'images/arrow_drop_up_FILL0_wght400_GRAD0_opsz48.svg');
    }
});

// SORT BY AUTHOR
const authorSort = document.getElementById('author-sort');
let sortedByAuthorAscending = false;
authorSort.addEventListener('click', () => {
    if (!sortedByAuthorAscending) {
        const booksAuthorAscending = myLib.inventory.sort( (a, b) => {
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
        authorSort.setAttribute('src', 'images/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg');
    } else {
        const booksAuthorDescending = myLib.inventory.sort( (a, b) => {
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
        authorSort.setAttribute('src', 'images/arrow_drop_up_FILL0_wght400_GRAD0_opsz48.svg');
    }
});

// SORT BY YEAR
const yearSort = document.getElementById('year-sort');
let sortedByYearAscending = false;
yearSort.addEventListener('click', () => {
    if (!sortedByYearAscending) {
        const booksYearAscending = myLib.inventory.sort( (a, b) => {
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
        yearSort.setAttribute('src', 'images/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg');
    } else {
        const booksYearDescending = myLib.inventory.sort( (a, b) => {
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
        yearSort.setAttribute('src', 'images/arrow_drop_up_FILL0_wght400_GRAD0_opsz48.svg');
    }
});

// SORT BY YEAR
const pubSort = document.getElementById('publisher-sort');
let sortedByPubAscending = false;
pubSort.addEventListener('click', () => {
    if (!sortedByPubAscending) {
        const booksPubAscending = myLib.inventory.sort( (a, b) => {
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
        pubSort.setAttribute('src', 'images/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg');
    } else {
        const booksPubDescending = myLib.inventory.sort( (a, b) => {
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
        pubSort.setAttribute('src', 'images/arrow_drop_up_FILL0_wght400_GRAD0_opsz48.svg');
    }
});

// SORT BY IN-STOCK
const stockSort = document.getElementById('inStock-sort');
let sortedByStockAscending = false;
stockSort.addEventListener('click', () => {
    if (!sortedByStockAscending) {
        const booksStockAscending = myLib.inventory.sort( (a, b) => {
            const stockA = Number.parseInt(a.numInStock);
            const stockB = Number.parseInt(b.numInStock);
            return stockA - stockB;
        });
        myLib.updateTable(booksStockAscending);
        sortedByStockAscending = true;
        stockSort.setAttribute('src', 'images/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg');
    } else {
        const booksStockDescending = myLib.inventory.sort( (a, b) => {
            const stockA = Number.parseInt(a.numInStock);
            const stockB = Number.parseInt(b.numInStock);
            return stockB - stockA;
        });
        myLib.updateTable(booksStockDescending);
        sortedByStockAscending = false;
        stockSort.setAttribute('src', 'images/arrow_drop_up_FILL0_wght400_GRAD0_opsz48.svg');
    }
});


// ADD NEW BOOK MODAL
const addNewBookModal = document.getElementById('add-new-book-modal');
const addNewBookButton = document.getElementById('add-new-book-button');
const closeNewBookModal = document.querySelector('#add-new-book-modal .close');

addNewBookButton.onclick = function() {
    const submitFormInputs = document.querySelectorAll('.modal input');
    submitFormInputs.forEach(input => {
        input.value = '';
    });
    addNewBookModal.style.display = 'block';
}

closeNewBookModal.onclick = function() {
    addNewBookModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === addNewBookModal) {
        addNewBookModal.style.display = 'none';
    }
}

const submitNewBook = document.getElementById('submit-new');
submitNewBook.addEventListener('click', () => {
    const allInputs = document.querySelectorAll('#add-new-book-modal input');
    let blankField = false; 
    allInputs.forEach( (input) => {
        if (input.value === '') {
            blankField = true;
            input.style.borderColor = 'red';
        }
        input.addEventListener('keypress', () => {
            input.style.borderColor = 'blue';
        });
    });
    if (!blankField) {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const year = document.getElementById('year').value;
        const publisher = document.getElementById('publisher').value;
        const quantity = document.getElementById('quantity').value;
        const book = new Book(title, author, year, publisher, quantity, myLib);
        addNewBookModal.style.display = "none";
    }
});

const cancelSubmitNew = document.getElementById('cancel-submit-new');
cancelSubmitNew.addEventListener('click', () => addNewBookModal.style.display = "none");

// ADD EXISTING BOOK MODAL
const addExistingBookModal = document.getElementById('add-existing-book-modal');
const addExistingBookButton = document.getElementById('add-existing-book-button');
const closeExistingBookModal = document.querySelector('#add-existing-book-modal .close');

addExistingBookButton.onclick = function() {
    const datalist = document.querySelector('#add-existing-book-modal datalist');
    datalist.innerHTML = '';
    const allInputs = document.querySelectorAll('#add-existing-book-modal input');
    allInputs.forEach( (input) => {
        input.value = '';
    });
    const booksSelectList = document.getElementById('books-select-list');
    myLib.inventory.forEach( (item) => {
        const newOption = document.createElement('option');
        booksSelectList.appendChild(newOption);
        newOption.textContent = item.title;
    });
    addExistingBookModal.style.display = 'block';
}

closeExistingBookModal.onclick = function() {
    addExistingBookModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === addExistingBookModal) {
        addExistingBookModal.style.display = 'none';
    }
}

const submitExistingBook = document.getElementById('submit-add-existing');
submitExistingBook.addEventListener('click', () => {
    const bookToAdd = document.getElementById('book-select');
    const amountToAdd = document.getElementById('add-amount');
    myLib.inventory.forEach( (item) => {
        if (item.title === bookToAdd.value) {
            item.numInStock = parseInt(item.numInStock) + parseInt(amountToAdd.value);
        }
        myLib.updateTable();
        addExistingBookModal.style.display = 'none';
    });
});


const cancelSubmitExistingBook = document.getElementById('cancel-add-existing');
cancelSubmitExistingBook.addEventListener('click', () => addExistingBookModal.style.display = "none");

// REMOVE BOOK MODAL
const removeBookModal = document.getElementById('remove-book-modal');
const removeBookButton = document.getElementById('remove-book-button');
const closeRemoveBookModal = document.querySelector('#remove-book-modal .close');

removeBookButton.onclick = function() {
    const datalist = document.querySelector('#remove-book-modal datalist');
    datalist.innerHTML = '';
    const allInputs = document.querySelectorAll('#remove-book-modal input');
    allInputs.forEach( (input) => {
        input.value = '';
    });
    const booksRemoveList = document.getElementById('books-remove-list');
    myLib.inventory.forEach( (item) => {
        const newOption = document.createElement('option');
        booksRemoveList.appendChild(newOption);
        newOption.textContent = item.title;
    });
    const removeAmountInput = document.getElementById('remove-amount');
    removeBookModal.style.display = 'block';
};

closeRemoveBookModal.onclick = function() {
    removeBookModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === removeBookModal) {
        removeBookModal.style.display = 'none';
    }
}

const submitRemoveBook = document.getElementById('submit-remove-book');
submitRemoveBook.addEventListener('click', () => {
    const bookToRemove = document.getElementById('book-remove');
    const amountToRemove = document.getElementById('remove-amount');
    if (bookToRemove.value !== '' && amountToRemove.value !== '') {
        myLib.inventory.forEach( (item) => {
            if (item.title === bookToRemove.value) {
                item.numInStock = parseInt(item.numInStock) - parseInt(amountToRemove.value);
            }
            myLib.updateTable();
            removeBookModal.style.display = 'none';
        });
    } else {
        if (bookToRemove.value === '') {
            bookToRemove.style.borderColor = 'red';
            bookToRemove.addEventListener('keypress', () => {
                bookToRemove.style.borderColor = 'blue';
            });
        }
        if (amountToRemove.value === '') {
            amountToRemove.style.borderColor = 'red';
            amountToRemove.addEventListener('keypress', () => {
                amountToRemove.style.borderColor = 'blue';
            });
        }
    }
});

const cancelRemoveBook = document.getElementById('cancel-remove-book');
cancelRemoveBook.addEventListener('click', () => removeBookModal.style.display = "none");
