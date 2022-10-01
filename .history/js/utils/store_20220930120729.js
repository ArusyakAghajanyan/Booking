const store = {
   setItem(key, value) {
       if(typeof)
           localStorage.setItem(key, JSON.stringify(value));
       },
       getItem(key) {
          return JSON.parse(localStorage.getItem(key));
    }
        
};         
  
export default store;