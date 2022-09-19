// Examples
const myLib = new Library('Home Library');

const book1 = new Book(
  'Fluent Python',
  'Luciano Ramalho',
  '2015',
  "O'Reilly",
  6,
  myLib
);
const book2 = new Book(
  'American Psycho',
  'Bret Easton Ellis',
  '1991',
  'Random House',
  4,
  myLib
);
const book3 = new Book(
  'Python Crash Course',
  'Eric Matthes',
  '2019',
  'No Starch Press',
  7,
  myLib
);
const book4 = new Book(
  'Think Like a Programmer',
  'Anton V. Spraul',
  '2012',
  'No Starch Press',
  8,
  myLib
);
const book5 = new Book(
  'Cracking the Coding Interview',
  'Gayle Laakmann McDowell',
  '2015',
  'CareerCup',
  3,
  myLib
);
const book6 = new Book(
  'Design Patterns',
  'Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides',
  '1994',
  'Addison-Wesley',
  5,
  myLib
);
const book7 = new Book(
  'The Flowers of Evil 1868: A New Translation by John E. Tidball',
  'Charles Baudelaire',
  '2018',
  'Bishopston Editions',
  3,
  myLib
);
const book8 = new Book(
  'Glamorama',
  'Bret Easton Ellis',
  '1998',
  'Knopf',
  4,
  myLib
);
const book9 = new Book(
  'Trainspotting',
  'Irvine Welsh',
  '1993',
  'Secker & Warburg',
  5,
  myLib
);
const book10 = new Book(
  'The Corrections',
  'Jonathon Franzen',
  '2001',
  'Farrar, Straus and Giroux',
  6,
  myLib
);
book1.currentlyHeldBy.push('Rick Roll');
book1.currentlyHeldBy.push('Jonathon Smith');
book1.currentlyHeldBy.push('Cindy Lou-Who');
book1.currentlyHeldBy.push('Fred Flinstone');
book1.currentlyHeldBy.push('John Doe');
book1.currentlyHeldBy.push('Jane Doe');
book2.currentlyHeldBy.push('John Doe');
book2.currentlyHeldBy.push('Jane Doe');
myLib.updateTable();
