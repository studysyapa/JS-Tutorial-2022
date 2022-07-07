// !Falsy Values: false, "", null, undefined, 0, NaN 
let c = "";
if(c){
    console.log(c);
}else{
    console.log("empty values");
}

// NaN: Not a Number 
// It is a property of a global Object.​
// We can check the numerical value by using isNaN() method.​
    // Syntax:
        // isNaN(varName);


//!Truthy Values: Except the falsy values all values will be truthy values. 1, -1 will also come under truthy values. 
let d = -1;
if(d){
    console.log(d);
}else{
    console.log("falsey Values");
}