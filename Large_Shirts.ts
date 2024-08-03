// Exercise 37: Large tShirt


// Function to create a shirt with default size and message
function make_shirt(size: string = 'Large', message: string = 'I love TypeScript') {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt('Medium');

// Create a shirt of any size with a different message
make_shirt('Small', 'TypeScript is Awesome!');
