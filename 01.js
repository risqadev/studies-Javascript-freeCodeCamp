// Impressão no console
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


console.log();
console.log();
console.log();
console.log();
console.log();
console.log();