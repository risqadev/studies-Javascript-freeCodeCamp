// Random number between 0 |- 1
Math.random();

// Generate Random Whole Numbers within a Range
Math.floor(Math.random() * (max - min + 1)) + min;

// Convert string to integer
parseInt(string, radix); // radix: base of the number in the string

aStr = "011";

parseInt(aStr) == 11;
parseInt(aStr, 2) == 3;


// Conditional (Ternary) Operator

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}