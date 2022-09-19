/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFooter\": () => (/* binding */ getFooter)\n/* harmony export */ });\nfunction getFooter() {\n  const container = document.createElement('footer');\n  document.body.appendChild(container);\n  const footerText = document.createElement('small');\n  footerText.innerHTML = 'Peyton Bechard &copy; 2022';\n  container.appendChild(footerText);\n}\n\n//# sourceURL=webpack://library/./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHeader\": () => (/* binding */ getHeader)\n/* harmony export */ });\n/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/logo.svg */ \"./src/img/logo.svg\");\n\nfunction getHeader() {\n  const container = document.createElement('header');\n  container.classList.add('header');\n  document.body.appendChild(container);\n  const headerLogo = document.createElement('img');\n  headerLogo.src = _img_logo_svg__WEBPACK_IMPORTED_MODULE_0__;\n  container.appendChild(headerLogo);\n  const title = document.createElement('h1');\n  title.textContent = 'Online Library System';\n  container.appendChild(title);\n}\n\n//# sourceURL=webpack://library/./src/components/Header.js?");

/***/ }),

/***/ "./src/components/MainContent.js":
/*!***************************************!*\
  !*** ./src/components/MainContent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMainContent\": () => (/* binding */ getMainContent)\n/* harmony export */ });\n/* harmony import */ var _bookList_BookList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookList/BookList */ \"./src/components/bookList/BookList.js\");\n/* harmony import */ var _filterBar_FilterBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterBar/FilterBar */ \"./src/components/filterBar/FilterBar.js\");\n\n\nfunction getMainContent() {\n  const container = document.createElement('section');\n  container.classList.add('main-content');\n  document.body.appendChild(container);\n  (0,_filterBar_FilterBar__WEBPACK_IMPORTED_MODULE_1__.getFilterBar)(container);\n  (0,_bookList_BookList__WEBPACK_IMPORTED_MODULE_0__.getBookList)(container);\n}\n\n//# sourceURL=webpack://library/./src/components/MainContent.js?");

/***/ }),

/***/ "./src/components/bookList/BookList.js":
/*!*********************************************!*\
  !*** ./src/components/bookList/BookList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBookList\": () => (/* binding */ getBookList)\n/* harmony export */ });\n/* harmony import */ var _img_down_arrow_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/down-arrow.svg */ \"./src/img/down-arrow.svg\");\n\nfunction getBookList(sectionContainer) {\n  const container = document.createElement('div');\n  container.classList.add('books-list');\n  sectionContainer.appendChild(container);\n  const table = document.createElement('table');\n  table.classList.add('books-table');\n  container.appendChild(table);\n  const thead = document.createElement('thead');\n  table.appendChild(thead);\n  const trow = document.createElement('tr');\n  thead.appendChild(trow);\n  const titleHeading = document.createElement('th');\n  titleHeading.textContent = 'Title';\n  trow.appendChild(titleHeading);\n  const titleSortImg = document.createElement('img');\n  titleSortImg.src = _img_down_arrow_svg__WEBPACK_IMPORTED_MODULE_0__;\n  titleSortImg.id = 'title-sort';\n  titleHeading.appendChild(titleSortImg);\n  const authorHeading = document.createElement('th');\n  authorHeading.textContent = 'Author';\n  trow.appendChild(authorHeading);\n  const authorSortImg = document.createElement('img');\n  authorSortImg.src = _img_down_arrow_svg__WEBPACK_IMPORTED_MODULE_0__;\n  authorSortImg.id = 'author-sort';\n  authorHeading.appendChild(authorSortImg);\n  const yearHeading = document.createElement('th');\n  yearHeading.textContent = 'Year';\n  trow.appendChild(yearHeading);\n  const yearSortImg = document.createElement('img');\n  yearSortImg.src = _img_down_arrow_svg__WEBPACK_IMPORTED_MODULE_0__;\n  yearSortImg.id = 'year-sort';\n  yearHeading.appendChild(yearSortImg);\n  const pubHeading = document.createElement('th');\n  pubHeading.textContent = 'Publisher';\n  trow.appendChild(pubHeading);\n  const pubSortImg = document.createElement('img');\n  pubSortImg.src = _img_down_arrow_svg__WEBPACK_IMPORTED_MODULE_0__;\n  pubSortImg.id = 'publisher-sort';\n  pubHeading.appendChild(pubSortImg);\n  const stockHeading = document.createElement('th');\n  stockHeading.textContent = 'In Stock / Total';\n  trow.appendChild(stockHeading);\n  const stockSortImg = document.createElement('img');\n  stockSortImg.src = _img_down_arrow_svg__WEBPACK_IMPORTED_MODULE_0__;\n  stockSortImg.id = 'inStock-sort';\n  stockHeading.appendChild(stockSortImg);\n  const moreInfoHeading = document.createElement('th');\n  moreInfoHeading.textContent = 'More Info';\n  trow.appendChild(moreInfoHeading);\n  const tbody = document.createElement('tbody');\n  table.appendChild(tbody);\n}\n\n//# sourceURL=webpack://library/./src/components/bookList/BookList.js?");

