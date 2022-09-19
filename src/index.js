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
  query,
  orderBy,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';

import { newBookModal } from './components/filterBar/functions/AddNewBook';

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

// function loadBooks() {
//   const booksQuery = query(
//     collection(getFirestore(), 'books'),
//     orderBy('title', 'asc')
//   );

//   onSnapshot(booksQuery, function (snapshot) {
//     snapshot.docChanges().forEach(function (change) {
//       if (change.type === 'removed') {
//         deleteBook(change.doc.id);
//       } else {
//         var book = change.doc.data();
//         displayBook(
//           change.doc.id,
//           title,
//           book.author,
//           book.year,
//           book.publisher,
//           book.numInStock,
//           book.currentlyHeldBy
//         );
//       }
//     });
//   });
// }

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);
