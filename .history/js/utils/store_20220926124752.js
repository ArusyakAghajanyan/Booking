const store = {
   setItem(key, value) {
       if (typeof value === 'object') {
           localStorage.setItem(key, JSON.stringify(value));
       } else {
           localStorage
       }
   } 
};

export default store;