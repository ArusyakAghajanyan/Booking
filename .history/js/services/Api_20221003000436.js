class Api {
    static catchError(e) {
        console.log(e);
        if (typeof e === 'object') {
            if (e.message) {
                if (e.message === 'INVALID_PASSWORD' || e.message === 'EMAIL_NOT_FOUND' || e.message === 'INVALID_EMAIL') {
                    alert('Wrong email and password');                    
                }

                //EMAIL_EXISTS
                if (e.message === 'WEAK_PASSWORD') {
                    alert('Password should be at least 6 characters')
                }
                if|| e.message === 'EMAIL_EXISTS' || 
                console.log(e.message);
            }
        }
        if (typeof e === 'string') {
            alert(e);
            console.log(e);
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