//! use strict: keyword is used for identifying the small errors. It will be place at the top in JS file.
// Syntax: "use strict";
"use strict";



//! Variables: Variable means anything that can vary. It is simply a name of a storage location.
// Use of variable:​
//     It is used to store or hold the data value or information.​
//     It can be changed anytime.


// Variable Declaration & initialization: 
myVar = "Hello World";

// How to call a variable 
console.log(myVar);

// Change Variable Value 
myVar = "Updated Value";
console.log(myVar);

// so here is 2 variable of same name and that is the problem for the developer to fetch  the correct variable value
// so here JS provide "use strict"; mode 
// it will save us to make the mistakes 


myVar1 = "Hey";
console.log(myVar1);

myVar1="updated";
console.log(myVar1);


// ! Rules of Variables 
// 1. Can not start with number 
    // 1myvar = incorrect
    // myvar1 = correct

// 2. Only use Underscore(_) or Dollar($)
    // my_var = correct
    // _myvar = correct
    // my$var = correct
    // $myvar = correct

// 3. can not use space 
    // my var = incorrect

// 4. Best way to is a camelCase
    // myVar = correct

//! Variable Name Case Types​
// camelCase​
// snake_case​
// kebab-case​
// PascalCase​


// ! let Keyword : we can also use the let keyword to declare the variable
let myVar2 ="Hey";
console.log(myVar2);

// ! const Keyword : it will use when we want a variable value unchangable
const pi = 3.14;
pi = 3.89; 
console.log(pi); // here it wil give the TypeError message