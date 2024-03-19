function Author(name, birthYear, nationality) {
  this.name = name;
  this.birthYear = birthYear;
  this.nationality = nationality;
}
function Book(title, author, genre, price) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.price = price;
}

Book.prototype.getBookInfo = function () {
  return `${this.title} by ${this.author.name} (${this.genre}) - $${this.price}`;
};

let author1 = new Author("George Orwell", 1903, "British");
let author2 = new Author("J.K. Rowling", 1965, "British");

let book1 = new Book("1984", author1, "Dystopian Fiction", 10.99);
let book2 = new Book(
  "Harry Potter and the Sorcerer's Stone",
  author2,
  "Fantasy",
  12.99
);
console.log(book1.getBookInfo());
console.log(book2.getBookInfo());
