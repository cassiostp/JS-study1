window.onload = function(){
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");

    document.querySelector("#login-button").addEventListener("click", function() {
        if (Authenticator.attemptLogin(username, password)){
            enterBooksList();
        }
    });

    document.querySelector("#password").addEventListener("keydown", function(event) {
        if (event.keyCode === 13){
            if (Authenticator.attemptLogin(username, password)){
                enterBooksList();
            }
        }
    });

    document.querySelector("#username").addEventListener("keydown", function(event) {
        if (event.keyCode === 13){
            if (Authenticator.attemptLogin(username, password)){
                enterBooksList();
            }
        }
    });
};