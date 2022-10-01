const markupCreators = {
    playCard: (item) => {
        return `
         <div class="play-card" date-id="${item.id}>
         <div>
         <span>${item.name}</span>
         <span>${new Date(item.date).toLocaleString()}</span>
         <span>${item.price}</span>
         </div>
        `;
    },
};

export default markupCreators;