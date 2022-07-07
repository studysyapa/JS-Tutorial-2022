// ! Primitive
    // - Primitive are known as being Immutable #dt because there is no way to change a primitive value once it get created.​

        // Example​
        var a = "Hello Worlb";
        a[9] = "d";
        console.log(a); // In this it will not print “d” instead of “b” So we have to change the whole string.​

    // Another Example​
        var a = "Hello Worlb";
        a = "Hello World";
        console.log(a);

// - Primitive are compared by values, Two values are strictly equal if they have the same value.​

    // Example​
        var a = 5;        
        var b = 5;        
        var c = "hello world";        
        var c = "hello world"; //  In this program a=b & c=d. Because they have same values.

// - Primitive has no objects and no methods.



// ! Non-Primitive 
// - Non Primitive values are Mutable #dt. The values of an object can be changed after it get created.​

// Example​
    var a = [1,2,3,8];
    a[3] = 4;
    console.log(a);


// - Non Primitive: Objects are not compared by values. Lets get this with an example:
// Example​
    var obj1 = {name: 'name', id:5};
    var obj2 = {name: 'name', id:5}; // In this obj1 is not equal to obj2.

// Another Example​
    var obj3 = {name:"name"};
    var obj4 = obj3;​ // In this obj3 is equal to obj4.​