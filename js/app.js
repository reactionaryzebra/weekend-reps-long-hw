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
const quotes = ['You broke my heart Fredo', 'It\s a Sicilian message.  It means Luca Brazi sleeps with the fishes.', 'If anything in this life is certain, if history has taught us anything, it\'s that you can kill anyone.', 'It was an abortion.  Just like this marriage is an abortion', 'I believe in America'];

//Section 3C
const randomThings = [1, 10, "Hello", true]
//1
randomThings[0];
//2
randomThings[2] = 'World';
//3
console.log(randomThings);

//Section 3D
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//1
ourClass[2];
//2
ourClass[4] = 'Octocat';
//3
ourClass.push('Cloud City');

//Section 3E
const myArray = [5, 10, 500, 20]
//1
myArray.push('Egon', 'Dolphin');
//2
myArray.shift();
//3
myArray.unshift('Bob Marley');
//4
myArray.pop();
//5
myArray.reverse();
//Yes the reverse method mutates the array by reversing the position of the elements.  Mutate means to change
//the original variable.  The reverse method returns a reference to the new (reversed) array.

//Section 3F
const number = 5;
if (number < 100){
  console.log('little number');
} else {
  console.log('big number');
}

//Section 3G
if (number < 5){
  console.log('little number');
} else if (number > 10){
  console.log('big number');
} else {
  console.log('monkey');
}

//Section 3H
const kristynsCloset = [
  'left shoe',
  'cowboy boots',
  'right sock',
  'GA hoodie',
  'green pants',
  'yellow knit hat',
  'marshmallow peeps'
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    'grey button-up',
    'dark grey button-up',
    'light blue button-up',
    'blue button-up'
  ],
  [
    // These are Thom's pants
    'grey jeans',
    'jeans',
    'PJs'
  ],
  [
    // Thom's accessories
    'wool mittens',
    'wool scarf',
    'raybans'
  ]
];
//1
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
//2
kristynsCloset.splice(6, 0, 'raybans');
//3
kristynsCloset[5] = 'stained knit hat';
//4, 5, 6, 7
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][2]} and ${thomsCloset[2][2]}!`);
//8
thomsCloset[1][2] = 'Footie Pajamas';

//Section 4A
//I already did THis

//Section 4B
const printCool = (name) => console.log(`${name} is cool!`);

//Section 4C
const calculateCume = (num) => num ** 3;

//Section 4D
const isVowel = (char) => {
  const vowels = ['a','e','i','o','u','A','E','I','O','U'];
  if (vowels.includes(char)){
    return true;
  } else {
    return false;
  }
}

//Section 4E
const getTwoLengths = (str1, str2) => [str1.length, str2.length];

//Section 4F
const getMultipleLengths = (arr) => {
  const lengthArr = arr.map((element) => element.length);
  return lengthArr;
}

//Section 4G
const maxOfThree = (num1, num2, num3) => Math.max(num1, num2, num3);

//Section 4H
const printLongestWord = (arr) => {
  const lengthsArr = arr.map((element) => element.length);
  const max = lengthsArr.reduce((a,b) => Math.max(a,b));
  const maxIndex = lengthsArr.indexOf(max);
  return arr[maxIndex];
}

//Section 4I
const transmogrify = (num1, num2, num3) => (num1*num2)**num3;

//Section 4J
const reverseWordOrder = (str) => {
  let reversedString = '';
  let spaceIndex = str.length;
  for (let i = str.length-1; i >=0 ; i--) {
    if (str[i] === ' '){
      for (let j = (i+1); j < spaceIndex; j++) {
        reversedString += str[j];
      }
      reversedString += ' ';
      spaceIndex = i;
    } else if (i === 0){
      for (let j = 0; j < spaceIndex ; j++) {
        reversedString += str[j];
      }
    }
  }
  return reversedString;
}

//Section 4K
//1
const randOneToTen = () => 1 + Math.floor(Math.random() * 10);
//2
const randTenToHundred = () => 10 + Math.floor(Math.random() * 91);
//3
const rand532To13267 = () => 532 + Math.floor(Math.random()* 12736);
//4
//I did this in part 1
//5
const getRandomElement = (arr) => arr[Math.floor(Math.random()*arr.length)];

//Objects A
const user = {
  name: 'Justin',
  email: 'Justin@me.com',
  age: 29,
  purchased: [],
  friend: {
    name: 'Rose',
    email: 'Rosewater@msn.net',
    age: 26,
    location: 'couch',
    purchased: []
  }
};

//Objects B
user.email = 'J.New@lycos.com';
user.age++;

//Objects C
user.location = 'Earth';

//Objects D
user.purchased.push('carbohydrates');
user.purchased.push('peace of mind');
user.purchased.push('Merino jodhpurs');
console.log(user.purchased[2]);

//Objects E
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push('The one ring');
user.friend.purchased.push('A latte');
console.log(user.friend.purchased[1]);

//Objects F
for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}
for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}

//Objects G
const updateUser = () => {
  user.age ++;
  user.name = user.name.toUpperCase();
}

const oldAndLoud = (person) => {
  person.age++;
  person.name = person.name.toUpperCase();
}
