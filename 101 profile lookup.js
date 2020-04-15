/* Basic JavaScript: Profile Lookup

We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return "No such contact".

If prop does not correspond to any valid properties of a contact found to match name then return "No such property". 
*/

/* My solution */

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line

/* SOLUTION 1 */
    var nameFound = -1;
    
    for ( var i = 0 ; i < contacts.length ; i++ ) {
        if (contacts[i].firstName == name) {
            nameFound = i;
        }
    }

    if (nameFound == -1) {
      return "No such contact";
    } else if ( contacts[nameFound].hasOwnProperty(prop) ) {
      return contacts[nameFound][prop];
    } else {
      return "No such property";
    }
/* END OF SOLUTION 1 */

/* SOLUTION 2 */
    for ( var i = 0 ; i < contacts.length ; i++ ) {
      if (contacts[i].firstName == name) {
        if ( contacts[i].hasOwnProperty(prop) ) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
/* END OF SOLUTION 2 */

// Only change code above this line
}

lookUpProfile("Akira", "likes");


/* TESTS
"Kristian", "lastName" should return "Vos"
Passed
"Sherlock", "likes" should return ["Intriguing Cases", "Violin"]
Passed
"Harry","likes" should return an array
Passed
"Bob", "number" should return "No such contact"
Passed
"Bob", "potato" should return "No such contact"
Passed
"Akira", "address" should return "No such property"
 */