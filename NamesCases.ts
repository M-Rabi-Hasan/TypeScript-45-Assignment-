// Exercise 3: Name Cases

const personName: string = "John Doe";
console.log(`Lowercase: ${personName.toLowerCase()}`);
console.log(`Uppercase: ${personName.toUpperCase()}`);
console.log(`Titlecase: ${personName.replace(/\b\w/g, c => c.toUpperCase())}`);
