// Services
import Auth from './Auth.js';

// Utils
import request from '../utils/request.js';


class User extends Auth {
  
  }

  static async getPlays() {
    const response = await request('GET', 'plays.json');

    return response; 
  }
}

export default User;