export class Book {
  constructor(title, author, year, publisher, numInStock, belongsTo) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.publisher = publisher;
    this.numInStock = numInStock;
    this.currentlyHeldBy = [];
  }

  toString() {
    return `${this.title} by ${this.name} (${this.publisher} ${this.year})\n\t${this.numInStock} in stock.`;
  }
}
