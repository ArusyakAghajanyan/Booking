import store from './utils/store.js';

if(!store.getItem('acc'))
location.href = 'login.html'