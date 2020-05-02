// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
function check() {
    checkUserName();
    checkEmail();
    checkPassword();
}


function checkUserName() {
    var username = document.getElementById("usertext").value;
    var pattern = /^[a-z]{8,14}$/gi;
    var p = document.createElement('p');
    var name_error = document.getElementById("name_error");
    if (pattern.test(username)) {
        var textnode = document.createTextNode("true");
        p.appendChild(textnode);
        name_error.appendChild(p);
    }
    else {
        var textnode = document.createTextNode("false");
        p.appendChild(textnode);
        name_error.appendChild(p);
    }
}




// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail() {
    var mailId = document.getElementById("emailtext").value;
    var pattern = /^[a-z]+[0-9]+[,]?[@]gmail.com$/gi;
    var p = document.createElement('p');
    var email_error = document.getElementById("email_error");

    if (pattern.test(mailId)) {
        var textnode = document.createTextNode("true");
        p.appendChild(textnode);
        email_error.appendChild(p);
    }
    else {
        var textnode = document.createTextNode("false");
        p.appendChild(textnode);
        email_error.appendChild(p);
    }


}


// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword() {
    var password = document.getElementById("passwordtext").value;
    var pattern = /(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)(?=.*[@]+|[_]+|[#]|[%]|[^]+)/g;

    var p = document.createElement('p');
    var email_error = document.getElementById("password_error");

    if (pattern.test(password)) {
        var textnode = document.createTextNode("true");
        p.appendChild(textnode);
        email_error.appendChild(p);
    }
    else {
        var textnode = document.createTextNode("false");
        p.appendChild(textnode);
        email_error.appendChild(p);
    }

}