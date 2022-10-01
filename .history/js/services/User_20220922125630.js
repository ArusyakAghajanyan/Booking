// Services
import Auth from './Auth.js';

// Utils
import request from '../utils/request.js';


class User extends Auth {
  static async createPlays(data) {
    try {
      const response = await request('POST', 'plays.json', data);
      console.log(response);
      return response;
    } catch (e) {
      super.catchError(e);
    }
  }

  static async getPlays() {
    const response = await request('GET', 'plays.json');

    return response; 
  }
}

export default User;