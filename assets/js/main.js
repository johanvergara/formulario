const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordTwo = document.getElementById('passwordTwo');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

// Validation Form
function checkInputs(){
    // get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordTwoValue = passwordTwo.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, 'Completa el usuario');
    }else{
        setSuccessFor(username);
    }
    if(emailValue == ''){
        setErrorFor(email, 'Completa el correo electronico');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Correo Electronico Invalido');
    }else{
        setSuccessFor(email);
    }
    if(passwordValue === ''){
        setErrorFor(password, 'Completa la Contraseña');
    }else{
        setSuccessFor(password);
    }
    if(passwordTwoValue === ''){
        setErrorFor(passwordTwo, 'Completa la Contraseña');
    }else if(passwordValue !== passwordTwoValue){
        setErrorFor(passwordTwo, 'Las contraseñas no coinciden')
    }else{
        setSuccessFor(passwordTwo);
    }
}

// Validations Login
function checkInputs(){
    // get the values from the inputs
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue == ''){
        setErrorFor(email, 'Completa el correo electronico');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Correo Electronico Invalido');
    }else{
        setSuccessFor(email);
    }
    if(passwordValue === ''){
        setErrorFor(password, 'Completa la Contraseña');
    }else{
        setSuccessFor(password);
    }
}

// Show a success message

function setErrorFor(input, message){
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement; // .form-control
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}