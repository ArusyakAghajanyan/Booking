const markupCreators = {
    playCard: (item) => {
        return `
         <div class="play-card" date-id="${item.id}"> 
             <div class="play-card-image-wrapper"> 
                 <img class="placard-image"  src="${item.image}" >
             </div>
             <p>${item.name}</p>
             <p>${new Date(item.date).toLocaleString()}</p>
             <p>${item.price}</p>
         </div>
        `;
    },
};

export default markupCreators;