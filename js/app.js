//Section 1A
//1) We assign a value to a variable with a '='
//2) We can change the value of something in many ways.  You can re-assign it with an =, you can manipulate it
//with operators like +=, -=, or methods like .toString, .map, etc.
//3) const newVar = oldVar;
//4) declaring is essentially creating.  const newVar; declares a variable called newVar without assigning it any value.
//assigning is when we are giving a value to a variable.  The primary purpose of defining something is to initialize it
// versus the primary purpose of assigning is to manipulate value.
//5) pseudocoding is the process of breaking down a coding problem into parts and explaining what you plan on doing
//often in plain english.  THis allows you to break the problem down into parts and confront the logic of it versus
//focusing on the syntax of actually coding something.
//6) Roughly 75% of your time should be focused on planning vs actually typing something out.

//Section 1B
let firstVariable;
firstVariable = 'Hello World';
firstVariable = 5;
let secondVariable = firstVariable;
secondVariable = 'Any String';
//the value of firstVariable is 5
const yourName = 'Justin';
console.log(`Hello, my name is ${yourName}`);

//Section 1C
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true != false);
console.log(false || false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c);
console.log(a * a === d);
console.log(48 == '48');

//Section 1D
const animal = 'Goose';
if (animal === 'Cow'){
  console.log('Moo');
} else {
  console.log('Hey! You\'re not a cow.');
}
