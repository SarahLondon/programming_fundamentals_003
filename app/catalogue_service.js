// eslint-disable-next-line no-unused-vars
const catalogue = [
  {title: "The Catcher in the Rye", author: "J.D. Salinger", quantity: 10},
  {title: "Dracula", author: "Bram Stoker", quantity: 0},
  {title: "Between the Assassinations", author: "Aravind Adiga", quantity: 9},
  {title: "Wolf Hall", author: "Hilary Mantel", quantity: 33},
  {title: "Bring Up The Bodies", author: "Hilary Mantel", quantity: 31},
  {title: "A Place of Greater Safety", author: "Hilary Mantel", quantity: 11},
  {title: "Giving Up the Ghost", author: "Hilary Mantel", quantity: 8},
  {title: "The Assassination of Margaret Thatcher", author: "Hilary Mantel", quantity: 43},
  {title: "The Yellow Wallpaper", author: "Charlotte Perkins Gilman", quantity: 12},
  {title: "Conversations With Friends", author: "Sally Rooney", quantity: 1},
  {title: "Normal People", author: "Sally Rooney", quantity: 2},
  {title: "Everything I Never Told You", author: "Celeste Ng", quantity: 6},
  {title: "2666", author: "Robert Bolaño", quantity: 17},
  {title: "By Night In Chile", author: "Robert Bolaño", quantity: 8},
  {title: "A Tale of Two Cities", author: "Charles Dickens", quantity: 3},
  {title: "Oliver Twist", author: "Charles Dickens", quantity: 7},
  {title: "Great Expectations", author: "Charles Dickens", quantity: 1},
  {title: "The Blind Assassin", author: "Margaret Atwood", quantity: 8},
  {title: "Why Be Happy When You Could Be Normal?", author: "Jeanette Winterson", quantity: 19},
  {title: "The Origin of Species", author: "Charles Darwin", quantity: 50}
];

function countBooksByAuthor(author) {
  let booksByAuthor = 0;
  for (let i = 0; i < catalogue.length; i++) {
   if (catalogue[i].author.toLowerCase() === author.toLowerCase()) {
    booksByAuthor++;
     }
   }
   return booksByAuthor;
}

function checkBookByTitle(title) {
  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].title.toLowerCase() === title.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function countBooksByFirstLetter(letter) {
  let numberOfBooks = 0;
 for (let i = 0; i < catalogue.length; i++) {
  if (catalogue[i].title.charAt(0) === letter.toUpperCase()) {
    numberOfBooks++;
    }
  }
  return numberOfBooks;
}

function getQuantity(title) {
  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].title.toLowerCase() === title.toLowerCase()) {
      return catalogue[i].quantity;
    }
  }
  return(0);
}

function getBooksByAuthor(author) {
  let booksByAuthor = [];
  for (let i = 0; i < catalogue.length; i++) {
   if (catalogue[i].author.toLowerCase() === author.toLowerCase()) {
    booksByAuthor.push(catalogue[i]);
     }
   }
   return booksByAuthor;
}

function checkQuantity(title, quantity) {
  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].title.toLowerCase() === title.toLowerCase()) {
      if (catalogue[i].quantity >= quantity) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};
