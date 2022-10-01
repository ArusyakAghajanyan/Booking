class Api {
    static catchError(e) {
        console.log(e);
        if (typeof e === 'object') {
            if (e.message) {
                if (e.message === 'INVALID_PASSWORD' || e.message === 'EMAIL_NOT_FOUND') {
                   

                    
                }
            }
        }

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