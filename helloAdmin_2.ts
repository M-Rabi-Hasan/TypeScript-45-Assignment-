// Exercise 31: helloAdmin - No Users 



// Create an array of five or more usernames, including the name 'admin'
let usernames: string[] = ['admin', 'eric', 'john', 'alice', 'steve'];

// Function to print greetings
const printGreetings = (usernames: string[]) => {
    if (usernames.length === 0) {
        console.log("We need to find some users!");
    } else {
        usernames.forEach(username => {
            if (username === 'admin') {
                console.log("Hello admin, would you like to see a status report?");
            } else {
                console.log(`Hello ${username}, thank you for logging in again.`);
            }
        });
    }
};

printGreetings(usernames);

// Remove all usernames
usernames = [];

printGreetings(usernames);
