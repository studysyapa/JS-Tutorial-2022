// ! Break Keyword: If given condition is true then it will break the execution statements & jump to the outside of the Function.  it will not print giving statements after the condition.

// Example:
let num = +prompt("Enter the Number you want to print the counting.")
for(let i = 0; i < num;i++){
    if(i===7){
        break; //when i =7 it will not print the 7 and directly jump the outside of the loop. even if given i > 7;
    }
    document.write(` ${i}<br>`); // it will print only the i<7    
}

document.write("Exit the For loop code<br>");



// ! Continue Keyword: if given conditiion is true it will skip that condition part execution Statement. But it will print giving statements after the condition. 

// Example:
let num1 =  +prompt("enter the number");
for(let j = 0; j < num1; j++){
    if(j===7){
        continue;
    }
    document.write(`${j} <br>`);
}
document.write(`<br> Exit the code `);