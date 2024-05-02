// callback hell 
const p1 = function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users');
}
const p2 = function getTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos');
}
const p3 = function getAlbums() {
    return fetch('https://jsonplaceholder.typicode.com/albums');
}


// p1()
//     .then(res => res.json())
//     .then(users => {
//         p2()
//             .then(res => res.json())
//             .then(todos => {
//                 p3()
//                     .then(res => res.json())
//                     .then(albums => {
//                         console.log(users, todos, albums)
//                     });
//             });
//     });

// Promise.all
Promise.all([p1, p2,p3])
    .then(([users, todos, albums]) => console.log(users,todos,albums));
    //.then(([users, todos]) => console.log(users, todos))

