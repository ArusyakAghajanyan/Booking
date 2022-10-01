//Services
import Api from './Api.js';

class Auth extends Api {
    static async signUp(data) {
        try {

        } catch(e) {
            super.catchError(e);
        }
    }

}

export default Auth;