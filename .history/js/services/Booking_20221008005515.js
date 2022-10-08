
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
           console.log();
          //  const userId = user.id;
          let dt = {...data, userName:user.name}
          console.log(dt);
           const response = await request('POST', `booking/${user.id}.json`, {...data, userName:user.name});
           console.log(response);
      } catch (e) {
        super.catchError(e);
      }
    }
  
    static async getAdminBooks() {
      const response = await request('GET', `booking.json`);
      console.log(3333333, response);
      console.log(11111111, super.objectToArrayBooks(response));
      return super.objectToArrayBooks(response); 
    }

    static async getBooks() {
      const user = store.getItem('user');
      console.log("user", user)
      const response = await request('GET', `booking/${user.id}.json`);
      console.log(33334443, response);    
      console.log("objectToArray", super.objectToArray(response))
      return super.objectToArray(response);

      
    }

}
  
  export default Booking;