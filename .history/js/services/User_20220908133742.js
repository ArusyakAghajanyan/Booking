// Services
import Auth from './Auth.js';

//Utils
import request from '../utils/request.js';

class  User extends Auth {
  static async getUsers() {
    try {
      const data = await request('GET', '')
    } catch(e) {

    }
  }
}

export default User;