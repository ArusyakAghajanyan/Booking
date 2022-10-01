import { API_KEY } from '../config.js';
//Utils
import request from '../utils/request.js';
//Services

import User from './User.js';

class Auth extends User {
    
    static async signUp(data) {
        try {
         const responseData = await request('POST', `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
             email: data.email,
             password: data.password,
         });
         const createdUserResponseData = await super.createUser(responseData.localId, {
            email: data.email,
            username: data.username,
            role: 
        })
         console.log(createdUserResponseData);
         console.log(responseData);
        } catch(e) {
            super.catchError(e);
        }
    }

    static async signIn(data) {
        try {
         const responseData = await request('POST', `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,  {
            email: data.email,
            password: data.password,
        });

        } catch(e) {
            super.catchError(e);
        }
    }

}

export default Auth;