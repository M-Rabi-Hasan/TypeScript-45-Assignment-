// Exercise 43: unchangedMagicians



// Function to print the names of magicians
function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Function to add "the Great" to each magician's name and return a new array
function make_great(magicians: string[]): string[] {
    // Create a new array with "the Great" added to each name
    return magicians.map(magician => `${magician} the Great`);
}

// Array of magician names
let magicians: string[] = ['David Copperfield', 'Houdini', 'Penn Jillette', 'Teller'];

// Create a copy of the original array
let original_magicians = [...magicians];

// Create a new array with "the Great" added to each magician's name
let great_magicians = make_great(magicians);

// Call show_magicians() with each array to show the results
console.log("Original Magicians:");
show_magicians(original_magicians);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);
