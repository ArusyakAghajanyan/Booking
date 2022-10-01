const markupCreators = {
    playCard: (item) => {
        return `
         <div class="play_card" date-id="${item.id}">
             <div class="play-card-image>
                 <img style="width: 200px;" src="${item.image}" >
             </div>
             <span>${item.name}</span>
             <span>${new Date(item.date).toLocaleString()}</span>
             <span>${item.price}</span>
         </div>
        `;
    },
};

export default markupCreators;