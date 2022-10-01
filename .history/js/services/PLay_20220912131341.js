// Services
import Api from './Api.js';

//Utils
import request from '../utils/request.js';


class Play extends Api {
  static async createPlay(data) {
      try {
          const response = await request('POST', 'plays.json', data);
          const responseData = await response.json();

          console.log(responseData);
          return responseData
      } catch (e) {
        //   this.catchError(e; kam espes kam superov
        super.catchError(e); 
      }
  }
}

export default Play;