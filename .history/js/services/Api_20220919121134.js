class Api {
    static catchError(e) {
        console.log(e);
    }

    static objectToArray(obj) {
        return Object.entries(obj).map((entry) => {
           const[key, value] = entry;
        })
    }
}
const [, 2] = arr;
export default Api;