const markupCreators = {
    playCard: (item) => {
        return `
         <div>
         <span>${item.name}</span>
         <span>${new Date(item.date).to}</span>
         
         </div>
        `;
    },
};

export default markupCreators;