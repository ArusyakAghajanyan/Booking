// Services
import Api from './Api.js';

// Utils
import request from '../utils/request.js';


class User extends Api {
 static async createUser(data) {
     try {
       const data = await request('PUT', `users/${id}`)
     } catch(e) {
         super.catchError(e);
     }
 }
 
}

export default User;

