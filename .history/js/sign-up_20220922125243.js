import User from './services/User.js';


// Elements
const $loginTextInputs = document.querySelectorAll('.login__text-input');
console.log($loginTextInputs);
const $loginCenterForm = document.querySelector('.login__center-form');

// Event listners
$loginCenterForm.addEventListener('su')
$loginTextInputs.forEach(($loginTextInput) => {
    $loginTextInput.addEventListener('input', handleInput)
})

//Data
const userData = {};


//Event listeners function 

function handleInput(e) {
    userData[e.target.name] = e.target.value;
    console.log(userData)
}