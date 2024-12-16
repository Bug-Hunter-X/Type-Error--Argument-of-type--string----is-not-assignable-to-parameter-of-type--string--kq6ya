function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(", ");
}

let user = ["Jane User", "John Smith"];
let userSingle = "Jane User";

console.log(greeter(userSingle)); // Correct usage
console.log(greeterArray(user)); // Correct usage with array