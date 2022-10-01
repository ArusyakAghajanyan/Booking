const markupCreators = {
    playCard: (item) => {
        return `
         <div class="play-card" date-id="${}>
         <span>${item.name}</span>
         <span>${new Date(item.date).toLocaleString()}</span>
         
         </div>
        `;
    },
};

export default markupCreators;