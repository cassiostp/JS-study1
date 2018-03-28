window.onload = function(){
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");

    document.querySelector("#login-button").addEventListener("click", function() {
        if (Authenticator.attemptLogin(username, password)){
            showBooksList();
        }
    });

    document.querySelector("#password").addEventListener("keydown", function(event) {
        if (event.keyCode === 13){
            if (Authenticator.attemptLogin(username, password)){
                showBooksList();
            }
        }
    });

    document.querySelector("#username").addEventListener("keydown", function(event) {
        if (event.keyCode === 13){
            if (Authenticator.attemptLogin(username, password)){
                showBooksList();
            }
        }
    });
};

let booksList = [["JS para leigos", "VP"], ["Harry Potter", "JK"],
                ["Game of thrones", "Aquele gordo"]];

function showBooksList(){
    let table = document.createElement("table");
    let thTitle = document.createElement("th");
    let thAuthor = document.createElement("th");

    table.setAttribute("id", "books-list");
    document.body.appendChild(table);
    thTitle.appendChild(document.createTextNode("Book Title"));
    table.appendChild(thTitle);
    thAuthor.appendChild(document.createTextNode("Author Name"));
    table.appendChild(thAuthor);

    for (let index = 0; index < booksList.length; index++) {
        const element = booksList[index];
        table.insertRow();
        let tdTitle = document.createElement("td");
        tdTitle.appendChild(document.createTextNode(element[0]));
        table.getElementsByTagName("tr")[index].appendChild(tdTitle);
        let tdAuthor = document.createElement("td");
        tdAuthor.appendChild(document.createTextNode(element[1]));
        table.getElementsByTagName("tr")[index].appendChild(tdAuthor);
    }

    let addButton = document.createElement("button");
    let div = document.createElement("div");

    addButton.setAttribute("id", "add-button");
    addButton.appendChild(document.createTextNode("Add Book"));
    div.appendChild(addButton);
    document.body.appendChild(div);

    table.addEventListener("click", function(){
        alert("You clicked on the table.");
    });

    addButton.addEventListener("click", function(){
        loadAddBook();
    });
}

function loadAddBook(){
    let modal = document.createElement("div");
    let modalContent = document.createElement("div");
    let modalHeader = document.createElement("header");

    modal.setAttribute("id", "add-book");
    modal.setAttribute("class", "modal");
    modal.style.display = "block";

    modalHeader.setAttribute("class", "h-grey");

    modalContent.setAttribute("class", "modal-content");

    document.body.appendChild(modal);
}