"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
function GetAllBooks() {
    var books = [
        {
            id: 1, title: "B1", author: "A1", available: true, category: enums_1.Category.Fiction
        },
        {
            id: 2, title: "B2", author: "A2", available: true, category: enums_1.Category.History
        },
        {
            id: 3, title: "B3", author: "A3", available: true, category: enums_1.Category.Poetry
        },
        {
            id: 4, title: "B4", author: "A4", available: true, category: enums_1.Category.Fiction
        }
    ];
    return books;
}
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books:' + numberOfBooks);
    console.log('First available:' + firstAvailable);
}
function GetBookTitleByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log('Getting books in category: ' + enums_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookByID(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id == id; })[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomre(name, age, city) {
    console.log('Creating Customer', name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}
function CheckoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for: ' + customer);
    var booksCheckOuts = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = GetBookByID(id);
        if (book.available) {
            booksCheckOuts.push(book.title);
        }
    }
    return booksCheckOuts;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author == bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available == bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
//**********************
var inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K&R', available: true, category: enums_1.Category.Software },
    { id: 11, title: 'C#', author: 'Nitish', available: true, category: enums_1.Category.Software },
    { id: 12, title: 'Java', author: 'PD', available: true, category: enums_1.Category.Software },
    { id: 13, title: 'Node', author: 'Nitu', available: true, category: enums_1.Category.Software }
];
// let purgedBooks: Array<Book> = Purge<Book>(inventory);
// purgedBooks.forEach(book => console.log(book.title));
// let purgedNums: Array<number> = Purge<number>([1,2,3,4]);
// console.log(purgedNums); 
//# sourceMappingURL=app.js.map