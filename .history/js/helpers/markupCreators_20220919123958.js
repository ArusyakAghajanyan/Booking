const markupCreators = {
    playCard: (item) => {
        return `
         <div>
         <span>${item.name}</span>
         <span>${new Date(item)}</span>
         
         </div>
        `;
    },
};

export default markupCreators;