// Exercise 18: Seeing the World

// Array of places to visit
let placesToVisit: string[] = ["Japan", "Italy", "New Zealand", "Egypt", "Iceland"];

// Print original order
console.log("Original order:", placesToVisit);

// Print alphabetical order without modifying the original list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Verify original order
console.log("Original order (again):", placesToVisit);

// Print reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Verify original order
console.log("Original order (again):", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order again to get back to original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
