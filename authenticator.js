class Authenticator {  
    static attemptLogin() {
        if (username.value === "teste" && password.value === "pass"){
            console.log("Login successful!");
            Authenticator.completeLogin();
        }
        else if (username.value === "" || password.value === ""){
            console.log("Please fill all the fields.");
            username.value = "";
            password.value = "";
            username.focus();
        }
        else {
            console.log("Login failed. Wrong user or password.");
            username.value = "";
            password.value = "";
            username.focus();
        }
    }
    static completeLogin(){
        document.body.innerHTML = "";
        let h1 = document.createElement("h1");
        h1.textContent = "Books List";
        document.body.appendChild(h1);
        showBooksList();
        return true;
    }
}