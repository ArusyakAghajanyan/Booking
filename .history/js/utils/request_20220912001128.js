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
      const response = await fetch('https://internship-project-70fc1-default-rtdb.firebaseio.com/', {
          method: 'P',
          body: data !== null ? JSON.stringify(data) : null,
      });
      const responseData = await response.json();

      return responseData;
  } catch(e) {
      console.log(e);
  }
};

request();

const user = {
    name: 'Albert',
    age: 24,
};
//՜POST՜ի դեպքում այդին էր գեներացվում, իսկ 'PUT'ը արդեն առանց այդիի միանգամից դատան գեներացնում ա, 
//ավելի շատ էդիթի համար ա պետք գալիս//
// fetch('https://internship-project-48d44-default-rtdb.firebaseio.com/users/a.json', {
//     method: 'PUT', 
//     body: JSON.stringify(user),
// });

fetch('https://internship-project-48d44-default-rtdb.firebaseio.com/users/2.json')
    .then((res) => res.json())
    .then((data) => console.log(data));

fetch('https://internship-project-48d44-default-rtdb.firebaseio.com/users/a.json', {
method: 'DELET',  
});
export default request;