
// `booking\${userId}.json`
// Play.json-i poxaren
// Get@ 2 hat
// Get bookings u Get admin bookings

//Services

import Api from './Api.js';
import Play from './PLay.js'

// Utils

import request from '../utils/request.js';
import store from '../utils/store.js';


class Booking extends Api {
    static async createBooks(data) {
      try {
           const user = store.getItem('user');
           const userId = user.id;
           const response = await request('POST', 'booking\${userId}.json', {...data, userName:user.name});
           console.log(response);
      } catch (e) {
        super.catchError(e);
      }
    }
  
//     static async getAdmin() {
//       const response = await request('GET', 'booking\${userId}.json');
//       return super.objectToArray(response); 
//     }
  
//     static async deleteBooks(id) {
//       console.log(id);
//       const response = await request('DELETE', `booking/${id}.json`);    
//       return await this.getBooks();
//       cardProcess();
//     }
  
    // static async editPlay(id, data) {
    //   try {
    //     delete data.id;
    //     const response = await request('PUT', `plays/${id}.json`, data);
  
        
  
    //     return await this.getPlays();
  
    //   } catch(e) {
  
    //   }
    // }
  // }
  
//   export default Booking;