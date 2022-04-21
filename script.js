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

    updateTable() {
        // Updating List Animation goes here...
        const uniqueBooks = [... new Set(this.inventory)];
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
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const publisher = document.getElementById('publisher').value;
    const quantity = document.getElementById('quantity').value;
    const book = new Book(title, author, year, publisher, quantity, myLib);
    addNewBookModal.style.display = "none";
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
    myLib.inventory.forEach( (item) => {
        if (item.title === bookToRemove.value) {
            item.numInStock = parseInt(item.numInStock) - parseInt(amountToRemove.value);
        }
        myLib.updateTable();
        removeBookModal.style.display = 'none';
    });
});