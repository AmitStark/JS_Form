function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }


}
function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 2) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var address = document.forms['myForm']["faddress"].value;
    if (address.length < 5) {
        seterror("address", "*Address is too short");
        returnval = false;
    }

    if (address.length == 0) {
        seterror("address", "*Address cannot be empty!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length > 40) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var zipcode = document.forms['myForm']["fzipcode"].value;
    if (zipcode.length != 6) {
        seterror("zipcode", "*Zip Code must be of 6 digits !");
        returnval = false;
    }

    var username = document.forms['myForm']["fusername"].value;
    if (username.length < 6) {
        seterror("username", "*Length of username cannot be less than 6 !");
        returnval = false;
    }

    if (username.length > 8) {
        seterror("username", "*Length of username cannot be more than 8 !");
        returnval = false;
    }


    return returnval;
}
