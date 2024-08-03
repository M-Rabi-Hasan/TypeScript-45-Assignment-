// Exercise 24: Adding Comments


// Variables for testing
let car = 'subaru';
let fruit = 'apple';
let number = 10;
let isSunny = true;
let temperature = 30;
let fruits = ['apple', 'banana', 'orange'];

// Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

// Tests using the lower case function
console.log("Is fruit.toLowerCase() == 'apple'? I predict True.");
console.log(fruit.toLowerCase() == 'apple');

console.log("Is fruit.toLowerCase() == 'APPLE'? I predict False.");
console.log(fruit.toLowerCase() == 'APPLE');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is number == 10? I predict True.");
console.log(number == 10);

console.log("Is number != 5? I predict True.");
console.log(number != 5);

console.log("Is number > 5? I predict True.");
console.log(number > 5);

console.log("Is number < 20? I predict True.");
console.log(number < 20);

console.log("Is number >= 10? I predict True.");
console.log(number >= 10);

console.log("Is number <= 10? I predict True.");
console.log(number <= 10);

console.log("Is number == 5? I predict False.");
console.log(number == 5);

console.log("Is number != 10? I predict False.");
console.log(number != 10);

console.log("Is number > 20? I predict False.");
console.log(number > 20);

console.log("Is number < 5? I predict False.");
console.log(number < 5);

console.log("Is number >= 20? I predict False.");
console.log(number >= 20);

console.log("Is number <= 5? I predict False.");
console.log(number <= 5);

// Tests using "and" and "or" operators
console.log("Is number > 5 and number < 20? I predict True.");
console.log(number > 5 && number < 20);

console.log("Is number > 5 or number < 5? I predict True.");
console.log(number > 5 || number < 5);

console.log("Is number > 20 and number < 30? I predict False.");
console.log(number > 20 && number < 30);

console.log("Is number > 20 or number < 5? I predict False.");
console.log(number > 20 || number < 5);

// Test whether an item is in an array
console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple'));

console.log("Is 'mango' in fruits? I predict False.");
console.log(fruits.includes('mango'));

// Test whether an item is not in an array
console.log("Is 'mango' not in fruits? I predict True.");
console.log(!fruits.includes('mango'));

console.log("Is 'apple' not in fruits? I predict False.");
console.log(!fruits.includes('apple'));
