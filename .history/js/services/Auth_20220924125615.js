import { API_KEY } from '../config.js';
//Utils
import request from '../utils/request.js';
//Services
import Api from './Api.js';

class Auth extends Api {
    
    static async signUp(data) {
        try {
         const responseData = await request('POST', `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
             email: data.email,
             password: data.password,
         });
         console.log(responseData);
        } catch(e) {
            super.catchError(e);
        }
    }

    static async signIn(data) {
        try {
         const responseData = await request('POST', `https://identitytoolkit.googleapis.com/v1/accounts:signI?key=${API_KEY}`,  {
            username: data.username,
            password: data.password,
        });
         console.log(responseData);
        } catch(e) {
            super.catchError(e);
        }
    }

}

export default Auth;