const store = {
   setItem(key, value) {      {
           localStorage.setItem(key, JSON.stringify(value));
       },
       getItem(key) {

    }
        
           localStorage.setItem(key, value);
       }
   },
  
};

export default store;