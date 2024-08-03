// Exercise 15: Changing guest list

// Existing guest list
const guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];


// Print the name of the guest who can't make it
const unableToAttend: string = guestList.splice(1, 1)[0];
console.log(`${unableToAttend} is unable to attend the dinner.`);


// Replace the name of the guest who can't make it with a new person
guestList.push("Nikola Tesla");


// Print a second set of invitation messages
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
}