const markupCreators = {
    playCard: (item) => {
        return `
         <div class="play-card" date-id="${item.id}"> 
             <div class="play-card-image-wrapper"> 
                 <img class="card-image"  src="${item.image}" >
             </div>
             <span>${item.name}</span>
             <span>${new Date(item.date).toLocaleString()}</span>
             <span>${item.price}</span>
         </div>
        `;
    },
};

export default markupCreators;