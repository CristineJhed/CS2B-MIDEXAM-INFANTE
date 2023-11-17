// Create a "users" array that will store a list of username and password.


const users = [
    {username:'admin', password:'admin@2023'},
    {username:'user0', password:'p@ssWoRd03'},
    {username:'user1', password:'p@ssWoRd04'}
];

// Create a function with a for loop and if condition that will check the 
// provided username and password in the prompt. In this case, it should
// look this way:

function login(username, password) {
    for (const user of users) {
        if (user.username === username && 
            user.password === password) {
            return true;
        }
    }
    return false;
}


let logInSuccessfully;
let attemptFail = 0;

do {    
    // Create a prompt that will require the user on the browser to enter a username and password.

    let username = prompt("Enter your username:");
    let password = prompt("Enter your password:");

    // Create a codition that will validate the entered username and password.
  

    if (logInSuccessfully = login(username, password)) {
        alert('Successfully logged in!');        
    } else {
        if (++attemptFail == 3) {
            console.table(users);
            attemptFail = 0;
        }
        alert('Invalid username or password. Please try again.');
    }
} 
while (!logInSuccessfully);