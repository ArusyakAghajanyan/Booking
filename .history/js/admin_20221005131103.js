// Services
import Play from './services/Play.js';
import Booking from './services/Booking.js';

//Helpers
import setHtmlFromArray from './helpers/setHtmlFromArray.js'
import markupCreators from './helpers/markupCreators.js'

// Elements
const $adminForm = document.querySelector('.admin__form');
const $adminFormInputs = $adminForm.querySelectorAll('.admin__form-input');
const $adminPlayListContainer = document.querySelector('.admin__play-list-container');
const $adminFormUpload = $adminForm.querySelector('.admin__form-upload');
const $adminFormUploadImage = document.querySelector('.admin__form-uploaded-image');


// Event listners
$adminForm.addEventListener('submit', handleFormSubmit);
$adminFormInputs.forEach(($adminFormInput) => {
$adminFormInput.addEventListener('input', handleInput);
$adminFormUpload.addEventListener('change', handleUpload);

});

// Data
let playData = {};
let renderedData = [];

// Event listener fucntions
async function handleFormSubmit(e) {
  e.preventDefault();
  let data;
  console.log(656456, playData);
  if (playData.id) {
    data = await Play.editPlay(playData.id, playData);
  } else {
    data = await Play.createPlays(playData);
  }  
  renderData(data);
  cardProcess();
}

function handleInput(e) {
  playData[e.target.name] = e.target.value;
  console.log(playData);
}

function handleUpload(e) {   
    console.dir(e.target);
    const { files } = e.target;

    if(files[0]) {
        const fileReader = new FileReader();
        fileReader.addEventListener('load', (e) => {
            $adminFormUploadImage.src = e.target.result;
            playData.image = e.target.result;
          console.log(e.target)
        });
        fileReader.readAsDataURL(files[0]);       
        console.log(files[0])
    }
  }

// Functions
async function handleGetPlays() {
  const data = await Play.getPlays();
  console.log(data);
  renderData(data);
  
}

function renderData(data,booksData) {
  setHtmlFromArray($adminPlayListContainer, data, markupCreators.playCard);
  setHtmlFromArray($adminPlayBookContainer, booksData, markupCreators.);
  renderedData = data;
  cardProcess();
  console.log(renderedData);
};

handleGetPlays()


function cardProcess() {
  const cards = document.querySelectorAll('.cards-delete-button');// [k1,k2,k3]
  const cardsEdit = document.querySelectorAll('.cards-edit-button');// [k1,k2,k3]  
  
  console.log(cards);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', async (e) => {
    let deleteId = e.target.dataset.id;
    console.log(e.target.dataset);
    const data = await Play.deletePlay(deleteId);
    renderData(data);
  });
}
for (let i = 0; i < cardsEdit.length; i++) {  
  cardsEdit[i].addEventListener('click', async (e) => {
    window.scrollTo(0, 0);
    const editId = e.target.dataset.id;
    console.log(e.target.dataset.id)
    console.log(renderedData);   
    const editedCard = renderedData.find(item => item.id ===  editId);
    playData = editedCard;   
    console.log(editedCard);
    $adminFormInputs.forEach(($adminFormInput) => {
      $adminFormInput.value = editedCard[$adminFormInput.name];      
    }); 
    $adminFormUploadImage.src = editedCard.image; 
     
    console.log(111111, editedCard);
  });
}

}