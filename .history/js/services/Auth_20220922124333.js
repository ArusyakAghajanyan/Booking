//Services
import Api from './Api.js';

class Auth extends Api {
    SIGN_UP_URL = ''
    
    static async signUp(data) {
        try {

        } catch(e) {
            super.catchError(e);
        }
    }

}

export default Auth;