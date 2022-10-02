// Services
import Api from './Api.js';

// Utils
import request from '../utils/request.js';


class Play extends Api {
  static async createPlays(data) {
    try {
      const response = await request('POST', 'plays.json', data);
      console.log(response);
      return await this.getPlays();
    } catch (e) {
      super.catchError(e);
    }
  }

  static async getPlays() {
    const response = await request('GET', 'plays.json');
    l
    return super.objectToArray(response); 
  }

  static async deletePlay(id) {
    console.log(id);
    const response = await request('DELETE', `plays/${id}.json`);    
    return await this.getPlays();
    cardProcess();
  }

  static async editPlay() {
    try {
      const response = await request('PUT', `plays/${id}.json`, data)

    } catch(e) {

    }
  }
}

export default Play;