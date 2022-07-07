// ! String Indexing
let myVar = "Welcome";
// W   e   l   c   o   m   e
// 0   1   2   3   4   5   6  

console.log(myVar[5]);

//! .length() : find length of string 
console.log(myVar.length);

// ! .length-1 : find last index value of string 
console.log(myVar[myVar.length-1]);

// ! some useful string methods 
// * 1. trim() : it will remove  the extra spaces
let myVar1 = "        Hello World       ";
console.log(myVar1.length);
let newVar = myVar1.trim();
console.log(newVar.length);


// * 2. toUpperCase() : it will capitalize the all characters
console.log(newVar.toUpperCase());

// * 3. toLowerCase() : it will lowercase the all characters
console.log(newVar.toLowerCase());

// * 4. slice() : it will give you the particular character(start index, end index). But it will not include the last index values.
// h   e   l   l   o       w   o   r   l   d
// 0   1   2   3   4   5   6   7   8   9   10 

let sliceString = newVar.slice(1,4);
console.log(sliceString);