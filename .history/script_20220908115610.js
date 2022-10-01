// https://internship-project-70fc1-default-rtdb.firebaseio.com/
// fetch('https://internship-project-70fc1-default-rtdb.firebaseio.com/person.json')
// .then((res) => res.json())
// .then((data) => {
//     console.log(data);
// });
// const user = {
//     name: 'Arno',
//     age: 7,
// }
// fetch('https://internship-project-70fc1-default-rtdb.firebaseio.com/users/1.json', {
//     method: 'PUT',
//     body: JSON.stringify(user)
// });

fetch('https://internship-project-70fc1-default-rtdb.firebaseio.com/users/1.json') 
    .then((res) => res.json())
    .then((data) => console.log(data))
        


