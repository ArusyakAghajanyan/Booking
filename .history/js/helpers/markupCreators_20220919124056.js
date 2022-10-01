const markupCreators = {
    playCard: (item) => {
        return `
         <div class="play-card" date-i>
         <span>${item.name}</span>
         <span>${new Date(item.date).toLocaleString()}</span>
         
         </div>
        `;
    },
};

export default markupCreators;