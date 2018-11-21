function GetAllBooks() {
    var books = [
        {
            title: "B1", author: "A1", available: true, category: Category.Fiction
        },
        {
            title: "B2", author: "A2", available: false, category: Category.History
        },
        {
            title: "B3", author: "A3", available: false, category: Category.Poetry
        }
    ];
    return books;
}
function LogFirstAvailable(books) {
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
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
function GetBookTitleByCategory(categoryFilter) {
    console.log('Getting books in category: ' + Category[categoryFilter]);
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
var poetryBooks = GetBookTitleByCategory(Category.Poetry);
LogBookTitles(poetryBooks);
var allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
console.log("hello world");
//# sourceMappingURL=app.js.map