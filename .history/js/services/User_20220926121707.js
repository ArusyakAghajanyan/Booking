// Services
import Api from './Api.js';

// Utils
import request from '../utils/request.js';


class User extends Api {
 static async createUser(data, id) {
     try {
       const data = await request('PUT', `users/${id}.json`, data)
       console.log(dat);
     } catch(e) {
         super.catchError(e);
     }
 }
 
}

export default User;

