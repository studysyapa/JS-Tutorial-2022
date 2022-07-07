//! 1. String​: Collection of letters. Only Text.​ Always written in “…” or ‘…’​
//! 2. Numbers​
//! 3. Boolean​:  True or False​
//! 4. Null​: Nothing​
//! 5. Undefined​
//! 6. Symbol​
//! 7. BigInt – Recently came in 2020 ***ES6 Feature***​.
    // Integer has limit of 16 bits. If we want to add more than 16 digits of number then we use the BigInt.
    // Syntax: ​
    var a = BigInt(YourNumber);  //1st way
    var a = yourNumbern  // 2nd way

// Example:​
    let a = BigInt(78);​
    let b = 78n​;
    console.log(typeof(a));​
    console.log(typeof b);