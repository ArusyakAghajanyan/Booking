import request from './js/utils/request.js';
request('POST','https://internship-project-70fc1-default-rtdb.firebaseio.com/val.json',{
    age: 69,
    name: "Aram",
    role: 'user',
}).then(res => console.log('dddddd'));

request('GET','https://internship-project-70fc1-default-rtdb.firebaseio.com/val.json');
