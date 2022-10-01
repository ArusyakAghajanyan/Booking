// Services
import Play from './services/Play.js';

//Helpers
import setHtmlFromArray from './helpers/setHtmlFromArray.js'
import markupCreators from './helpers/markupCreators.js'

// Elements
// const $adminForm = document.querySelector('.admin__form');
const $adminPlayListContainer = document.querySelector('.admin__play-list-container');


// Event listners
// $adminForm.addEventListener('submit', handleFormSubmit);


// Data
const playData = {};

// Event listener fucntions
// async function handleFormSubmit(e) {
//   e.preventDefault();
//   const data = await Play.createPlays(playData);
// }

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
    console.log(data)
  setHtmlFromArray($adminPlayListContainer, data, markupCreators.playCard);

};

handleGetPlays()

// () => markupCreators.playCard(url.includes('index') ? url : `<button>book</button>`));