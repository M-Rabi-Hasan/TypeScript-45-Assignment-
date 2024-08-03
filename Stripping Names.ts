// Exercise 6: Stripping Names


const personNameWithWhitespace: string = "\t\n John Doe \n\t";
console.log("Name with whitespace:", personNameWithWhitespace);
const strippedName: string = personNameWithWhitespace.trim();
console.log("Stripped name:", strippedName);    