// Exercise 41: magicians



// Function to print the names of magicians
function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Array of magician names
let magicians: string[] = ['David Copperfield', 'Houdini', 'Penn Jillette', 'Teller'];

// Call the function with the array of magicians
show_magicians(magicians);
