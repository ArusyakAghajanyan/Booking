const store = {
   setItem(key, value) {
       if (typeof value === 'object') {
           localStorage.setItem(key, JSON.stringify)
       }
   } 
};

export default store;