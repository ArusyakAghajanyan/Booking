const markupCreators = {
    playCard: (item) => {
        return `
         <div class="play-card" date-id="${item.id}"> 
             <div class="play-card-image-wrapper"> 
                 <img class="play-card-image"  src="${item.image}" >
             </div>
             <p class="play-card-description">${item.name}</p>
             <p class="play-card-description">${new Date(item.date).toLocaleString()}</p>
             <p class="play-card-description">${item.price} AMD</p>
             const _url = url.includes('index') ? url : `bu`;
         </div>
        `;
    },
};

export default markupCreators;