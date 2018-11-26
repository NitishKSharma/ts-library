import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import { CalculateLateFee as CalcFee, MaxBooksAllowed, Purge } from './lib/utilityFunctions';
import refBook from './encyclopedia';
import Shelf from './shelf';


function GetAllBooks(): Book[] {
    let books = [
        {
            id: 1, title: "B1", author: "A1", available: true, category: Category.Fiction
        },
        {
            id: 2, title: "B2", author: "A2", available: true, category: Category.History
        },
        {
            id: 3, title: "B3", author: "A3", available: true, category: Category.Poetry
        },
        {
            id: 4, title: "B4", author: "A4", available: true, category: Category.Fiction
        }
    ];

    return books;
}


function LogFirstAvailable(books = GetAllBooks()): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total Books:' + numberOfBooks);
    console.log('First available:' + firstAvailable);

}

function GetBookTitleByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    console.log('Getting books in category: ' + Category[categoryFilter]);

    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

function GetBookByID(id: number): Book {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id == id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

function CreateCustomre(name: string, age?: number, city?: string): void {
    console.log('Creating Customer', name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log('Checking out books for: ' + customer);

    let booksCheckOuts: string[] = [];

    for (let id of bookIDs) {
        let book = GetBookByID(id);
        if (book.available) {
            booksCheckOuts.push(book.title);
        }
    }
    return booksCheckOuts;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if (typeof bookProperty == 'string') {
        for (let book of allBooks) {
            if (book.author == bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    else if (typeof bookProperty == 'boolean') {
        for (let book of allBooks) {
            if (book.available == bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

function PrintBook(book: Book): void {
    console.log(book.title + ' by ' + book.author);
}

//**********************

let inventory: Array<Book> =
    [
        { id: 10, title: 'The C Programming Language', author: 'K&R', available: true, category: Category.Software },
        { id: 11, title: 'C#', author: 'Nitish', available: true, category: Category.Software },
        { id: 12, title: 'Java', author: 'PD', available: true, category: Category.Software },
        { id: 13, title: 'Node', author: 'Nitu', available: true, category: Category.Software }
    ];

// let purgedBooks: Array<Book> = Purge<Book>(inventory);
// purgedBooks.forEach(book => console.log(book.title));

// let purgedNums: Array<number> = Purge<number>([1,2,3,4]);
// console.log(purgedNums); 