import { API_KEY } from '../config.js'
//Services
import Api from './Api.js';

class Auth extends Api {
    static #SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
    static #SIGN_IN_URL = ``
    static async signUp(data) {
        try {
         const 
        } catch(e) {
            super.catchError(e);
        }
    }

}

export default Auth;