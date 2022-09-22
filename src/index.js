/*
Library System
by Peyton Bechard


Last Updated: 19 Sep 2022


TODO:
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

import { getHeader } from './components/Header';
import { getMainContent } from './components/MainContent';
import { getFooter } from './components/Footer';
import { getModals } from './components/modals/Modals';
import './styles.css';

import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './firebase-config.js';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';

import { newBookModal } from './components/filterBar/functions/AddNewBook';
import infoIcon from './img/info.svg';
import { removeBookModal } from './components/filterBar/functions/RemoveBook';
import { addExistingModal } from './components/filterBar/functions/AddExistingBook';

const firebaseAppConfig = getFirebaseConfig();
const app = initializeApp(firebaseAppConfig);
const db = getFirestore(app);

getHeader();
getMainContent();
getFooter();
// FIXME:
getModals();

const addNewBtn = document.getElementById('add-new-book-button');
addNewBtn.addEventListener('click', () => {
  newBookModal(addNewBook);
});

const removeButton = document.getElementById('remove-book-button');
removeButton.addEventListener('click', () => {
  removeBookModal(removeBook, modifyBook, getBooks);
});

const addExistingButton = document.getElementById('add-existing-book-button');
addExistingButton.addEventListener('click', () =>
  addExistingModal(modifyBook, getBooks)
);

async function addNewBook(obj) {
  let id = obj.title.toLowerCase().replaceAll(' ', '-');
  await setDoc(doc(db, 'books', `${id}`), {
    id: id,
    ...obj,
  });
}

async function removeBook(obj) {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  await deleteDoc(doc(db, 'books', obj.id));
  loadBooks();
}

async function modifyBook(obj, stock) {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  await updateDoc(doc(db, 'books', obj.id), {
    numInStock: `${stock}`,
  });
  loadBooks();
}

async function loadBooks() {
  const booksCol = collection(db, 'books');
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  onSnapshot(booksCol, function (snapshot) {
    snapshot.docChanges().forEach(function (change) {
      if (change.type === 'removed') {
        removeBook(change.doc.id);
      } else {
        const book = change.doc.data();
        displayBook({
          id: change.doc.id,
          title: book.title,
          author: book.author,
          year: book.year,
          publisher: book.publisher,
          currentlyHeldBy: book.currentlyHeldBy,
          numInStock: book.numInStock,
        });
      }
    });
  });
}

async function getBooks() {
  const books = collection(db, 'books');
  const data = await getDocs(books);
  const dataList = data.docs.map((doc) => doc.data());
  return dataList;
}

function displayBook({ ...book }) {
  const tbody = document.querySelector('tbody');
  const newRow = tbody.appendChild(document.createElement('tr'));
  const title = newRow.appendChild(document.createElement('td'));
  title.textContent = book.title;
  const author = newRow.appendChild(document.createElement('td'));
  author.textContent = book.author;
  const year = newRow.appendChild(document.createElement('td'));
  year.textContent = book.year;
  const publisher = newRow.appendChild(document.createElement('td'));
  publisher.textContent = book.publisher;
  const numInStock = newRow.appendChild(document.createElement('td'));
  numInStock.textContent = `${
    Number.parseInt(book.numInStock) - book.currentlyHeldBy.length
  } of ${Number.parseInt(book.numInStock)}`;
  const moreInfo = newRow.appendChild(document.createElement('td'));
  const infoImg = document.createElement('img');
  infoImg.src = infoIcon;
  moreInfo.appendChild(infoImg);
}

loadBooks();
