class Authenticator {  
    static loginRequest(form, fun) {
        let xhr = new XMLHttpRequest();
        let formData = new FormData(form);
        console.log(formData.entries());
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                fun();
            }
        };
        xhr.open('POST', '/', true);
        xhr.send(formData);
    }
}