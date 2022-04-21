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
                        tableData.innerHTML = '<img src="images/info_black_24dp.svg" alt="More info"></img>' + uniqueBooks[i][key];
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

const submitNewBook = document.getElementById('submit-new');
submitNewBook.addEventListener('mousedown', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const publisher = document.getElementById('publisher').value;
    const quantity = document.getElementById('quantity').value;
    const book = new Book(title, author, year, publisher, quantity, myLib);
    modal.style.display = "none";
});

const cancelSubmitNew = document.getElementById('cancel-submit-new');
cancelSubmitNew.addEventListener('mousedown', () => modal.style.display = "none");



// Examples
const myLib = new Library('Allie\'s Home Library');
const book1 = new Book('Fluent Python', 'Luciano Ramalho', '2015', 'O\'Reilly', 3, myLib);
const book2 = new Book('American Psycho', 'Bret Easton Ellis', '1991', 'Random House', 1, myLib);




// MODALS

// Get the modal
var modal = document.getElementById("add-new-book-modal");

// Get the button that opens the modal
var btn = document.getElementById("add-new-book-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    const submitFormInputs = document.querySelectorAll('.modal input');
    submitFormInputs.forEach(input => {
        input.value = '';
    });
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}