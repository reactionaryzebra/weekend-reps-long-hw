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

//Section 1E
let personAge = 29;
if (personAge >= 16){
  console.log('Here are the keys');
} else{
  console.log('Sorry, you\'re too young.');
}

//Section 2A
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
for (let i = 10; i <= 400; i++) {
  console.log(i);
}
for (let i = 12; i <= 4000; i+=3) {
  console.log(i);
}

//Section 2B
for (let i = 2; i <= 100 ; i+=2) {
  console.log(`${i} is an even number`);
}
//OR
for (let i = 1; i <=100 ; i++) {
  if (i%2 === 0){
    console.log(`${i} is an even number`);
  }
}

//Section 2C
for (let i = 0; i <= 100; i++) {
  if ((i != 0) && (i % 5 === 0)){
    console.log(`I found a ${i}. High five!`);
  } else if ((i!=0) && (i % 3 === 0)){
    console.log(`I found a ${i}. Three is a crowd`);
  }
}

//Section 2D
let bank_account = 0
for (let i = 1; i <=100 ; i++) {
  bank_account += (i*2);
}

//Section 2E
//I've already done this

//Section 3A
//1) Arrays contain elements at indexes which begin at zero.
//2) No, elements in arrays are not necessarily in any order.
//3) A shopping list, an attendance roster, a recipe, these are all things that could be represented in an array.

//Section 3B
//1
const quotes = ['You broke my heart Fredo', 'It\s a Sicilian message.  It means Luca Brazi sleeps with the fishes.', 'If anything in this life is certain, if history has taught us anything, it\'s that you can kill anyone.
'];
