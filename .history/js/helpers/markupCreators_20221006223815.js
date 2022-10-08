const markupCreators = {
  playCard: (item, page) => {
    console.log(456789,item);
    return `
    ${page ==="books" ? 
    `<div class="play-card" data-id="${item.id}"> 
       <div class="play-card-image-wrapper"> 
         <img class="play-card-image"  src="${item.image}" >
       </div>
       <p class="play-card-description">${item.name}</p>
       <p class="play-card-description">${new Date(item.date).toLocaleString()}</p>
       <p class="play-card-description">${item.price} AMD</p>
       <button class='base-button base-button--secondary cards-book-button' data-id='${item.id}'>Book now</button>
     </div>`:
    `<div class="play-card" data-id="${item.id}"> 
       <div class="play-card-image-wrapper"> 
         <img class="play-card-image"  src="${item.image}" >
       </div>
       <p class="play-card-description">${item.name}</p>
       <p class="play-card-description">${new Date(item.date).toLocaleString()}</p>
       <p class="play-card-description">${item.price} AMD</p>
       <button class='base-button base-button--secondary cards-delete-button' data-id='${item.id}'>Delete</button>
       <button class='base-button base-button--secondary cards-edit-button' data-id='${item.id}'>Edit</button>
    </div>`    
  }
`    
},
bookPlayCardAdmin: (item) => {
  return`
  <div class="play-card">    
      <p class="play-card-description">${item.name}</p>
      <div class="play-card-image-wrapper"> 
         <img class="play-card-image"  src="${item.image}" >
       </div>
      <p class='play-card-description'>${item.bookingDate}</p>
      <p class='play-card-description'>${item.user}</p>
        
  </div> 
`;
}
};

export default markupCreators;