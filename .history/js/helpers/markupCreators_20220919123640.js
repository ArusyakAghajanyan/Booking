const markupCreators = {
    playCard: (item) => {
        return `
         <div>
         <span>${item.name}</span>
         <span>${new Date}</span>
         
         </div>
        `;
    },
};

export default markupCreators;