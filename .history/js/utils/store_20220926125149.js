const store = {
   setItem(key, value) {      {
           localStorage.setItem(key, JSON.stringify(value));
       },
       getItem(key) {
          return JSON.parse(localStorage.get)
    }
        
           
       }
   },
  
};

export default store;