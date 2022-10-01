const store = {
   setItem(key, value) {
       if (typeof value === 'object') {
           localStorage.setItem(key, JSON.stringify(value));
       } else {
           localStorage.setItem(key, value);
       }
   },
   get
};

export default store;