class Authenticator {  
    static attemptLogin(username, password) {
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
}