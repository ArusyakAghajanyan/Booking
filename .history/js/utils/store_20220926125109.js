const store = {
   setItem(key, value) {      {
           localStorage.setItem(key, JSON.stringify(value));
       },
        
           localStorage.setItem(key, value);
       }
   },
  
};

export default store;