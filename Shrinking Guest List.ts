// Exercise 17: Shrinking Guest List


// Existing guest list
let guestList: string[] = ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie", "Leonardo da Vinci", "Stephen Hawking"];

// Inform about the limited space
console.log("Unfortunately, due to unforeseen circumstances, we can only invite two people for dinner.");

// Remove guests until only two remain
while (guestList.length > 2) {
    const removedGuest: string = guestList.pop()!;
    console.log(`Sorry ${removedGuest}, we won't be able to invite you to dinner.`);
}

// Print invitation messages to the remaining guests
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

// Empty the list
guestList = [];

// Print to ensure an empty list
console.log("Guest list:", guestList);
