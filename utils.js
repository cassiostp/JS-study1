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
}

function createButton(btnClass, btnName){
    let button = document.createElement("button");
    button.setAttribute('class', btnClass);
    button.appendChild(document.createTextNode(btnName));
    return button;
}
function createModal(title){
    let modal = document.createElement('div');
    modal.setAttribute('class', 'modal');

    let modalContent = document.createElement('div');
    modalContent.setAttribute('class', 'modal-content');

    let modalTitle = document.createElement('h1');

    let span = document.createElement('span');
    span.setAttribute('class', 'close');
    span.appendChild(document.createTextNode('×'));

    let nameField = document.createElement('input');
    nameField.setAttribute('class', 'name');


    let confirmBtn = createButton('confirm-btn', 'Confirm');
    
    modalTitle.appendChild(document.createTextNode(title));
    modalContent.appendChild(span);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(confirmBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    setTimeout(() => {modal.style.opacity = 1;}, 1);
}
function closeModal(e){
    let modal = e.target.parentNode.parentNode;
    modal.style.opacity = 0;
    setTimeout(function(){modal.parentNode.removeChild(modal);}, 500);
}
