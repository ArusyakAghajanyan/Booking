// Services
import Api from './Api.js';

//Utils
import request from '../utils/request.js';


class Play extends Api {
  static async createPlay(data) {
      try {
          const response = await request('POST', 'plays.json', data);
          const data = await response.json();

          console.log(data);
      } catch (e) {
          
      }
  }
}

export default Play;