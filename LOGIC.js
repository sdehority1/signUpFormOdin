function checkPassword(form) {
    password = form.password.value;
    passwordConfirm = form.passwordConfirm.value;

    // If password not entered
    if (password == '')
        alert ("Please enter a password.");
          
    // If confirm password not entered
    else if (passwordConfirm == '')
        alert ("Please confirm your password.");
          
    // If passwords are not the same
    else if (password != passwordConfirm) {
        alert ("Your passwords do not match. ")
    }

   // If passwords match
    else{
        alert("Success--welcome to the service!")
    }
}


