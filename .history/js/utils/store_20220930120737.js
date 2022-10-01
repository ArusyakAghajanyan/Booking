const store = {
   setItem(key, value) {
       if(typeof value === 'ob')
           localStorage.setItem(key, JSON.stringify(value));
       },
       getItem(key) {
          return JSON.parse(localStorage.getItem(key));
    }
        
};         
  
export default store;