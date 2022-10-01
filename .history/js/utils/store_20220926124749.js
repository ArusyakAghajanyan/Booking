const store = {
   setItem(key, value) {
       if (typeof value === 'object') {
           localStorage.setItem(key, JSON.stringify(value));
       } else {
           
       }
   } 
};

export default store;