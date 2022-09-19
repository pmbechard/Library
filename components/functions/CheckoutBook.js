// CHECKOUT BOOK MODAL
const checkOutBookModal = document.getElementById('checkout-book-modal');
const checkOutBookButton = document.getElementById('checkout-book-button');
const closeCheckOutBookModal = document.querySelector(
  '#checkout-book-modal .close'
);
const bookToCheckOut = document.getElementById('book-checkout');
const personCheckingOutBook = document.getElementById('checkout-person');

checkOutBookButton.onclick = function () {
  const datalist = document.querySelector('#checkout-book-modal datalist');
  datalist.innerHTML = '';
  const allInputs = document.querySelectorAll('#checkout-book-modal input');
  allInputs.forEach((input) => {
    input.value = '';
    input.style.borderColor = '';
  });
  const booksCheckoutList = document.getElementById('books-checkout-list');
  myLib.inventory.forEach((item) => {
    const newOption = document.createElement('option');
    booksCheckoutList.appendChild(newOption);
    newOption.textContent = item.title;
  });
  personCheckingOutBook.setAttribute('disabled', 'true');
  checkOutBookModal.style.display = 'block';
};

bookToCheckOut.addEventListener('change', () => {
  const matchedBook = myLib.inventory.filter(
    (book) => book.title === bookToCheckOut.value
  );
  const matchBookQuantity =
    matchedBook.length > 0
      ? Number.parseInt(matchedBook[0].numInStock) -
        matchedBook[0].currentlyHeldBy.length
      : 0;
  if (matchBookQuantity > 0) {
    personCheckingOutBook.removeAttribute('disabled');
  } else {
    personCheckingOutBook.setAttribute('disabled', 'true');
  }
});

closeCheckOutBookModal.onclick = function () {
  checkOutBookModal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === checkOutBookModal) {
    checkOutBookModal.style.display = 'none';
  }
};

const submitCheckOutBook = document.getElementById('submit-checkout-book');
submitCheckOutBook.addEventListener('click', () => {
  const matchedBook = myLib.inventory.filter(
    (book) => book.title === bookToCheckOut.value
  );

  if (
    bookToCheckOut.value === '' ||
    personCheckingOutBook.value === '' ||
    matchedBook.length === 0
  ) {
    if (bookToCheckOut.value === '' || matchedBook.length === 0) {
      bookToCheckOut.style.borderColor = 'red';
      bookToCheckOut.addEventListener(
        'keypress',
        () => (bookToCheckOut.style.borderColor = 'blue')
      );
      bookToCheckOut.addEventListener(
        'change',
        () => (bookToCheckOut.style.borderColor = 'blue')
      );
    } else {
      personCheckingOutBook.style.borderColor = 'red';
      personCheckingOutBook.addEventListener(
        'keypress',
        () => (personCheckingOutBook.style.borderColor = 'blue')
      );
      personCheckingOutBook.addEventListener(
        'change',
        () => (personCheckingOutBook.style.borderColor = 'blue')
      );
    }
  } else {
    checkOutBookModal.style.display = 'none';
    matchedBook[0].currentlyHeldBy.push(personCheckingOutBook.value);
    myLib.updateTable();
  }
});

const cancelCheckOutBook = document.getElementById('cancel-checkout-book');
cancelCheckOutBook.addEventListener(
  'click',
  () => (checkOutBookModal.style.display = 'none')
);
