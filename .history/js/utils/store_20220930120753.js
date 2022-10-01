const store = {
   setItem(key, value) {
       if(typeof value === 'object') {
         
       }
       },
       getItem(key) {
          return JSON.parse(localStorage.getItem(key));
    }
        
};         
  
export default store;