// Services
import Api from './Api.js';

//Utils
import request from '../utils/request.js';


class Play extends Api {
  static async createPlay() {
      try {
          const response = await request('POST', 'plays.jon')
      } catch (e) {

      }
  }
}

export default Play;