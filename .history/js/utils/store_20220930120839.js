const store = {
   setItem(key, value) {
    if(typeof value === 'object') {
       localStorage.setItem(key, JSON.stringify(value));
    } else {
        
    }
       },
       getItem(key) {
          return JSON.parse(localStorage.getItem(key));
    }
        
};         
  
export default store;