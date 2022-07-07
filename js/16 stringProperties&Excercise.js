// ! String Properties
var a = "My Resume";
var b = "My Resume";

// .concat() :  it will merge the another string
a = a.concat(" is Good");
console.log('--- merge the another string ---');
console.log(a);

// .length(): It will find out total length
console.log('--- find out total length ---');
console.log(b.length);

// .toLowerCase():  It will convert into lowercase 
console.log('--- convert into lowercase---');
console.log(b.toLowerCase());

// .toUpperCase(): It will convert into uppercase
console.log('--- convert into uppercase ---');
console.log(b.toUpperCase());

// .indexOf(): It will find out the index of alphabet
console.log('--- find out the index of alphabet---');
console.log(b.indexOf('u'));

// .lastIndexOf(): It will find out the last index of multiple one alphabet
console.log('--- find out the last index of multiple one alphabet ---');
console.log(b.lastIndexOf('e'));

// .charAt(): It will find out the character of given index
console.log('--- find out the character of given index---');
console.log(b.charAt(4));

// .endsWith(): It will chceck if string end with the given alphabet or not
console.log('--- chceck if string end with the given alphabet or not ---');
console.log(b.endsWith('e'));

// .includes(): It will check if string is including the given string or not
console.log('--- check if string is including the given string or not---');
console.log(b.includes('my'));

// .substring(1st index,last index): when we want to pick the specific range from the given string
console.log('--- when we want to pick the specific range from the given string ---');
console.log(b.substring(0,4));
console.log(b.substring(3,7));
console.log(b.substring(9,1));
console.log(b.substring(0,6));

// .slice(indexValues): returns the extracted part in a new string
console.log('--- Using slice() ---');
console.log(b.slice(-5));
console.log(b.slice(0,6));

// .split():  It will splits a string into an array of substrings
console.log('--- Using split() ---');
console.log(b.split(' '));

// .replace(oldValues, newValues): It will replace the values 
console.log('--- Using replace() ---');
console.log(b.replace('My', 'Your'));



// !String Excercise 
console.log(78 + "8");
console.log(45+5);
console.log(78 - "8");
console.log(45-5);
console.log("Java" + "Script");
console.log("Java" - "Script");
console.log("" + "");
console.log(" " + " ");
console.log("" - "");
console.log(" " - " ");
console.log(true + true);
console.log(true - true);
console.log(true + false);
console.log(true - false);
console.log(false + false);
console.log(false - false);
console.log(false + true);
console.log(false - true);