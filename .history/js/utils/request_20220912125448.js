import { DATABASE_URL }  from '../config.js';

/**
 * 
//  * @param {string} method 
//  * @param {string} url 
//  * @param {*} data 
//  */
const request = async (method, url, data = null) => {
  try {
      const response = await fetch(`${url}`, {
          method,
          body: data !== null ? JSON.stringify(data) : null,
      });
      const responseData = await response.json();

      return responseData;
  } catch(e) {
      console.log(e);
  }
};

request();


// request('GET','https://internship-project-70fc1-default-rtdb.firebaseio.com/val.json');

// const data = {
//     name: 'Albert',
//     age: 24,
// };
// request('POST','https://internship-project-70fc1-default-rtdb.firebaseio.com/val.json', data);



export default request;