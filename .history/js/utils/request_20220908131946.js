/**
 * 
 * @param {string} method 
 * @param {string} url 
 * @param {*} data 
 */
const request = async (method, url, data = null) => {
  try {
      const response = await fetch(url, {
          method,
          body: data !== null ? JSON.stringify(data) : null,
      });
      const responseData = await response.json();
      
  } catch(e){

  }
};

request();

export default request;