// Services
import Play from './services/Play.js';

//Helpers
import setHtmlFromArray from './helpers/setHtmlFromArray.js'
import markupCreators from './helpers/markupCreators.js'

// Elements
const $adminForm = document.querySelector('.admin__form');
const $adminFormInputs = $adminForm.querySelectorAll('.admin__form-input');
const $adminPlayListContainer = document.querySelector('.admin__play-list-container');

// Event listners
$adminForm.addEventListener('submit', handleFormSubmit);
$adminFormInputs.forEach(($adminFormInput) => {
$adminFormInput.addEventListener('input', handleInput);
$adminFormUpload.addEventListener('change', handleUpload);

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
function handleUpload(e) {
  
  
    console.log(e.target);
  }

// Functions
async function handleGetPlays() {
  const data = await Play.getPlays();
  console.log(data);
  renderData(data);
}

function renderData(data) {
    console.log(data)
//   let card = `
//   <div class="cardDiv">
//   <img src="" alt="">
//   <label for="">${data[-NCB2hL2nsy7S9-io_p6].name}</label>
// </div>
  setHtmlFromArray($adminPlayListContainer, data, markupCreators.playCard);

};

handleGetPlays()
