import store from './utils/store.js';

if(!store.getItem('access'))
location.href = 'login.html'