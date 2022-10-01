// Services
import Play from './services/Play.js';


// Elements
const $adminForm = document.querySelector('.admin__form');
const $adminFormInputs = $adminForm.querySelectorAll('.admin__form-input');
const $adminPlayListContainer = document.querySelector('.admin__play-list-container');

// Event listners
$adminForm.addEventListener('submit', handleFormSubmit);
$adminFormInputs.forEach(($adminFormInput) => {
  $adminFormInput.addEventListener('input', handleInput);
});

// Data
const playData = {};

// Event listener fucntions
async function handleFormSubmit(e) {
  e.preventDefault();
  const data = await Play.createPlays(playData);
}

function handleInput(e) {
  playData[e.target.name] = e.target.value;

  console.log(playData);
}

// Functions
async function handleGetPlays() {
  const data = await Play.getPlays();
  console.log(data);
  renderData(data);
}



function renderData(data) {
    \
  $adminPlayListContainer.innerHTML = JSON.stringify(data);






}

handleGetPlays();
