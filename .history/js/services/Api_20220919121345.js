class Api {
    static catchError(e) {
        console.log(e);
    }

    static objectToArray(obj) {
        return Object.entries(obj).map((entry) => {
           const[key, value] = entry;

           return {
               id: key,
               ...value,
           };
        });
    }
}
const [a, b] = arr;
const obj = {a:1, }

export default Api;