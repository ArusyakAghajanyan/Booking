// Services
import Play from './services/PLay.js';

// Elements
const $testButton = document.querySelector('.test-button');
const $testButton1 = document.querySelector('.test-button1');
console.log($testButton);
console.log($testButton);
//Event listner
$testButton.addEventListener('click', handleCreatePost)

//Event listener functions
async function handleCreatePost(e) {
   const data = await Play.createPlay({
       name: 'Spente le stelle',
       date: new Date(),
       image: 'test-image',
   });
}