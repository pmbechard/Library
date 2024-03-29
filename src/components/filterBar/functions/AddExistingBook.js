// ADD EXISTING BOOK MODAL
export async function addExistingModal(addExistingBook, data) {
  let books = await data();
  const addExistingBookModal = document.getElementById(
    'add-existing-book-modal'
  );
  const closeExistingBookModal = document.querySelector(
    '#add-existing-book-modal .close'
  );
  const bookToAdd = document.getElementById('book-select');
  const amountToAdd = document.getElementById('add-amount');

  bookToAdd.style.borderColor = '';
  amountToAdd.style.borderColor = '';
  bookToAdd.addEventListener(
    'keypress',
    () => (bookToAdd.style.borderColor = 'blue')
  );
  bookToAdd.addEventListener(
    'change',
    () => (bookToAdd.style.borderColor = 'blue')
  );
  amountToAdd.addEventListener(
    'keypress',
    () => (amountToAdd.style.borderColor = 'blue')
  );
  amountToAdd.addEventListener(
    'change',
    () => (amountToAdd.style.borderColor = 'blue')
  );
  const datalist = document.querySelector('#add-existing-book-modal datalist');
  datalist.innerHTML = '';
  const allInputs = document.querySelectorAll('#add-existing-book-modal input');
  allInputs.forEach((input) => {
    input.value = '';
  });
  const booksSelectList = document.getElementById('books-select-list');
  books.forEach((item) => {
    const newOption = document.createElement('option');
    booksSelectList.appendChild(newOption);
    newOption.textContent = item.title;
  });
  addExistingBookModal.style.display = 'block';

  closeExistingBookModal.onclick = function () {
    addExistingBookModal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target === addExistingBookModal) {
      addExistingBookModal.style.display = 'none';
    }
  };

  const submitExistingBook = document.getElementById('submit-add-existing');
  submitExistingBook.addEventListener('click', () => {
    if (bookToAdd.value === '' || amountToAdd.value === '') {
      if (bookToAdd.value === '') {
        bookToAdd.style.borderColor = 'red';
      }
      if (amountToAdd.value === '') {
        amountToAdd.style.borderColor = 'red';
      }
    } else {
      books.forEach((item) => {
        if (item.title === bookToAdd.value) {
          let numInStock =
            Number.parseInt(item.numInStock) +
            Number.parseInt(amountToAdd.value);
          addExistingBook(item, numInStock);
        }
        addExistingBookModal.style.display = 'none';
      });
    }
  });

  const cancelSubmitExistingBook = document.getElementById(
    'cancel-add-existing'
  );
  cancelSubmitExistingBook.addEventListener(
    'click',
    () => (addExistingBookModal.style.display = 'none')
  );
}
