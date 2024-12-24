export async function fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(users => {
        users.forEach(user => {
            console.log(user.name);
        });
        return users;
    })
    .catch(error => console.error('Error fetching users:', error));
};

fetchUsers();