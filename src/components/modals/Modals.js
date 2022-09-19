export function getModals() {
  const addNewModal = document.createElement('div');
  addNewModal.classList.add('modal');
  addNewModal.id = 'add-new-book-modal';
  addNewModal.innerHTML =
    '<div class="modal-content"><div class="modal-header"><span class="close">&times;</span><h2>Add New Book</h2></div><form action="" method=""><ul>  <li>    <label for="title">Title</label>    <input type="text" name="title" id="title" />  </li>  <li>    <label for="author">Author</label>    <input type="text" name="author" id="author" />  </li>  <li>    <label for="year">Year</label>    <input type="text" name="year" id="year" />  </li>  <li>    <label for="publisher">Publisher</label>    <input type="text" name="publisher" id="publisher" />  </li>  <li>    <label for="quantity">Quantity</label>    <input type="number" name="quantity" id="quantity" min="1" />  </li></ul><div class="buttons">  <div class="button" id="submit-new">Add</div>  <div class="button" id="cancel-submit-new">Cancel</div></div></form></div>';
  document.body.appendChild(addNewModal);

  const addExistingModal = document.createElement('div');
  addExistingModal.classList.add('modal');
  addExistingModal.id = 'add-existing-book-modal';
  addExistingModal.innerHTML =
    '<div class="modal-content">  <div class="modal-header">    <span class="close">&times;</span>    <h2>Add Existing Book</h2>  </div>  <form action="" method="">    <ul>      <li>        <label for="book-select">Please choose a book</label>        <input          type="text"          list="books-select-list"          name="book-select"          id="book-select"        />        <datalist id="books-select-list"> </datalist>      </li>      <li>        <label for="add-amount"          >How many copies would you like to add?</label        >        <input type="number" name="add-amount" id="add-amount" min="1" />      </li>    </ul>    <div class="buttons">      <div class="button" id="submit-add-existing">Add</div>      <div class="button" id="cancel-add-existing">Cancel</div>    </div>  </form></div>';
  document.body.appendChild(addExistingModal);

  const removeModal = document.createElement('div');
  removeModal.classList.add('modal');
  removeModal.id = 'remove-book-modal';
  removeModal.innerHTML =
    '<div class="modal-content">  <div class="modal-header">    <span class="close">&times;</span>    <h2>Remove Book</h2>  </div>  <form action="" method="">    <ul>      <li>        <label for="book-remove">Please choose a book</label>        <input          type="text"          list="books-remove-list"          name="book-remove"          id="book-remove"        />        <datalist id="books-remove-list"> </datalist>      </li>      <li>        <label for="remove-amount"          >How many copies would you like to remove?</label        >        <input          type="number"          name="remove-amount"          id="remove-amount"          min="1"        />      </li>    </ul>    <div class="buttons">      <div class="button" id="submit-remove-book">Remove</div>      <div class="button" id="cancel-remove-book">Cancel</div>    </div>  </form></div>';
  document.body.appendChild(removeModal);

  const returnModal = document.createElement('div');
  returnModal.classList.add('modal');
  returnModal.id = 'return-book-modal';
  returnModal.innerHTML =
    '<div class="modal-content">  <div class="modal-header">    <span class="close">&times;</span>    <h2>Return Book</h2>  </div>  <form action="" method="">    <ul>      <li>        <label for="book-return">Please choose a book</label>        <input          type="text"          list="books-return-list"          name="book-return"          id="book-return"        />        <datalist id="books-return-list"> </datalist>      </li>      <li>        <label for="return-person">Please choose a borrower</label>        <input          type="text"          list="checked-out-list"          name="return-person"          id="return-person"          disabled="true"        />        <datalist id="checked-out-list"> </datalist>      </li>    </ul>    <div class="buttons">      <div class="button" id="submit-return-book">Return</div>      <div class="button" id="cancel-return-book">Cancel</div>    </div>  </form></div>';
  document.body.appendChild(returnModal);

  const checkoutModal = document.createElement('div');
  checkoutModal.classList.add('modal');
  checkoutModal.id = 'checkout-book-modal';
  checkoutModal.innerHTML =
    '<div class="modal-content">  <div class="modal-header">    <span class="close">&times;</span>    <h2>Check Out Book</h2>  </div>  <form action="" method="">    <ul>      <li>        <label for="book-checkout">Please choose a book</label>        <input          type="text"          list="books-checkout-list"          name="book-checkout"          id="book-checkout"        />        <datalist id="books-checkout-list"> </datalist>      </li>      <li>        <label for="checkout-person">Name of borrower</label>        <input          type="text"          name="checkout-person"          id="checkout-person"          disabled="true"        />      </li>    </ul>    <div class="buttons">      <div class="button" id="submit-checkout-book">Check Out</div>      <div class="button" id="cancel-checkout-book">Cancel</div>    </div>  </form></div>';
  document.body.appendChild(checkoutModal);

  const moreInfoModal = document.createElement('div');
  moreInfoModal.classList.add('modal');
  moreInfoModal.id = 'moreinfo-book-modal';
  moreInfoModal.innerHTML =
    '<div class="modal-content">  <div class="modal-header">    <span class="close">&times;</span>    <h2>More Info</h2>  </div>  <div class="book-info">    <h2 style="text-align: center">Currently held by:</h2>    <ul id="held-by"></ul>  </div></div>';
  document.body.appendChild(moreInfoModal);
}
