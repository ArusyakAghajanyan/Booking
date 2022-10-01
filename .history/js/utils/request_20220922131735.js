mport { DATABASE_URL }  } from "../config.js";
/**
 *
 * @param {*} method
 * @param {*} url
 * @param {*} data
 */
const requst = async (method, url, data = null) => {
    try {
        const _url = url.includes('sign') ? url : `${DATABASE_URL}${url}`;
        const response = await fetch(_url, {
        method,
        body: data !==  null ? JSON.stringify(data) : null,
        });
        const responseData = await response.json();
        return responseData;
    } catch(e) {
        console.log(e);
    }
};
export default requst;



// request('GET','https://internship-project-70fc1-default-rtdb.firebaseio.com/val.json');

// const data = {
//     name: 'Albert',
//     age: 24,
// };
// request('POST','https://internship-project-70fc1-default-rtdb.firebaseio.com/val.json', data);



export default request;