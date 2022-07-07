//! Loops means the repetitions of code.​
// And each repetitions called Iteration.​
// Types​
    //1. While: When need to stop the loop based on certain condition.​
    //2. For : is used when you know how many times your loop needs to iterate.​
    //3. Do-while: is mainly used in the case where we need to execute the loop at least once.​

//! 1. For Loop 
let a = [1,2,3,4,5,6];
let b;
for(b=0;b<a.length;b++){
    document.write("At index => "+b+" the value=> "+a[b]+"<br>");
}

// break keyword 
document.write("<br>*********break Keyword*********");
document.write("<br>*********it will stop the loop after index = 4*********<br><br>");
let c = [1,2,3,4,5,6]
let d;
for(d=0;d<c.length;d++){
    if(d>=4) break
    document.write("At index => "+d+" the value=> "+c[d]+"<br>");
}

// continue keyword 
document.write("<br>*********continue Keyword*********");
document.write("<br>*********it will skip index = 4 value*********<br><br>");

let e = [1,2,3,4,5,6,7,8,9,0];
let f;
for(f=0;f<e.length;f++){
    if (f===4) continue
    document.write("At index => " +f +" the value => "+e[f]+"<br>");
}

//! 2. While loop 
let g=0;
while(g<10){
    g++;
    document.write("<br> g is = ", g);
}
document.write("<br><br> g is = ", g);



//! 3. Do while Loops 
let h=45;
do {
    document.write('HEllo welcome');
    h++;
}while(h<=10);