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
  removeBookModal(removeBook, getBooks());
});

async function addNewBook(bookObj) {
  try {
    await addDoc(collection(db, 'books'), { ...bookObj });
  } catch (error) {
    console.error('Error writing new message to Firebase Database', error);
  }
}

async function removeBook(obj) {
  if (typeof obj === 'string') {
    await deleteDoc(doc(db, 'books', obj));
  } else {
    const q = query(collection(db, 'books'), where('title', '==', obj.title));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (item) => {
      await deleteDoc(doc(db, 'books', item.id));
    });
  }
  loadBooks(db);
}

async function loadBooks(db = db) {
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
  const books = query(collection(db, 'books'));
  const data = await getDocs(books);
  const dataList = [];
  data.forEach((doc) => dataList.push(doc.data()));
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

const firebaseAppConfig = getFirebaseConfig();
const app = initializeApp(firebaseAppConfig);
const db = getFirestore(app);

loadBooks(db);
