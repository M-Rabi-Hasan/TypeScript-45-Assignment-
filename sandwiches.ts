// Exercise 44: sandwiches



// Function to summarize a sandwich order
function make_sandwich(...items: string[]) {
    console.log("Sandwich order summary:");
    items.forEach(item => {
        console.log(`- ${item}`);
    });
    console.log(); // Add a blank line for better readability
}

// Call the function with different numbers of arguments
make_sandwich('lettuce', 'tomato', 'ham');
make_sandwich('turkey', 'cheese', 'mustard', 'pickles');
make_sandwich('bacon', 'egg', 'avocado');
