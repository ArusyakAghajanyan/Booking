class Api {
    static catchError(e) {
        console.log(e);
        if

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


export default Api;