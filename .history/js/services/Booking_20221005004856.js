// import Play from "./PLay"

// `booking\${userId}.json`
// Play.json-i poxaren
// Get@ 2 hat
// Get bookings u Get admin bookings

// Services
import Api from './Api.js';
import Play from './PLay.js'


// Utils
import request from '../utils/request.js';


class Booking extends Api {
    static async doBook(data) {
      try {
        const response = await request('POST', 'b.json', data);
        console.log(response);
      } catch (e) {
        super.catchError(e);
      }
    }
  
    static async getPlays() {
      const response = await request('GET', 'plays.json');
      return super.objectToArray(response); 
    }
  
    static async deletePlay(id) {
      console.log(id);
      const response = await request('DELETE', `plays/${id}.json`);    
      return await this.getPlays();
      cardProcess();
    }
  
    static async editPlay(id, data) {
      try {
        delete data.id;
        const response = await request('PUT', `plays/${id}.json`, data);
  
        
  
        return await this.getPlays();
  
      } catch(e) {
  
      }
    }
  }
  
  export default Play;