const markupCreators = {
  playCard: (item, page) => {
    console.log(item);
    return `
    ${page ==="books" ? 
    `<div class="play-card" data-id="${item.id}"> 
       <div class="play-card-image-wrapper"> 
         <img class="play-card-image"  src="${item.image}" >
       </div>
       <p class="play-card-description">${item.name}</p>
       <p class="play-card-description">${new Date(item.date).toLocaleString()}</p>
       <p class="play-card-description">${item.price} AMD</p>
       ${page === "books" ? "<button class='base-button base-button--secondary'>Book now</button>" : ""} 
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
bookPlayCardForAdmin: (item) => {
  return`
  <div  class="play-card"">
    <div class='play-card_container'>
      <h4 class='play-card_name'><b>${item.name}</b></h4> 
      <p class='play-card_date'>${item.bookingDate}</p>
      <p class='play-card_price'> ${item.price}</p>
    </div>
  </div> 
`;
}
};

export default markupCreators;