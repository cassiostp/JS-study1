const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/books-list.html'));
    console.log('works!');
});

app.post('/', function(req, res) {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

function attemptLogin(username, password) {
    if (username.value === "teste" && password.value === "pass"){
        console.log("Login successful!");
        return true;
    }
    else if (username.value === "" || password.value === ""){
        console.log("Please fill all the fields.");
        username.value = "";
        password.value = "";
        username.focus();
        return false;
    }
    else {
        console.log("Login failed. Wrong user or password.");
        username.value = "";
        password.value = "";
        username.focus();
        return false;
    }
}