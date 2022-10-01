// Services
import Api from './Api.js';

// Utils
import request from '../utils/request.js';


class User extends Api {
 static async createUser(id, data) {
     try {
         console.log(6464);
       const response = await request('PUT', `users/${id}.json`, data)
       console.log(data);
     } catch(e) {
         super.catchError(e);
     }
 }
 
}

export default User;

