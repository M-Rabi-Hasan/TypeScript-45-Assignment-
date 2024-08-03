// Exercise 30: helloAdmin



// Create an array of five or more usernames, including the name 'admin'
let usernames: string[] = ['admin', 'eric', 'john', 'alice', 'steve'];

// Loop through the array and print a greeting to each user
usernames.forEach(username => {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
