// ADD NEW BOOK MODAL
const addNewBookModal = document.getElementById('add-new-book-modal');
const addNewBookButton = document.getElementById('add-new-book-button');
const closeNewBookModal = document.querySelector('#add-new-book-modal .close');

addNewBookButton.onclick = function () {
  const submitFormInputs = document.querySelectorAll('.modal input');
  submitFormInputs.forEach((input) => {
    input.value = '';
    input.style.borderColor = '';
  });
  addNewBookModal.style.display = 'block';
};

closeNewBookModal.onclick = function () {
  addNewBookModal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === addNewBookModal) {
    addNewBookModal.style.display = 'none';
  }
};

const submitNewBook = document.getElementById('submit-new');
submitNewBook.addEventListener('click', () => {
  const allInputs = document.querySelectorAll('#add-new-book-modal input');
  let blankField = false;
  allInputs.forEach((input) => {
    if (input.value === '') {
      blankField = true;
      input.style.borderColor = 'red';
    }
    input.addEventListener('keypress', () => {
      input.style.borderColor = 'blue';
    });
  });
  if (!blankField) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const publisher = document.getElementById('publisher').value;
    const quantity = document.getElementById('quantity').value;
    const book = new Book(title, author, year, publisher, quantity, myLib);
    addNewBookModal.style.display = 'none';
  }
});

const cancelSubmitNew = document.getElementById('cancel-submit-new');
cancelSubmitNew.addEventListener(
  'click',
  () => (addNewBookModal.style.display = 'none')
);
