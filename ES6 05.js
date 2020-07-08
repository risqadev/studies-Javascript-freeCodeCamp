/* ES6: Prevent Object Mutation */

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};

Object.freeze(obj); // <<<-----------

obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}



/* ES6: Use Arrow Functions to Write Concise Anonymous Functions */

const myFunc = function() {
  const myVar = "value";
  return myVar;
}

// Can be replaced by

const myFunc = () => "value";



/* ES6: Write Arrow Functions with Parameters */

// without parentheses (one argument)
const doubler = item => item * 2;

// with parenthesesmore (than one argument)
const multiplier = (item, multi) => item * multi;



/* ES6: Set Default Parameters for Your Functions */

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous



/* ES6: Use the Rest Parameter with Function Parameters */

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.



/* Use the Spread Operator to Evaluate Arrays In-Place */

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89



/* ES6: Use Destructuring Assignment to Extract Values from Objects */

// Consider the following ES5 code:

const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

// Here's an equivalent assignment statement using the ES6 destructuring syntax:

const { name, age } = user; // name = 'John Doe', age = 34



/* ES6: Use Destructuring Assignment to Assign Variables from Objects */

// Using the same object from the last example:

const user = { name: 'John Doe', age: 34 };

// Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34



/* ES6: Use Destructuring Assignment to Assign Variables from Nested Objects */

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;



/* ES6: Use Destructuring Assignment to Assign Variables from Arrays */

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

// OR

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

// Exercise
// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

let a = 8, b = 6;
[a, b] = [b, a]
console.log(a, b); // 6, 8



/* ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements */

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]

// Discarting firsts elements
const [ , , ...arr] = [1, 2, 3, 4, 5, 7];
console.log(arr); // [3, 4, 5, 7]



/* ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters */

// Consider the code below:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}

// This effectively destructures the object sent into the function. This can also be done in-place:

const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}

// This removes some extra lines and makes our code look neat. This has the added benefit of not having to manipulate an entire object in a function — only the fields that are needed are copied inside the function.



/* ES6: Create Strings using Template Literals */

// Consider the code below:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.



/* ES6: Write Concise Object Literal Declarations Using Object Property Shorthand */

// Consider the following code:

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

// getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

const getMousePosition = (x, y) => ({ x, y });



/* ES6: Write Concise Declarative Functions with ES6 */

// Consider the following code:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

// With ES6, You can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};



/* ES6: Use class Syntax to Define a Constructor Function */

// In ES5, we usually define a constructor function and use the new keyword to instantiate an object.

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

// The class syntax simply replaces the constructor function creation:

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');

// It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.

/** Notes:
 * UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.
 * The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.
*/



/* ES6: Use getters and setters to Control Access to an Object */

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut
