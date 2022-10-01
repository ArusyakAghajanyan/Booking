const markupCreators = {
    playCard: (item) => {
        return `
         <div>
         <span>${item.name}</span>
         <span>${new Date(item.date).toLocale}</span>
         
         </div>
        `;
    },
};

export default markupCreators;