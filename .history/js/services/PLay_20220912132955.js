// Services
import Api from './Api.js';

//Utils
import request from '../utils/request.js';


class Play extends Api {
  static async createPlay(data) {
      try {
          const response = await request('POST', 'plays.json', data);

          return response;
      } catch (e) {
        //   this.catchError(e; kam espes kam superov
        super.catchError(e); 
      }
  }
  static 
}

export default Play;