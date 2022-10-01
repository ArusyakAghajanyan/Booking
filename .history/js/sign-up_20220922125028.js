


// Elements
const $loginTextInputs = document.querySelectorAll('.login__text-input');
console.log($loginTextInputs);

// Event listners
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