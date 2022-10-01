import store from './utils/store.js';

if(!store.getItem())
location.href = 'login.html'