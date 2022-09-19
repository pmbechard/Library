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
  query,
  orderBy,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';

import { newBookModal } from './components/filterBar/functions/AddNewBook';
import infoIcon from './img/info.svg';

getHeader();
getMainContent();
getFooter();
// FIXME:
getModals();

const addNewBtn = document.getElementById('add-new-book-button');
addNewBtn.addEventListener('click', () => {
  newBookModal(addNewBook);
});

async function addNewBook(bookObj) {
  try {
    await addDoc(collection(getFirestore(), 'books'), { ...bookObj });
  } catch (error) {
    console.error('Error writing new message to Firebase Database', error);
  }
}

async function getBooks(db) {
  const booksCol = collection(db, 'books');
  const booksSnapshot = await getDocs(booksCol);
  const booksList = booksSnapshot.docs.map((doc) => doc.data());
  console.log(booksList);

  const tbody = document.querySelector('tbody');
  booksList.forEach((book) => {
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
  });
  return booksList;
}

const firebaseAppConfig = getFirebaseConfig();
const app = initializeApp(firebaseAppConfig);
const db = getFirestore(app);

getBooks(db);
