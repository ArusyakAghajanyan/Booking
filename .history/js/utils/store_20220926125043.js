const store = {
   setItem(key, value) {
      {
           localStorage.setItem(key, JSON.stringify(value));
       } else {
           localStorage.setItem(key, value);
       }
   },
   getItem(key) {

   }
};

export default store;