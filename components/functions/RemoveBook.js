// REMOVE BOOK MODAL
const removeBookModal = document.getElementById('remove-book-modal');
const removeBookButton = document.getElementById('remove-book-button');
const closeRemoveBookModal = document.querySelector(
  '#remove-book-modal .close'
);
const bookToRemove = document.getElementById('book-remove');
const amountToRemove = document.getElementById('remove-amount');

bookToRemove.addEventListener('change', () => {
  const matchFound = myLib.inventory.filter(
    (book) => book.title === bookToRemove.value
  );
  if (matchFound) {
    const maxLimit = matchFound[0].numInStock;
    amountToRemove.setAttribute('max', maxLimit);
  }
});

removeBookButton.onclick = function () {
  const datalist = document.querySelector('#remove-book-modal datalist');
  datalist.innerHTML = '';
  const allInputs = document.querySelectorAll('#remove-book-modal input');
  allInputs.forEach((input) => {
    input.value = '';
    input.style.borderColor = '';
  });
  const booksRemoveList = document.getElementById('books-remove-list');
  myLib.inventory.forEach((item) => {
    const newOption = document.createElement('option');
    booksRemoveList.appendChild(newOption);
    newOption.textContent = item.title;
  });
  removeBookModal.style.display = 'block';
};

closeRemoveBookModal.onclick = function () {
  removeBookModal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === removeBookModal) {
    removeBookModal.style.display = 'none';
  }
};

const submitRemoveBook = document.getElementById('submit-remove-book');
submitRemoveBook.addEventListener('click', () => {
  if (bookToRemove.value !== '' && amountToRemove.value !== '') {
    myLib.inventory.forEach((item) => {
      if (item.title === bookToRemove.value) {
        item.numInStock =
          parseInt(item.numInStock) - parseInt(amountToRemove.value);
      }
      myLib.updateTable();
      removeBookModal.style.display = 'none';
    });
  } else {
    if (bookToRemove.value === '') {
      bookToRemove.style.borderColor = 'red';
      bookToRemove.addEventListener('keypress', () => {
        bookToRemove.style.borderColor = 'blue';
      });
    }
    if (amountToRemove.value === '') {
      amountToRemove.style.borderColor = 'red';
      amountToRemove.addEventListener('keypress', () => {
        amountToRemove.style.borderColor = 'blue';
      });
    }
  }
});

const cancelRemoveBook = document.getElementById('cancel-remove-book');
cancelRemoveBook.addEventListener(
  'click',
  () => (removeBookModal.style.display = 'none')
);
