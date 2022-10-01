import { API_KEY } from '../config.js';
//Utils
import request from '../utils/request.js';
import store from '../utils/store.js';

//Services

import User from './User.js';

class Auth extends User {
    
    static async signUp(data) {
        try {
         const responseData = await request('POST', `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
             email: data.email,
             password: data.password,
         });

         const userData = {
            email: data.email,
            username: data.username,
            role: 'user',
         }
         const createdUserResponseData = await super.createUser(responseData.localId, userData);
         store.setItem('access_token', responseData.idToken);
         store.setItem('user', userData);       

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

        console.log(responseData);

        if (responseData?.)

        const userData = await super.getUser(responseData.localId);

        console.log(responseData);
        store.setItem('access_token', responseData.idToken);
        store.setItem('user',userData);

        location.href = '/index.html';//tan@ 
        } catch(e) {
            super.catchError(e);
        }
    }

}

export default Auth;