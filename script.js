class Library {
    constructor(libraryName) {
        this.libraryName = libraryName
        this.inventory = []
    }

    addToInventory(book) {
        this.inventory.push(book);
        this.inventory.sort();
    }

    removeFromInventory(book) {
        this.inventory = this.inventory.splice(0, this.inventory.indexOf(book)) + this.inventory.splice(this.inventory.indexOf(book)+1);
    }

    getAllBooks() {
        return this.inventory;
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

