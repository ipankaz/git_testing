// Data Types 

// var a global scope 
var a=10;
var b="hello";
c='e';
console.log(a + " " + b + " " + c);

// let have a local scope 
{
let d ="My name is pankaj"
console.log(d);
}

// cons value can't be change through out the progeam 
const temp ="This can't be changed";
console.log(i);

// exponent operator 
console.log(2**9);


// Strings 

var name="PANKAJ";
var name2 = 'PANKAJ';
var name3 = `PANKAJ`;
var string1 = new String("costructor");

var channel = "geekgram";
console.log(`${name} has a channel named ${channel}`)

console.log(`length of channel is ${channel.length}`);

console.log(string1);

// it will print substring till 5-1= 4 index 
console.log(name.substring(2,5));

// slice can take -ive index values 
console.log(name.slice(2,5));

// it will print substring till 5 index 
console.log(name.substr(2,5));

console.log(name.charAt(2));

console.log(name[2]);

var string2 = "  This is my youtube website  ";

console.log(string2.indexOf("is"));

console.log(string2.lastIndexOf("is"));

console.log(string2.replace("my","our"));

console.log(string2.toUpperCase());

// it will remove white spaces from start and end of the string 
console.log(string2.trim());

// Date and Time 
let date = new Date();
console.log(date);