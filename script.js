/*
Library System
by Peyton Bechard


Last Updated: 26 Apr 2022


To Do:
    - Add ability to edit
    - Expand information to include ISBN, date registered, previous checkout list, page numbers, etc.
    - Refactor repetition in table sorting methods
    - Fix border of sticky thead where you can see little black spots above the headings
    - Standardize modal sections
    - List and sort authors by surname
    - Adjust table column widths to better match contents
    - Add more specific error messages in modals (i.e. not just red borders)
    - Disallow duplicates to be added
    - Make responsive
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
            if (uniqueBooks[i].numInStock === 0 && uniqueBooks[i].currentlyHeldBy.length === 0) {
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
                        tableData.innerHTML = '<img src="images/info_black_24dp.svg" alt="More info"></img>';          
                    } else if (key === 'numInStock') {
                        const tableData = newRow.appendChild(document.createElement('td'));
                        tableData.textContent = `${Number.parseInt(uniqueBooks[i][key]) - uniqueBooks[i]['currentlyHeldBy'].length} of ${Number.parseInt(uniqueBooks[i][key])}`;
                    } else {
                        const tableData = newRow.appendChild(document.createElement('td'));
                        tableData.textContent = uniqueBooks[i][key];
                    }
                }
            }
        }
        this.inventory = this.inventory.filter( (book) => book.numInStock + book.currentlyHeldBy.length > 0);
        // MORE INFO MODAL
        const moreInfoButton = document.querySelectorAll('td > img');
        const moreInfoBookModal = document.getElementById('moreinfo-book-modal');
        const closeMoreInfoBookModal = document.querySelector('#moreinfo-book-modal .close');
        const nameList = document.getElementById('held-by');
        let moreInfoBook;

        moreInfoButton.forEach( (button) => button.addEventListener('click', () => {
            nameList.innerHTML = '';
            const bookTitle = button.parentElement.parentElement.firstChild.textContent;
            myLib.inventory.forEach( (book) => {
                if (book.title === bookTitle) {
                    moreInfoBook = book;
                }
            });
            moreInfoBook.currentlyHeldBy.forEach( (person) => {
                const nameListElement = document.createElement('li');
                nameList.appendChild(nameListElement);
                nameListElement.textContent = person;

            })
            moreInfoBookModal.style.display = 'block';
        }));

        closeMoreInfoBookModal.onclick = function() {
            moreInfoBookModal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target === moreInfoBookModal) {
                moreInfoBookModal.style.display = 'none';
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
}


// Examples
const myLib = new Library('Home Library');

const book1 = new Book('Fluent Python', 'Luciano Ramalho', '2015', 'O\'Reilly', 6, myLib);
const book2 = new Book('American Psycho', 'Bret Easton Ellis', '1991', 'Random House', 4, myLib);
const book3 = new Book('Python Crash Course', 'Eric Matthes', '2019', 'No Starch Press', 7, myLib);
const book4 = new Book('Think Like a Programmer', 'Anton V. Spraul', '2012', 'No Starch Press', 8, myLib);
const book5 = new Book('Cracking the Coding Interview', 'Gayle Laakmann McDowell', '2015', 'CareerCup', 3, myLib);
const book6 = new Book('Design Patterns', 'Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides', '1994', 'Addison-Wesley', 5, myLib);
const book7 = new Book('The Flowers of Evil 1868: A New Translation by John E. Tidball', 'Charles Baudelaire', '2018', 'Bishopston Editions', 3, myLib);
const book8 = new Book('Glamorama', 'Bret Easton Ellis', '1998', 'Knopf', 4, myLib);
const book9 = new Book('Trainspotting', 'Irvine Welsh', '1993', 'Secker & Warburg', 5, myLib);
const book10 = new Book('The Corrections', 'Jonathon Franzen', '2001', 'Farrar, Straus and Giroux', 6, myLib);
book1.currentlyHeldBy.push('Rick Roll');
book1.currentlyHeldBy.push('Jonathon Smith');
book1.currentlyHeldBy.push('Cindy Lou-Who');
book1.currentlyHeldBy.push('Fred Flinstone');
book1.currentlyHeldBy.push('John Doe');
book1.currentlyHeldBy.push('Jane Doe');
book2.currentlyHeldBy.push('John Doe');
book2.currentlyHeldBy.push('Jane Doe');
myLib.updateTable();


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
        input.style.borderColor = '';
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
const bookToAdd = document.getElementById('book-select');
const amountToAdd = document.getElementById('add-amount');

addExistingBookButton.onclick = function() {
    bookToAdd.style.borderColor = '';
    amountToAdd.style.borderColor = '';
    bookToAdd.addEventListener('keypress', () => bookToAdd.style.borderColor = 'blue');
    bookToAdd.addEventListener('change', () => bookToAdd.style.borderColor = 'blue');
    amountToAdd.addEventListener('keypress', () => amountToAdd.style.borderColor = 'blue');
    amountToAdd.addEventListener('change', () => amountToAdd.style.borderColor = 'blue');
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
    if (bookToAdd.value === '' || amountToAdd.value === '') {
        if (bookToAdd.value === '') {
            bookToAdd.style.borderColor = 'red';
        }
        if (amountToAdd.value === '') {
            amountToAdd.style.borderColor = 'red';
        }
    } else {
        console.log('valid')
        myLib.inventory.forEach( (item) => {
            if (item.title === bookToAdd.value) {
                item.numInStock = Number.parseInt(item.numInStock) + Number.parseInt(amountToAdd.value);
            }
            myLib.updateTable();
            addExistingBookModal.style.display = 'none';
        });
    }
});


const cancelSubmitExistingBook = document.getElementById('cancel-add-existing');
cancelSubmitExistingBook.addEventListener('click', () => addExistingBookModal.style.display = "none");

// REMOVE BOOK MODAL
const removeBookModal = document.getElementById('remove-book-modal');
const removeBookButton = document.getElementById('remove-book-button');
const closeRemoveBookModal = document.querySelector('#remove-book-modal .close');
const bookToRemove = document.getElementById('book-remove');
const amountToRemove = document.getElementById('remove-amount');

bookToRemove.addEventListener('change', () => {
    const matchFound = myLib.inventory.filter( (book) => book.title === bookToRemove.value);
    if (matchFound) {
        const maxLimit = matchFound[0].numInStock;
        amountToRemove.setAttribute('max', maxLimit);
    }
});

removeBookButton.onclick = function() {
    const datalist = document.querySelector('#remove-book-modal datalist');
    datalist.innerHTML = '';
    const allInputs = document.querySelectorAll('#remove-book-modal input');
    allInputs.forEach( (input) => {
        input.value = '';
        input.style.borderColor = '';
    });
    const booksRemoveList = document.getElementById('books-remove-list');
    myLib.inventory.forEach( (item) => {
        const newOption = document.createElement('option');
        booksRemoveList.appendChild(newOption);
        newOption.textContent = item.title;
    });
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
cancelRemoveBook.addEventListener('click', () => removeBookModal.style.display = 'none');


// RETURN BOOK MODAL
const returnBookModal = document.getElementById('return-book-modal');
const returnBookButton = document.getElementById('return-book-button');
const closeReturnBookModal = document.querySelector('#return-book-modal .close');
const bookToReturn = document.getElementById('book-return');
const personReturningBook = document.getElementById('return-person');

returnBookButton.onclick = function() {
    const datalist = document.querySelector('#return-book-modal datalist');
    datalist.innerHTML = '';
    const allInputs = document.querySelectorAll('#return-book-modal input');
    allInputs.forEach( (input) => {
        input.value = '';
        input.style.borderColor = '';
    });
    const booksReturnList = document.getElementById('books-return-list');
    myLib.inventory.forEach( (item) => {
        const newOption = document.createElement('option');
        booksReturnList.appendChild(newOption);
        newOption.textContent = item.title;
    });
    personReturningBook.setAttribute('disabled', 'true');
    returnBookModal.style.display = 'block';
};

bookToReturn.addEventListener('change', () => {
    const checkoutsList = document.getElementById('checked-out-list');
    checkoutsList.innerHTML = '';
    const matchedBook = myLib.inventory.filter( (book) => book.title === bookToReturn.value);
    if (matchedBook.length === 1 && matchedBook[0].currentlyHeldBy.length > 0) {
        personReturningBook.removeAttribute('disabled');
        const people = matchedBook[0].currentlyHeldBy;
        people.forEach( (person) => {
            const newOption = document.createElement('option');
            checkoutsList.appendChild(newOption);
            newOption.textContent = person;
        });
    } else {
        personReturningBook.setAttribute('disabled', 'true');
    }
});

closeReturnBookModal.onclick = function() {
    returnBookModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === returnBookModal) {
        returnBookModal.style.display = 'none';
    }
}

const submitReturnBook = document.getElementById('submit-return-book');
submitReturnBook.addEventListener('click', () => {
    const matchedBook = myLib.inventory.filter( (book) => book.title === bookToReturn.value);
    const matchedPerson = matchedBook.length > 0 ? matchedBook[0].currentlyHeldBy.filter( (person) => person === personReturningBook.value) : null;
    if (bookToReturn.value === '' || personReturningBook.value === '' || matchedBook.length === 0 || !matchedPerson[0]) {
        if (bookToReturn.value === '' || matchedBook.length === 0) {
            bookToReturn.style.borderColor = 'red';
            bookToReturn.addEventListener('keypress', () => bookToReturn.style.borderColor = 'blue');
            bookToReturn.addEventListener('change', () => bookToReturn.style.borderColor = 'blue');
        } else {
            personReturningBook.style.borderColor = 'red';
            personReturningBook.addEventListener('keypress', () => personReturningBook.style.borderColor = 'blue');
            personReturningBook.addEventListener('change', () => personReturningBook.style.borderColor = 'blue');
        }
    } else {
        matchedBook[0].currentlyHeldBy.splice(matchedBook[0].currentlyHeldBy.indexOf(matchedPerson[0]), 1);
        returnBookModal.style.display = 'none';
        myLib.updateTable();
    }
});

const cancelReturnBook = document.getElementById('cancel-return-book');
cancelReturnBook.addEventListener('click', () => returnBookModal.style.display = 'none');


// CHECKOUT BOOK MODAL
const checkOutBookModal = document.getElementById('checkout-book-modal');
const checkOutBookButton = document.getElementById('checkout-book-button');
const closeCheckOutBookModal = document.querySelector('#checkout-book-modal .close');
const bookToCheckOut = document.getElementById('book-checkout');
const personCheckingOutBook = document.getElementById('checkout-person');


checkOutBookButton.onclick = function() {
    const datalist = document.querySelector('#checkout-book-modal datalist');
    datalist.innerHTML = '';
    const allInputs = document.querySelectorAll('#checkout-book-modal input');
    allInputs.forEach( (input) => {
        input.value = '';
        input.style.borderColor = '';
    });
    const booksCheckoutList = document.getElementById('books-checkout-list');
    myLib.inventory.forEach( (item) => {
        const newOption = document.createElement('option');
        booksCheckoutList.appendChild(newOption);
        newOption.textContent = item.title;
    });
    personCheckingOutBook.setAttribute('disabled', 'true');
    checkOutBookModal.style.display = 'block';
};

bookToCheckOut.addEventListener('change', () => {
    const matchedBook = myLib.inventory.filter( (book) => book.title === bookToCheckOut.value);
    const matchBookQuantity = matchedBook.length > 0 ? Number.parseInt(matchedBook[0].numInStock) - matchedBook[0].currentlyHeldBy.length : 0;
    if (matchBookQuantity > 0) {
        personCheckingOutBook.removeAttribute('disabled');
    } else {
        personCheckingOutBook.setAttribute('disabled', 'true');
    }
});

closeCheckOutBookModal.onclick = function() {
    checkOutBookModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === checkOutBookModal) {
        checkOutBookModal.style.display = 'none';
    }
}

const submitCheckOutBook = document.getElementById('submit-checkout-book');
submitCheckOutBook.addEventListener('click', () => {
    const matchedBook = myLib.inventory.filter( (book) => book.title === bookToCheckOut.value);

    if (bookToCheckOut.value === '' || personCheckingOutBook.value === '' || matchedBook.length === 0) {
        if (bookToCheckOut.value === '' || matchedBook.length === 0) {
            bookToCheckOut.style.borderColor = 'red';
            bookToCheckOut.addEventListener('keypress', () => bookToCheckOut.style.borderColor = 'blue');
            bookToCheckOut.addEventListener('change', () => bookToCheckOut.style.borderColor = 'blue');
        } else {
            personCheckingOutBook.style.borderColor = 'red';
            personCheckingOutBook.addEventListener('keypress', () => personCheckingOutBook.style.borderColor = 'blue');
            personCheckingOutBook.addEventListener('change', () => personCheckingOutBook.style.borderColor = 'blue');
        }
    } else {
        checkOutBookModal.style.display = 'none';
        matchedBook[0].currentlyHeldBy.push(personCheckingOutBook.value);
        myLib.updateTable();
    }
});

const cancelCheckOutBook = document.getElementById('cancel-checkout-book');
cancelCheckOutBook.addEventListener('click', () => checkOutBookModal.style.display = 'none');