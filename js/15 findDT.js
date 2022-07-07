//! find #dt 
var a = "hello world";
var b = 'hello world';
var c = 87;
var d = "78";
var e = true;
var f = "true";
var g = null;
var h = [1,2,3,"testing"];
var i = {name:"n1",id:5};

console.log("data type of a =",a + " is " + typeof a);
console.log("data type of b =",b + " is " + typeof b);
console.log("data type of c =",c + " is " + typeof c);
console.log("data type of d =",d + " is " + typeof d);
console.log("data type of e =",e + " is " + typeof e);
console.log("data type of f =",f + " is " + typeof f);
console.log("data type of g =",g + " is " + typeof g);
console.log("data type of h =",h + " is " + typeof h);
console.log("data type of i =",i.name + " and " + i.id + " is " + typeof i);
    

// stringLength
var aa = "Hello world";
aa = aa.length;
var bb = "hey ";
bb = bb.length;
console.log("The total length of string a is ",aa);
console.log("The total length of string b is ",bb);

// firstCharacterOfString 
var aaa = "Welcome!";
bbb = aaa[0];
console.log("The First Character of ",aaa + " is ",bbb);


// nth character 
var j = "Javascript";
k = j[5];
l = j[8];
console.log("the 6th letter of ",j + " is ",k);
console.log("the 9th letter of ",j + " is ",l);

// last character of string 
var jj = "Welcome!";
kk = jj[jj.length-1];
console.log("The Last Character of ", jj + " is ",kk);

// first second last charater 
var m = "HELLOWORLD";
n = m[m.length-2];
console.log("the Second Last Character of String ",m + " is ",n);

// Find Limit Of Number
let gh =5875;
console.log(Number.MAX_SAFE_INTEGER);