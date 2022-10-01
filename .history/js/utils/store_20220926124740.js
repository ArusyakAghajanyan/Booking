const store = {
   setItem(key, value) {
       if (typeof value === 'object') {
           localStorage.setItem(key, JSON.stringify(value));
       }
   } 
};

export default store;