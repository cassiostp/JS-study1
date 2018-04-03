window.onload = function(){
    let form = document.querySelector('form');
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        Authenticator.loginRequest(form, enterBooksList);
    });
};