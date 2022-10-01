/**
 * 
//  * @param {string} method 
//  * @param {string} url 
//  * @param {*} data 
//  */
// const request = async (method, url, data = null) => {
//   try {
//       const response = await fetch(url, {
//           method,
//           body: data !== null ? JSON.stringify(data) : null,
//       });
//       const responseData = await response.json();

//       return responseData;
//   } catch(e) {
//       console.log(e);
//   }
// };

// request();



// fetch('https://internship-project-70fc1-default-rtdb.firebaseio.com/')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     });

const request = async (method, url, data = null) => {
  try {
      const response = await fetch(ur, {
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

const data = {
    name: 'Albert',
    age: 24,
};