/***/ }),

/***/ "./src/components/filterBar/FilterBar.js":
/*!***********************************************!*\
  !*** ./src/components/filterBar/FilterBar.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFilterBar\": () => (/* binding */ getFilterBar)\n/* harmony export */ });\n/* harmony import */ var _img_search_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/search.svg */ \"./src/img/search.svg\");\n\nfunction getFilterBar(sectionContainer) {\n  const container = document.createElement('div');\n  container.classList.add('filters');\n  sectionContainer.appendChild(container);\n  const searchArea = document.createElement('div');\n  searchArea.classList.add('search-area');\n  container.appendChild(searchArea);\n  const searchLabel = document.createElement('label');\n  searchLabel.for = 'book-search';\n  searchArea.appendChild(searchLabel);\n  const searchImg = document.createElement('img');\n  searchImg.src = _img_search_svg__WEBPACK_IMPORTED_MODULE_0__;\n  searchLabel.appendChild(searchImg);\n  const searchInput = document.createElement('input');\n  searchInput.type = 'search';\n  searchInput.name = 'book-search';\n  searchInput.id = 'book-search';\n  searchArea.appendChild(searchInput);\n  const buttonsArea = document.createElement('div');\n  buttonsArea.classList.add('add-remove-buttons');\n  container.appendChild(buttonsArea);\n  const checkoutButton = document.createElement('button');\n  checkoutButton.id = 'checkout-book-button';\n  checkoutButton.textContent = 'Check Out';\n  buttonsArea.appendChild(checkoutButton);\n  const returnButton = document.createElement('button');\n  returnButton.id = 'return-book-button';\n  returnButton.textContent = 'Return';\n  buttonsArea.appendChild(returnButton);\n  const addNewButton = document.createElement('button');\n  addNewButton.id = 'add-new-book-button';\n  addNewButton.textContent = 'Add New';\n  buttonsArea.appendChild(addNewButton);\n  const addExistingButton = document.createElement('button');\n  addExistingButton.id = 'add-existing-book-button';\n  addExistingButton.textContent = 'Add Existing';\n  buttonsArea.appendChild(addExistingButton);\n  const removeButton = document.createElement('button');\n  removeButton.id = 'remove-book-button';\n  removeButton.textContent = 'Remove';\n  buttonsArea.appendChild(removeButton);\n}\n\n//# sourceURL=webpack://library/./src/components/filterBar/FilterBar.js?");

/***/ }),

