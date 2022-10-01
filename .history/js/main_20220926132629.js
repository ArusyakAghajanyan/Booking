import store from './utils/store.js';

if(!store.getItem('access_token')){
    location.href = 'login.html' 
}
location.href = 'login.html'