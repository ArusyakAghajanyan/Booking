// Services
import Play from './services/PLay.js';

// Elements
const $testButton = document.querySelector('.test-button');
const $testButton1 = document.querySelector('.test-button1');
console.log($testButton);
console.log($testButton1);
//Event listner
$testButton.addEventListener('click', handleCreatePost)
$testButton1.addEventListener('click', handleGetPost)

//Event listener functions
async function handleCreatePost(e) {
   const data = await Play.createPlay({
       name: 'Spente le stelle',
       date: new Date(),
       image: 'test-image',
   });
}

<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>