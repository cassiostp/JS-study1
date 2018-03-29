function generateBooks(){
    let list = [new Book("Java para leigos", "VP"),
    new Book("Harry Potter", "JK"),
    new Book("Game of Thrones", "Aquele gordo")];
    return list;
}

function clearScreen(){
    document.body.innerHTML = "";
}

function enterBooksList(){
    clearScreen();
    let books = generateBooks();
    let booksList = new List(books, ["Book Title", "Author"]);
    booksList.drawTable(document.body, "Books List");
    booksList.createTableListeners();
}