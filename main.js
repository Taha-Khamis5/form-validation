function validateForm() {
    var nameValue = document.getElementById("name").value;
    var gmailValue = document.getElementById("gmail").value;
    var phoneValue = document.getElementById("phone").value;
    var passwordValue = document.getElementById("password").value;
    var error = document.getElementById("error");
    var real = document.getElementById("real");

    if (nameValue.length < 1) {
        var xName = "please enter valid name";
        error.innerHTML = xName;
        return false;
    } else if (gmailValue.indexOf("@") == -1) {
        var xGmail = "please enter valid Gmail";
        error.innerHTML = xGmail;
        return false;
    } else if (phoneValue.length < 11) {
        var xphone = "please enter valid phone";
        error.innerHTML = xphone;
        return false;
    } else if (passwordValue.length < 10) {
        var xpassword = "please enter valid password";
        error.innerHTML = xpassword;
        return false;
    } else {
        // var yValid = "your information is valid";
        // real.innerHTML = yValid;
        alert("your information is valid")
        return true;
    }


    
}