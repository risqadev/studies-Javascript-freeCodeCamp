// prints an output to the console
console.log( "Hello, world!" );

// Data types and variables

/** Data types
 *  undefined, null, boolean, symbol, number, array, object
 */

// Declare variable
var varName;                        // undefined
// Variable assignment (atribuição)
varName = 5                         // number
varName = "text";                   // string
varName = [ dog, cat, bear, lion ]; // array
varName = { name: 'apple', color: 'red' }; // object
varName = true;                     // boolean
varName = false;                    // boolean
varName = 5 == 5 ;                  // boolean
varName = null;                     // null
varName = undefined;                // undefined
// Declare and assign
var varOther = "any value";         // string

// Case sensitive
varName != varNAME != varname
properCamelCase != ProperCamelCase

// Aritmetics operators
var sum = 10 + 5 // adding
var difference = 45 - 20; // subtracting
var product = 8 * 10; // multiplying
var quotient = 66 / 33; // dividing
var remainder = 11 % 2; // remaining (resto)

// Incrementing and decrementing
myVar = 87;

myVar = myVar + 1; // OR
myVar += 1; // OR
myVar++;

myVar = myVar - 1; // OR
myVar -= 1; // OR
myVar--;

myVar = myVar + 12; // OR
myVar += 12;

myVar = myVar - 10; // OR
myVar -= 10;

myVar = myVar * 3 // OR
myVar *= 3;

myVar = myVar / 2; // OR
myVar /= 2;

// Escaping literal quotes in strings
//var str1 = "The password is "sd5g" and"; // FAIL

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // correct
console.log(myStr);
var myStr = 'With \'single quotes\' we can use "doble quotes" in a string.'; // correct
console.log(myStr);
var myStr = `With backticks we can use 'single quotes' and "double quotes" in a string.`; // correct
console.log(myStr);

/** Code outputs
 *  \'  single quote
 *  \"  double quote
 *  \\  backslash
 *  \n  new line
 *  \r  carriage return
 *  \t  tab
 *  \b  backspace
 *  \f  form feed
 */

// Concatenating strings
aStr = "First part, " + "second part, ";
bStr = "third part, ";
cStr = aStr + bStr + "fourth part, ";
cStr += "fifth part."

// placeholder
var myVar = 32;
var myStr = `I am ${myVar} years old.`;
console.log(myStr);

// Length os a string
aNum = cStr.length

// Nth character in a string
cStr[0]  == "F"; // 1th
cStr[1]  == "i"; // 2th
cStr[5]  == " "; // 3th
cStr[10] == ","; // 4th
cStr[ n-1 ] // Nth character
cStr[ cStr.length - 1 ] == "." // Last character
cStr[ cStr.length - n ] // Nth-to-last character

/* String Immutability
  individual characters of a string literal cannot be changed. The only way to change a string would be to assign it with a new string. */
cStr[0] = "B"; // fail

// Arrays
var aArr = [ 1, 2, 3 ];
aArr.push("cake"); // add elements in end
aArr == [ 1, 2, 3, "cake" ];

bArr = aArr.pop(); // remove and return the last element
aArr == [ 1, 2, 3 ];
bArr == "cake";

aArr = [ 1, 2, 3, "cake" ];

bArr = aArr.shift(); // remove and return the first element
aArr == [ 2, 3, "cake" ];
bArr == 1;

aArr.unshift( ["a", "b", "c"] ) // add elements in front of the array
aArr == [ ["a", "b", "c"], 2, 3, "cake" ];

// functions
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

function withParams(param1, param2) {
  console.log(param1, param2);
}
withParams("Hello", "World");

function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(2, 4);

timesFive(a) {
  return a * 5;
}
timesFive(3);

/* Basic JavaScript: Stand in Line
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed. */

/**
 * nextInLine([], 5) should return a number.
 * nextInLine([], 1) should return 1.
 * nextInLine([2], 1) should return 2.
 * nextInLine([5,6,7,8,9], 1) should return 5.
 * After nextInLine(testArr, 10), testArr[4] should be 10
 */

  function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    var shifted = arr.shift();
    return shifted;
    // Only change code above this line
  }

  // Setup
  var testArr = [1,2,3,4,5];

  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

// Boolean
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code above this line
}

/** Comparison
 * ==  equality
 * !=  inequality
 * === strict equality
 * !== strict inequality
 * >   greater than
 * >=  greater than or equal
 * <   less than
 * <=  less than or equal
 * &&  logical AND operator
 * ||  logical OR operator
*/
var a = 3;   // number
var b = "3"; // sting

a == b ;  // true
a != b ;  // false
a === b ; // false
a !== b ; // true

// If
function functionWithIf(val) {
  if (val === 1) {
    answer = "a";
  } else if (val === 2) {
    answer = "b";
  } else {
    answer = "c";
  }
}

// Switch
function functionWithSwitch(val) {
  switch(val) {
    case 1:
      answer = "a";
      break;
    case 2:
      answer = "b";
      break;
    default:
      answer = "c";
  }
}

// Object properties
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2

var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];    // USS Enterprise

// Set or add a propetie
myObj.prop = "value"; // OR
myObj[prop] = "value";

// Delete properties
delete myObj.prop; // OR
delete myObj[prop];