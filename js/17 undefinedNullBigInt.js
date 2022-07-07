//! undefined: when you declare the variable but not initialize its value 
let v;
console.log(typeof v);

// !null: means nothing, we initialized the value with nothing 
let v1 =null;
console.log(typeof v1); //in output it will show you the "Object" data type instead of "null" data type

// * actually this is the bug/error in js. actually most of the people updating their code using this bug. so they have to correct all those codes along with this bug/error. That's why this bug cant be fixed.


// !BigInt: it comes in 2020, if we want to store maximum digits of number we will use this. Normal limit is 16 digits of number, but if we want to store the maximum digits of number we will use this. 
let a = 5657;
// Number.MAX_SAFE_INTEGER : using this we can find the limit of the number 
console.log(Number.MAX_SAFE_INTEGER);
let b = BigInt(577); // 1st way
let c = 575787669n; // 2nd way
console.log(typeof b);
console.log(typeof c);