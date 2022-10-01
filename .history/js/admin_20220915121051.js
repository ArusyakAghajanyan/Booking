//Services



//Elements
const $adminForm = document.querySelector('.admin__form');
const $adminFormInputs = $adminForm.querySelectorAll('.admin__form-input');


//Eventlistners
$adminForm.addEventListener('submit', handleFormSubmit);

//Data
const thea

//Event listeners functions
function handleFormSubmit(e) {
    console.log(e);
   e.preventDefault();
}