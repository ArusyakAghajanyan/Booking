// Services
import Api from './Api.js';

// Utils
import request from '../utils/request.js';


class User extends Api {
 static async createUser(id, id) {
     try {
       const data = await request('PUT', `users/${id}.json`, data)
       console.log(data);
     } catch(e) {
         super.catchError(e);
     }
 }
 
}

export default User;

