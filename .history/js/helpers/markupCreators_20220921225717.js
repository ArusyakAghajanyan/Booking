const markupCreators = {
    playCard: (item) => {
        return `
         <div class="play-card" date-id="${item.id}">
             <div class="play-card-image">
                 <img style="width: 200px;" src="${item.image}" >
             </div>
             <p>${item.name}</p>
             <p>${new Date(item.date).toLocaleString()}</p>
             <span>${item.price}</span>
         </div>
        `;
    },
};

export default markupCreators;