import { Category } from './enums';
import { Book } from './interfaces';


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

function GetBookByID(id: number) {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id == id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

function CreateCustomre(name: string, age?: number, city?: string) : void
{
    console.log('Creating Customer', name);
    if(age)
    {
        console.log('Age: ' + age);        
    }
    if(city)
    {
        console.log('City: ' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]) : string[]
{
    console.log('Checking out books for: ' + customer);

    let booksCheckOuts : string[] = [];

    for(let id of bookIDs)
    {
        let book = GetBookByID(id);
        if(book.available)
        {
            booksCheckOuts.push(book.title);
        }        
    }
    return booksCheckOuts;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[]
{
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if(typeof bookProperty == 'string')
    {
        for(let book of allBooks)
        {
            if(book.author == bookProperty)
            {
                foundTitles.push(book.title);
            }
        }
    }

    else if(typeof bookProperty == 'boolean')
    {
        for(let book of allBooks)
        {
            if(book.available == bookProperty)
            {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

//**********************

let a2Books = GetTitles('A2');
a2Books.forEach(title => console.log(title));

// let myBooks: string[] = CheckoutBooks('Thorne', 3, 4);
// myBooks.forEach(title => console.log(title));

// LogFirstAvailable();

// let poetryBooks = GetBookTitleByCategory();
// poetryBooks.forEach(title => console.log(title));
// CreateCustomre('Nitish');
// CreateCustomre('PD', 0);
// CreateCustomre('PDU', 94, 'Toronto');

// let x:number;

// let IdGenerator : (chars: string, nums: number) => string;
// IdGenerator = CreateCustomerID;

// let myID: string = IdGenerator('nitish', 10);
// console.log(myID);

// const fictionBooks = GetBookTitleByCategory(Category.Fiction);
// fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));

// const allBooks = GetAllBooks();
// LogFirstAvailable(allBooks);

// console.log("hello world");