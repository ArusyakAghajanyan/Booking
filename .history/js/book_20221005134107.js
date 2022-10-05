// Services
import Play from './services/Play.js';
import Booking from './services/Booking.js';

//Helpers
import setHtmlFromArray from './helpers/setHtmlFromArray.js'
import markupCreators from './helpers/markupCreators.js'

// Elements

const $adminPlayListContainer = document.querySelector('.admin__play-list-container');


// Data
const playData = {};
let renderedData = [];

// Event listener fucntions

function cardprocess() {
  const $cardsBookButtons = document.querySelectorAll('.cards-book-button');
  $cardsBookButtons.forEach(($cardsBookButton) => {
    $cardsBookButton.addEventListener('click', () => {
      const bookedCard = renderedData.find(item => )
    })
  })
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
    console.log(data)
  setHtmlFromArray($adminPlayListContainer, data, markupCreators.playCard, "books");

};

handleGetPlays()

