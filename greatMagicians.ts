// Exercise 42: greatMagicians



// Function to print the names of magicians
function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Function to add "the Great" to each magician's name
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} the Great`;
    }
}

// Array of magician names
let magicians: string[] = ['David Copperfield', 'Houdini', 'Penn Jillette', 'Teller'];

// Call make_great() to modify the list
make_great(magicians);

// Call show_magicians() to see the modified list
show_magicians(magicians);
