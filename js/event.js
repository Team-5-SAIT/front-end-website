//Js script file was specifically designed to validate the form element on the register Register page.

// Creating a function to validate the user Postal code input...created by 'Oghenegare Uti, Dzianis Tsishchenka, and Mark Tierney.

function myOnFocusFunction(pform) {
    document.getElementById('pform').style.display= 'contents'
         }

function myBlurFunction(pform) {
document.getElementById('pform').style.display= 'none'}

function checkPostal(mypostal) {
    var regex = new RegExp(/^[A-Z]\d[A-Z] ?\d[A-Z]\d$/i);
    if (regex.test(mypostal.value))
        return true;
    else return false;
}


/*function isPostalCode(str){
    return "/^[A-Z]\d[A-Z] ?\d[A-Z]\d$i/".test(str);

function validateInput(mypostal){
    console.log("validateInput");
    let postalCode = document.getElementById('').value;
    let message = "";
    if (isPostalCode(postalCode)){
        message = "Postal code is valid";
    } else {
        message = "Invalid Postal code";
    }

    document.getElementById("msg").innerHTML = message;
}
}*/

//Creating a fucntion to validate other user input on the form.
const name = document.getElementById('myname');
const name = document.getElementById('mylname');
const phone = document.getElementById('myaddress');
const email = document.getElementById('mycity');
const province = document.getElementById('myprovince');
const phone = document.getElementById('myphone');
const email = document.getElementById('myemail');

const form = document.getElementById('form');

const errorMessage = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (myname.value === '' || myname.value == null ){
        messages.push('Name is required!')
    }

    if (mylname.value === '' || mylname.value == null ){
        messages.push('last name is required!')
    }

    if (myemail.value === '' || myemail.value == null ){
        messages.push('Email is required!')
    }

    if (myaddress.value === '' || myaddress.value == null ){
        messages.push('Address is required!')
    }

    if (mycity.value === '' || mycity.value == null ){
        messages.push('City is required!')
    }

    if (myphone.value === '' || myphone.value == null ){
        messages.push('Phone number is required!')
    }

    if (myprovince.value === '' || myprovince.value == null ){
        messages.push('Please select a province!')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorMessage.innerText = messages.join(', ')
    }
  

})

//section for user-login form
const username = document.getElementById('myuser');
const userpass = document.getElementById('mypassword');
form.addEventListener('sign-up', (e) => {
    let messages = []
    if (myuser.value === '' || myuser.value == null ){
        messages.push('username is required!')
    }


    if (mypassword.value === '' || mypassword.value == null ){
        messages.push('Please enter password!')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorMessage.innerText = messages.join(', ')
    }
  

})

//section for user-login form
const username = document.getElementById('myuser');
const username = document.getElementById('mypassword');
form.addEventListener('sign-up', (e) => {
    let messages = []
    if (myuser.value === '' || myuser.value == null ){
        messages.push('username is required!')
    }


    if (mypassword.value === '' || mypassword.value == null ){
        messages.push('Please enter password!')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorMessage.innerText = messages.join(', ')
    }
  

})





/*const errorElement = document.getElementById('error');

const form = document.getElementById('form');

const myname= document.getElementById('myname');
myname.addEventListener("focus", () => { 
    console.log("Name must be longer 3 characters!")});


const myemail= document.getElementById('myemail');
myemail.addEventListener("focus", () => { 
    console.log("Please enter a valid email!")});

const mypassword= document.getElementById('mypassword');
mypassword.addEventListener("focus", () => { 
    console.log("Password must be longer than 8 characters, and less than 20 characters!")});

const mypostal= document.getElementById('mypostal');
mypostal.addEventListener("focus", () => { 
    console.log("Please enter a valid postal code!")});
        


    Form.addEventListener('submit', (e) => {
        if (name.value=== ''|| name.value== null){messages.push('Name is required')}
        if (password.value.length <= 8) {messages.push("Password must be longer than 8 characters")}
        if(password.value.length>= 20){messages.push("password must be less than 20 characters")}
        if(messages.length > 0){e.preventDefault()errorElement.InnerText= messages.join(',')}
    }) */