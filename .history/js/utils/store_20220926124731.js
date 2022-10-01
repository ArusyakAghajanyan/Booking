const store = {
   setItem(key, value) {
       if (typeof value === 'object') {
           localStorage.setItem(key, JSON)
       }
   } 
};

export default store;