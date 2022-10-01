// Services
import Play from './services/PLay.js';

// Elements
const $testButton = document.querySelector('.test-button');
console.log($testButton);

//Event listner
$testButton.addEventListener('click', () => {

})

//Event listener functions
async function handleCreatePost() {
   const data = await Play.createPlay({
       name: 'Spente le ste'
   });
}