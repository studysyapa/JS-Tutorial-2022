// ! Expression 
    // It is the  combination of operators & Operands​
    // Expression = Operators + Operands    
    // 30+3 = 33 ​: Complete equation is Equation​
    // + ,=  is Operators​
    // 30, 3 is Operands​


// ! Operators 
//* 1. Assignment​
    // Equal to (=) is Assignment Operators.​
    // It assigns a value to its left Operands.​


//* 2. Arithmetic​
    // It takes numerical values.​
    // It includes +, -, /, %, *​


//* 3. Comparison​
    // It compares the value and return in true or false.​
    // It includes ===, ==, >, <, >=, <=, !=​


//* 4. Logical​
    // It combines the multiple Boolean values/expression and provide a single Boolean o/p.​
    // It includes &&(AND), || (OR), !(NOT)​
    // 4.1 && (AND)​:    Both condition must be true.​
        // Example​    
        let a = "Welcome";
        let b = 45;
        if(a[0]==="W" && b>=58) {
            Console.log("Correct");
        }
// 4.2 || (OR):One condition must be true.​
// 4.3 ! (Not):It gives opposite value.

//* 5. String​
// In this plus (+) operator is used to concatenates or add more than one string.​
// Example:
    var c = 'Hello';
    var d = 'World';
    console.log(c+d);
    console.log("Welcome" + c);
    console.log("Welcme" + " "  + "User");


//* 6. Conditional or Ternary​ 
// These are the decision making statements.​
// It works on only 3 Operands. That’s why it is called TERNARY OPERATOR.​    
// It includes if, if else, nested if.​

// 6.1 Simple If Else Example:
    let age = 4;
    let drink;
    if(age>=5){
        drink = "coffee";
    }else {
        drink = "milk";
    }

// 6.2 Ternary Operator Example
    let age1 = 8;
    let drink1 = age1 >= 5 ? "coffee" : "milk";
    console.log(drink);

// 6.3 Nested If Example:​
    // Suppose passing marks = 65​
    // 65 = pass​
    // 50 = low​
    // 80 = Highest​    
    let passingMarks = 65;
    let userMarks = +prompt("Enter a Number");
    if(userMarks===passingMarks){
        console.log("Pass");    
    }else{
        if(userMarks<passingMarks){
            console.log("Low");
    }else{
        console.log("Highest");
    }
    }

    // 6.4 If elseIf elseIf elseIf else Example:​
    let z = 50;
    if(z<0){        
        console.log("Extremly cold outside");
    }else if(z<16) {        
        console.log("cold outside");
    }else if(z<25){
        console.log("wheather is okay.");       
    }else if(z<35){
        console.log("lets go for swim.");
    }else if(z<45){
        console.log("Turn on AC");
    }else{
        console.log("Too HOT");
    }

//* 7.Increment or Decrement Operators​  
// There are 2 types of increment & decrement operators​
// Pre Increment / Decrement​: 1st increment/decrement then assign value.
// Post Increment / Decrement​: 1st assign value then increment/decrement.

//#         Pre increment       Pre decrement       Post increment      Post decrement
//1             ++X                 --X                 X++                 X--

//              then                then                then                then
//2             X=X+1               X=X-1           X=oldValueofX       X=oldValueofX
//              then                then                then                then
//3         X=newValueofX       X=newValueofX           X=X+1               X=X-1



// Example 
//  x                                   y                   o/p​
//  1       
// x=1 then +1, x=2                     y=1
//                                                          2
// x=2 then +1, x=3                                         2
//                                                          1
//                                 y=1  then -1, y=0        1

// * 1st program 
    var x = 1; 
    var y = x++; 
    console.log(x); 
    console.log(x++);
    console.log(y); 
    console.log(y--); 

// * 2nd program
    var e = 5;
    var f = c;    
    console.log(e);
    console.log(f);    
    e++;
    console.log(e);
    console.log(f);
    ++e;
    console.log(f);
    console.log(e);