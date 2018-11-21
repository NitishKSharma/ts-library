function GetAllBooks()
{
    let books = [
        {
            title: "B1", author: "A1", available: true, category: Category.Fiction
        },
        {
            title: "B2", author: "A2", available: false, category:  Category.History
        },
        {
            title: "B3", author: "A3", available: false, category: Category.Poetry
        }
    ];

    return books;
}


function LogFirstAvailable(books): void
{
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books)
    {
        if (currentBook.available)
        {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total Books:' + numberOfBooks);
    console.log('First available:' + firstAvailable);
   
}

enum Category { Biography, Poetry, Fiction, History, Children }

function GetBookTitleByCategory(categoryFilter: Category): Array<string>
{
    console.log('Getting books in category: ' + Category[categoryFilter]);

    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    for (let currentBook of allBooks)
    {
        if (currentBook.category === categoryFilter)
        {
            filteredTitles.push(currentBook.title);
        }    
    }

    return filteredTitles;
}

function LogBookTitles(titles: string[]): void
{
    for (let title of titles)
    {
        console.log(title);
    }
}

const poetryBooks = GetBookTitleByCategory(Category.Poetry);
LogBookTitles(poetryBooks);

const allBooks = GetAllBooks();
LogFirstAvailable(allBooks);

console.log("hello world");