/***/ "./src/components/modals/Modals.js":
/*!*****************************************!*\
  !*** ./src/components/modals/Modals.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getModals\": () => (/* binding */ getModals)\n/* harmony export */ });\nfunction getModals() {\n  const addNewModal = document.createElement('div');\n  addNewModal.classList.add('modal');\n  addNewModal.id = 'add-new-book-modal';\n  addNewModal.innerHTML = '<div class=\"modal-content\"><div class=\"modal-header\"><span class=\"close\">&times;</span><h2>Add New Book</h2></div><form action=\"\" method=\"\"><ul>  <li>    <label for=\"title\">Title</label>    <input type=\"text\" name=\"title\" id=\"title\" />  </li>  <li>    <label for=\"author\">Author</label>    <input type=\"text\" name=\"author\" id=\"author\" />  </li>  <li>    <label for=\"year\">Year</label>    <input type=\"text\" name=\"year\" id=\"year\" />  </li>  <li>    <label for=\"publisher\">Publisher</label>    <input type=\"text\" name=\"publisher\" id=\"publisher\" />  </li>  <li>    <label for=\"quantity\">Quantity</label>    <input type=\"number\" name=\"quantity\" id=\"quantity\" min=\"1\" />  </li></ul><div class=\"buttons\">  <div class=\"button\" id=\"submit-new\">Add</div>  <div class=\"button\" id=\"cancel-submit-new\">Cancel</div></div></form></div>';\n  document.body.appendChild(addNewModal);\n  const addExistingModal = document.createElement('div');\n  addExistingModal.classList.add('modal');\n  addExistingModal.id = 'add-existing-book-modal';\n  addExistingModal.innerHTML = '<div class=\"modal-content\">  <div class=\"modal-header\">    <span class=\"close\">&times;</span>    <h2>Add Existing Book</h2>  </div>  <form action=\"\" method=\"\">    <ul>      <li>        <label for=\"book-select\">Please choose a book</label>        <input          type=\"text\"          list=\"books-select-list\"          name=\"book-select\"          id=\"book-select\"        />        <datalist id=\"books-select-list\"> </datalist>      </li>      <li>        <label for=\"add-amount\"          >How many copies would you like to add?</label        >        <input type=\"number\" name=\"add-amount\" id=\"add-amount\" min=\"1\" />      </li>    </ul>    <div class=\"buttons\">      <div class=\"button\" id=\"submit-add-existing\">Add</div>      <div class=\"button\" id=\"cancel-add-existing\">Cancel</div>    </div>  </form></div>';\n  document.body.appendChild(addExistingModal);\n  const removeModal = document.createElement('div');\n  removeModal.classList.add('modal');\n  removeModal.id = 'remove-book-modal';\n  removeModal.innerHTML = '<div class=\"modal-content\">  <div class=\"modal-header\">    <span class=\"close\">&times;</span>    <h2>Remove Book</h2>  </div>  <form action=\"\" method=\"\">    <ul>      <li>        <label for=\"book-remove\">Please choose a book</label>        <input          type=\"text\"          list=\"books-remove-list\"          name=\"book-remove\"          id=\"book-remove\"        />        <datalist id=\"books-remove-list\"> </datalist>      </li>      <li>        <label for=\"remove-amount\"          >How many copies would you like to remove?</label        >        <input          type=\"number\"          name=\"remove-amount\"          id=\"remove-amount\"          min=\"1\"        />      </li>    </ul>    <div class=\"buttons\">      <div class=\"button\" id=\"submit-remove-book\">Remove</div>      <div class=\"button\" id=\"cancel-remove-book\">Cancel</div>    </div>  </form></div>';\n  document.body.appendChild(removeModal);\n  const returnModal = document.createElement('div');\n  returnModal.classList.add('modal');\n  returnModal.id = 'return-book-modal';\n  returnModal.innerHTML = '<div class=\"modal-content\">  <div class=\"modal-header\">    <span class=\"close\">&times;</span>    <h2>Return Book</h2>  </div>  <form action=\"\" method=\"\">    <ul>      <li>        <label for=\"book-return\">Please choose a book</label>        <input          type=\"text\"          list=\"books-return-list\"          name=\"book-return\"          id=\"book-return\"        />        <datalist id=\"books-return-list\"> </datalist>      </li>      <li>        <label for=\"return-person\">Please choose a borrower</label>        <input          type=\"text\"          list=\"checked-out-list\"          name=\"return-person\"          id=\"return-person\"          disabled=\"true\"        />        <datalist id=\"checked-out-list\"> </datalist>      </li>    </ul>    <div class=\"buttons\">      <div class=\"button\" id=\"submit-return-book\">Return</div>      <div class=\"button\" id=\"cancel-return-book\">Cancel</div>    </div>  </form></div>';\n  document.body.appendChild(returnModal);\n  const checkoutModal = document.createElement('div');\n  checkoutModal.classList.add('modal');\n  checkoutModal.id = 'checkout-book-modal';\n  checkoutModal.innerHTML = '<div class=\"modal-content\">  <div class=\"modal-header\">    <span class=\"close\">&times;</span>    <h2>Check Out Book</h2>  </div>  <form action=\"\" method=\"\">    <ul>      <li>        <label for=\"book-checkout\">Please choose a book</label>        <input          type=\"text\"          list=\"books-checkout-list\"          name=\"book-checkout\"          id=\"book-checkout\"        />        <datalist id=\"books-checkout-list\"> </datalist>      </li>      <li>        <label for=\"checkout-person\">Name of borrower</label>        <input          type=\"text\"          name=\"checkout-person\"          id=\"checkout-person\"          disabled=\"true\"        />      </li>    </ul>    <div class=\"buttons\">      <div class=\"button\" id=\"submit-checkout-book\">Check Out</div>      <div class=\"button\" id=\"cancel-checkout-book\">Cancel</div>    </div>  </form></div>';\n  document.body.appendChild(checkoutModal);\n  const moreInfoModal = document.createElement('div');\n  moreInfoModal.classList.add('modal');\n  moreInfoModal.id = 'moreinfo-book-modal';\n  moreInfoModal.innerHTML = '<div class=\"modal-content\">  <div class=\"modal-header\">    <span class=\"close\">&times;</span>    <h2>More Info</h2>  </div>  <div class=\"book-info\">    <h2 style=\"text-align: center\">Currently held by:</h2>    <ul id=\"held-by\"></ul>  </div></div>';\n  document.body.appendChild(moreInfoModal);\n}\n\n//# sourceURL=webpack://library/./src/components/modals/Modals.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_MainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MainContent */ \"./src/components/MainContent.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _components_modals_Modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modals/Modals */ \"./src/components/modals/Modals.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/*\nLibrary System\nby Peyton Bechard\n\n\nLast Updated: 19 Sep 2022\n\n\nTODO:\n    - Add ability to edit\n    - Expand information to include ISBN, date registered, previous checkout list, page numbers, etc.\n    - Refactor repetition in table sorting methods\n    - Fix border of sticky thead where you can see little black spots above the headings\n    - Standardize modal sections\n    - List and sort authors by surname\n    - Adjust table column widths to better match contents\n    - Add more specific error messages in modals (i.e. not just red borders)\n    - Disallow duplicates to be added\n    - Make responsive\n*/\n\n\n\n\n\n(0,_components_Header__WEBPACK_IMPORTED_MODULE_0__.getHeader)();\n(0,_components_MainContent__WEBPACK_IMPORTED_MODULE_1__.getMainContent)();\n(0,_components_Footer__WEBPACK_IMPORTED_MODULE_2__.getFooter)(); // FIXME:\n\n(0,_components_modals_Modals__WEBPACK_IMPORTED_MODULE_3__.getModals)();\n\n//# sourceURL=webpack://library/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --green: rgb(67, 163, 93);\\n    --blue: rgb(52, 125, 235);\\n}\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\ninput {\\n    border: 1px solid rgb(190,190,190, 0.5);\\n    min-width: 200px;\\n    height: 25px;\\n    border-radius: 8px;\\n    padding: 0 10px;\\n}\\n\\nbody {\\n    height: 100vh;\\n    width: 100vw;\\n    overflow: hidden;\\n}\\n\\nhtml {\\n    font-family: sans-serif;\\n}\\n\\nheader {\\n    height: 20vh;\\n    width: 100vw;\\n    background-color: rgb(67, 163, 93);\\n    color: white;\\n    \\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\nheader img {\\n    height: 40px;\\n    margin-right: 20px;\\n}\\n\\nsection {\\n    height: 75vh;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\nsection .filters {\\n    height: 10vh;\\n    width: 100%;\\n    padding: 20px;\\n    text-align: center;\\n    font-weight: bold;\\n\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n}\\n\\n.filters button {\\n    background-color: var(--blue);\\n    border: none;\\n    border-radius: 8px;\\n    padding: 10px 30px;\\n    color: white;\\n    font-weight: bold;\\n    margin: 0 10px;\\n    cursor: pointer;\\n}\\n\\n.filters button:hover {\\n    opacity: 0.7;\\n    transform: scale(1.02);\\n}\\n\\n.filters button:active {\\n    opacity: 0.9;\\n    transform: scale(1.05);\\n}\\n\\n.search-area {\\n    display: flex;\\n    align-items: center;\\n    gap: 5px;\\n}\\n\\n#book-search {\\n    width: 32vh;\\n    height: 25px;\\n    border-radius: 8px;\\n    border-color: black;\\n    padding: 0 10px;\\n}\\n\\n.books-list {\\n    height: 60vh;\\n    overflow-y: scroll;\\n}\\n\\nthead {\\n    position: sticky;\\n    top: 0;    \\n}\\n\\nfooter {\\n    height: 5vh;\\n    width: 100vw;\\n    background-color: rgb(190,190,190);\\n    color: white;\\n    \\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n\\n    font-weight: bold;\\n}\\n\\ntable {\\n    border-collapse: collapse;\\n    border: 2px solid rgb(200,200,200);\\n    letter-spacing: 1px;\\n    font-size: 0.8rem;\\n}\\n\\ntr td:first-child img {\\n    height: 15px;\\n    margin-right: 5px;\\n}\\n\\ntr td:last-child img {\\n    padding: 0 20px;\\n    cursor: pointer;\\n}\\n\\n\\ntr img:hover {\\n    opacity: 0.7;\\n    transform: scale(1.1);\\n\\n}\\ntr img:active {\\n    opacity: 0.9;\\n    transform: scale(1.15);\\n}\\n\\ntd, th {\\n    border: 1px solid rgb(190,190,190);\\n    padding: 10px 20px;\\n    width: calc((80vw/6))\\n}\\n\\nth {\\n    background-color: rgb(235,235,235);\\n}\\n\\ntd {\\n    text-align: center;\\n}\\n\\ntr:nth-child(even) td {\\n    background-color: rgb(250,250,250);\\n}\\n\\ntr:nth-child(odd) td {\\n    background-color: rgb(245,245,245);\\n}\\n\\nth img {\\n    position: relative;\\n    top: 5px;\\n    height: 20px;\\n    cursor: pointer;\\n}\\n\\n\\n\\n\\n\\n/* MODALS */\\n\\n/* The Modal (background) */\\n.modal {\\n    display: none; \\n    position: fixed; \\n    z-index: 1; \\n    left: 0;\\n    top: 0;\\n    width: 100%; \\n    height: 100%; \\n    overflow: auto; \\n    background-color: rgba(0,0,0,0.4); \\n\\n}\\n\\n  /* Modal Content Box */\\n.modal-header {\\n    padding: 20px 30px;\\n    text-align: center;\\n    background-color: var(--blue);\\n    color: white;    \\n    border-radius: 12px 12px 0 0;\\n    margin-bottom: 20px;\\n}\\n\\n.modal-content {\\n    background-color: #fefefe;\\n    margin: 15% auto; \\n    border: 1px solid #888;\\n    width: 30%;\\n    border-radius: 12px;\\n}\\n\\n.modal-content li {\\n    list-style: none;\\n    padding: 10px;\\n\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.modal-content form label {\\n    min-width: 100px;\\n}\\n\\n#add-existing-book-modal .modal-content li,\\n#remove-book-modal .modal-content li,\\n#return-book-modal .modal-content li,\\n#checkout-book-modal .modal-content li {\\n    list-style: none;\\n    padding: 10px;\\n    text-align: center;\\n\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    gap: 10px;\\n}\\n\\n#add-existing-book-modal .modal-content form label,\\n#remove-book-modal .modal-content form label,\\n#return-book-modal .modal-content li,\\n#checkout-book-modal .modal-content li {\\n    min-width: 200px;\\n}\\n\\n\\n.modal-content .buttons {\\n    display: flex;\\n    justify-content: space-around;\\n    padding: 10px;\\n    margin-top: 20px;\\n}\\n\\n.modal-content .button {\\n    background-color: var(--blue);\\n    border: none;\\n    border-radius: 8px;\\n    padding: 10px 30px;\\n    color: white;\\n    font-weight: bold;\\n    margin: 0 10px;\\n    cursor: pointer;\\n}\\n\\n.modal-content .button:hover {\\n    opacity: 0.7;\\n    transform: scale(1.02);\\n}\\n\\n.modal-content .button:active {\\n    opacity: 0.9;\\n    transform: scale(1.05);\\n}\\n\\n.close {\\n    color: #aaa;\\n    float: right;\\n    font-size: 28px;\\n    font-weight: bold;\\n    position: relative;\\n    top: -20px;\\n    right: -20px;\\n}\\n\\n.close:hover,\\n.close:focus {\\n    color: black;\\n    text-decoration: none;\\n    cursor: pointer;\\n}\\n\\n#held-by {\\n    height: 30vh;\\n    overflow: scroll;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://library/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://library/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://library/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://library/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/img/down-arrow.svg":
/*!********************************!*\
  !*** ./src/img/down-arrow.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3497bd64f93b4d706808.svg\";\n\n//# sourceURL=webpack://library/./src/img/down-arrow.svg?");

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b963b93d6042c11cb17d.svg\";\n\n//# sourceURL=webpack://library/./src/img/logo.svg?");

/***/ }),

/***/ "./src/img/search.svg":
/*!****************************!*\
  !*** ./src/img/search.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c95e853cf5a1eedd6e2.svg\";\n\n//# sourceURL=webpack://library/./src/img/search.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;