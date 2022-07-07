//! swtich:
    // - We can use this switch statement instead of if elseif elseif elseif if condition.
    // Used to perform different actions based on different conditions.
    // It can replace multiple if Statement 
    
    let day;
    day = +prompt("Enter the day between 0 to 6 digits only ");
    
    // if (day===0){
    //     console.log("Sunday");
    // }else if (day==1){
    //     console.log("Monday");
    // }else if (day==2){
    //     console.log("Tuesday");
    // }else if (day==3){
    //     console.log("Wednesday");
    // }else if (day==4){
    //     console.log("Thursday");
    // }else if (day==5){
    //     console.log("Friday");
    // }else if (day==6){
    //     console.log("Saturday");
    // }else{
    //     console.log("Be sure your number comes between 0 to 6 digits");
    // }
    
    //! without using "break" keyword, whatever the number we put here , it will print the statements with that number and further numbers 
    // for e.g: if we put here 5 then it will print case 5 statement, case 6 statement. also print the default statement.
    
    // switch (day) {
    //     case 0: console.log("Sunday"); 
    //     case 1: console.log("Monday");
    //     case 2: console.log("Tuesday"); 
    //     case 3: console.log("Wednesday"); 
    //     case 4: console.log("Thursday"); 
    //     case 5: console.log("Friday"); 
    //     case 6: console.log("Saturday"); 
    //     default: console.log("Number must be comes in nbetween 0 - 6");
    // }
    
    
    
    // !with using the "break" keyword, then it will print statement of only given number.
    // for e.g.: if we put the 5 number then it will print only case 5 statement
    
    switch (day) {
        case 0: console.log("Sunday"); break; 
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        default: console.log("Number must be comes in nbetween 0 - 6");
    }