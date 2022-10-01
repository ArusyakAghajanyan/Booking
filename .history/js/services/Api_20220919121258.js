class Api {
    static catchError(e) {
        console.log(e);
    }

    static objectToArray(obj) {
        return Object.entries(obj).map((entry) => {
           const[key, value] = entry;

           return {
               id: key.anchor
           }
        });
    }
}
const [a, b] = arr;


export default Api;