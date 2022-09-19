// RETURN BOOK MODAL
export function returnBook() {
  const returnBookModal = document.getElementById('return-book-modal');
  const returnBookButton = document.getElementById('return-book-button');
  const closeReturnBookModal = document.querySelector(
    '#return-book-modal .close'
  );
  const bookToReturn = document.getElementById('book-return');
  const personReturningBook = document.getElementById('return-person');

  returnBookButton.onclick = function () {
    const datalist = document.querySelector('#return-book-modal datalist');
    datalist.innerHTML = '';
    const allInputs = document.querySelectorAll('#return-book-modal input');
    allInputs.forEach((input) => {
      input.value = '';
      input.style.borderColor = '';
    });
    const booksReturnList = document.getElementById('books-return-list');
    myLib.inventory.forEach((item) => {
      const newOption = document.createElement('option');
      booksReturnList.appendChild(newOption);
      newOption.textContent = item.title;
    });
    personReturningBook.setAttribute('disabled', 'true');
    returnBookModal.style.display = 'block';
  };

  bookToReturn.addEventListener('change', () => {
    const checkoutsList = document.getElementById('checked-out-list');
    checkoutsList.innerHTML = '';
    const matchedBook = myLib.inventory.filter(
      (book) => book.title === bookToReturn.value
    );
    if (matchedBook.length === 1 && matchedBook[0].currentlyHeldBy.length > 0) {
      personReturningBook.removeAttribute('disabled');
      const people = matchedBook[0].currentlyHeldBy;
      people.forEach((person) => {
        const newOption = document.createElement('option');
        checkoutsList.appendChild(newOption);
        newOption.textContent = person;
      });
    } else {
      personReturningBook.setAttribute('disabled', 'true');
    }
  });

  closeReturnBookModal.onclick = function () {
    returnBookModal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target === returnBookModal) {
      returnBookModal.style.display = 'none';
    }
  };

  const submitReturnBook = document.getElementById('submit-return-book');
  submitReturnBook.addEventListener('click', () => {
    const matchedBook = myLib.inventory.filter(
      (book) => book.title === bookToReturn.value
    );
    const matchedPerson =
      matchedBook.length > 0
        ? matchedBook[0].currentlyHeldBy.filter(
            (person) => person === personReturningBook.value
          )
        : null;
    if (
      bookToReturn.value === '' ||
      personReturningBook.value === '' ||
      matchedBook.length === 0 ||
      !matchedPerson[0]
    ) {
      if (bookToReturn.value === '' || matchedBook.length === 0) {
        bookToReturn.style.borderColor = 'red';
        bookToReturn.addEventListener(
          'keypress',
          () => (bookToReturn.style.borderColor = 'blue')
        );
        bookToReturn.addEventListener(
          'change',
          () => (bookToReturn.style.borderColor = 'blue')
        );
      } else {
        personReturningBook.style.borderColor = 'red';
        personReturningBook.addEventListener(
          'keypress',
          () => (personReturningBook.style.borderColor = 'blue')
        );
        personReturningBook.addEventListener(
          'change',
          () => (personReturningBook.style.borderColor = 'blue')
        );
      }
    } else {
      matchedBook[0].currentlyHeldBy.splice(
        matchedBook[0].currentlyHeldBy.indexOf(matchedPerson[0]),
        1
      );
      returnBookModal.style.display = 'none';
      myLib.updateTable();
    }
  });

  const cancelReturnBook = document.getElementById('cancel-return-book');
  cancelReturnBook.addEventListener(
    'click',
    () => (returnBookModal.style.display = 'none')
  );
}
