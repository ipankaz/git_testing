// All these have same type i.e function 

console.log("type of string : " , typeof String)
console.log("type of Number : " , typeof Number )
console.log("type of array : " , typeof Array)
console.log("type of object : " , typeof Object)
console.log("type of function : " , typeof Function)
console.log("type of Boolean : " , typeof Boolean)


let x = "abc";
let num = 123;
let bool = true;
let array = [1,2,3];
let obj = {};
let fun = function(){
    console.log("function");
}

// All are true because primite type inherit from functions and functions are inherited from objects 

console.log(x.__proto__.__proto__==obj.__proto__);
console.log(num.__proto__.__proto__==obj.__proto__);
console.log(bool.__proto__.__proto__==obj.__proto__);
console.log(array.__proto__.__proto__==obj.__proto__);
console.log(obj.__proto__==obj.__proto__);
console.log(fun.__proto__.__proto__==obj.__proto__);

// Prototypes String.prototype

console.log(x.__proto__==String.prototype);
console.log(num.__proto__==Number.prototype);
console.log(bool.__proto__==Boolean.prototype);
console.log(array.__proto__==Array.prototype);
console.log(obj.__proto__==Object.prototype);
console.log(fun.__proto__==Function.prototype);

// typeof Object.create(Boolean); --->  it will create object and its typeof will be object not boolean 
// remember

// we can change the inbuilt default string functions or number functions etc by rewritting in their ptototypes

let str =  "abcd";
String.prototype.charAt = function(){
    return 'x';
}

// it will return 'x'  in all these cases 

console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
