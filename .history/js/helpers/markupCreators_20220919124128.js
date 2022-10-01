const markupCreators = {
    playCard: (item) => {
        return `
         <div class="play-card" date-id="${item.id}>
         <span>${item.name}</span>
         <span>${new Date(item.date).toLocaleString()}</span>
         <span>${item.name}</span>
         </div>
        `;
    },
};

export default markupCreators;