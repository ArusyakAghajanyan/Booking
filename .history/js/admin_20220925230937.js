// Services
import Play from './services/Play.js';

//Helpers
import setHtmlFromArray from './helpers/setHtmlFromArray.js'
import markupCreators from './helpers/markupCreators.js'

// Elements
const $adminForm = document.querySelector('.admin__form');
const $adminFormInputs = $adminForm.querySelectorAll('.admin__form-input');
const $adminPlayListContainer = document.querySelector('.admin__play-list-container');
// const $adminFormUpload = $adminForm.querySelector('.admin__form-upload');
const $adminFormUploadImage = document.querySelector('.admin__form-uploaded-image');

// Event listners
$adminForm.addEventListener('submit', handleFormSubmit);
$adminFormInputs.forEach(($adminFormInput) => {
$adminFormInput.addEventListener('input', handleInput);
$adminFormUpload.addEventListener('change', handleUpload);

// });

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

function renderData(data) {
    console.log(data)
  setHtmlFromArray($adminPlayListContainer, data, markupCreators.playCard);

};

handleGetPlays()
