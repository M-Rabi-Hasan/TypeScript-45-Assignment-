// Exercise 16: Existing guest list 

// Existing guest list
let guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Add new guests
guestList.unshift("Isaac Newton"); // Add to the beginning
guestList.splice(2, 0, "Galileo Galilei"); // Add to the middle
guestList.push("Stephen Hawking"); // Add to the end

// Print new set of invitation messages
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
}
