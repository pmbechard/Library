// SEARCH BAR
const searchBar = document.getElementById('book-search');
searchBar.addEventListener('keyup', () => {
  const uniqueBooks = [...new Set(myLib.inventory)];
  const matchingBooks = uniqueBooks.filter((item) => {
    const search = searchBar.value.toLowerCase();
    return (
      item.title.toLowerCase().includes(search) ||
      item.author.toLowerCase().includes(search) ||
      item.publisher.toLowerCase().includes(search) ||
      item.year.includes(search)
    );
  });
  myLib.updateTable(matchingBooks);
});
