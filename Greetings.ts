// Exercise 12: Greetings


const names: string[] = ["Alice", "Bob", "Charlie"];
const greeting: string = "Hello, ";
for (const name of names) {
    console.log(`${greeting}${name}!`);
}