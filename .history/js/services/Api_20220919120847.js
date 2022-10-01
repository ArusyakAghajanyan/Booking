class Api {
    static catchError(e) {
        console.log(e);
    }

    static objectToArray(obj) {
        return Object.entries(obj)
    }
}

export default Api;