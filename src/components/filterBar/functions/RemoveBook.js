export async function removeBookModal(removeBook, data) {
  let books = await data;
  const removeBookModal = document.getElementById('remove-book-modal');
  const removeBookButton = document.getElementById('remove-book-button');
  const closeRemoveBookModal = document.querySelector(
    '#remove-book-modal .close'
  );
  const bookToRemove = document.getElementById('book-remove');
  const amountToRemove = document.getElementById('remove-amount');
  removeBookModal.style.display = 'block';

  bookToRemove.addEventListener('change', async () => {
    const matchFound = await books.filter(
      (book) => book.title === bookToRemove.value
    );
    if (matchFound) {
      const maxLimit = matchFound[0].numInStock;
      amountToRemove.setAttribute('max', maxLimit);
    }
  });

  const datalist = document.querySelector('#remove-book-modal datalist');
  datalist.innerHTML = '';
  const allInputs = document.querySelectorAll('#remove-book-modal input');
  allInputs.forEach((input) => {
    input.value = '';
    input.style.borderColor = '';
  });
  const booksRemoveList = document.getElementById('books-remove-list');
  for (let item of books) {
    const newOption = document.createElement('option');
    booksRemoveList.appendChild(newOption);
    newOption.textContent = item.title;
  }

  closeRemoveBookModal.addEventListener('click', () => {
    removeBookModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === removeBookModal) {
      removeBookModal.style.display = 'none';
    }
  });

  const cancelRemoveBook = document.getElementById('cancel-remove-book');
  cancelRemoveBook.addEventListener(
    'click',
    () => (removeBookModal.style.display = 'none')
  );

  // SUBMIT
  const submitRemoveBook = document.getElementById('submit-remove-book');
  submitRemoveBook.addEventListener('click', async () => {
    if (bookToRemove.value !== '' && amountToRemove.value !== '') {
      await books.forEach((item) => {
        if (item.title === bookToRemove.value) {
          let remainingStock =
            parseInt(item.numInStock) - parseInt(amountToRemove.value);
          if (remainingStock === 0) {
            removeBook(item);
          }
        }
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
}
