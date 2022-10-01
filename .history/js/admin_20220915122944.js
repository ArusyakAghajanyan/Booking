//Services

import Play from "./services/PLay";



//Elements
const $adminForm = document.querySelector('.admin__form');
const $adminFormInputs = $adminForm.querySelectorAll('.admin__form-input');


//Eventlistners
$adminForm.addEventListener('submit', handleFormSubmit);
console.log($adminFormInputs);
$adminFormInputs.forEach(($adminFormInput) => {
  $adminFormInput.addEventListener('input', handleInput);
});

//Data
const playData = {};

//Event listeners functions
async function handleFormSubmit(e) {
    console.log(e);
   e.preventDefault();
   const data = await Play.createPlay({
    name: 'Spente le stelle',
    date: new Date(),
    image: 'test-image',
});
}

function handleInput(e) {
    console.log(e.target.name, e.target.value);
    playData[e.target.name] = e.target.value;
}