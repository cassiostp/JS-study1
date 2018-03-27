function attemptLogin() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    if (username.value === "teste" && password.value === "pass"){
        alert("Login successful!")
        completeLogin();
    }
    else if (username.value === "" || password.value === ""){
        alert("Please fill all the fields.");
        username.value = "";
        password.value = "";
    }
    else {
        alert("Login failed. Wrong user or password.");
        username.value = "";
        password.value = "";
    }
}

function completeLogin(){
    var divs = document.getElementsByTagName("div");
    var h1 = document.getElementsByTagName("h1")[0];
    Object.values(divs).forEach(div => div.parentNode.removeChild(div));
    h1.textContent = "Books List";
    showBooksList();
}

function showBooksList(){
    var table = document.createElement("table");
    var thTitle = document.createElement("th");
    var thAuthor = document.createElement("th");
    table.setAttribute("id", "books-list");
    document.body.appendChild(table);
    thTitle.appendChild(document.createTextNode("Book Title"));
    table.appendChild(thTitle);
    thAuthor.appendChild(document.createTextNode("Author Name"));
    table.appendChild(thAuthor);
    for (let index = 0; index < booksList.length; index++) {
        const element = booksList[index];
        table.insertRow();
        var tdTitle = document.createElement("td");
        tdTitle.appendChild(document.createTextNode(element[0]));
        table.getElementsByTagName("tr")[index].appendChild(tdTitle);
        var tdAuthor = document.createElement("td");
        tdAuthor.appendChild(document.createTextNode(element[1]));
        table.getElementsByTagName("tr")[index].appendChild(tdAuthor);
    }

}

var loginButton = document.getElementById('login-button');

loginButton.addEventListener("click", function() {
    attemptLogin();
});

document.getElementById('password').addEventListener("keydown", function(event) {
    if (event.keyCode === 13){
        attemptLogin();
    }
});

var booksList = [["JS para leigos", "VP"], ["Harry Potter", "JK"], ["Game of thrones", "Aquele gordo"]];