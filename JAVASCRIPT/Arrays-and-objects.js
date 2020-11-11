// Arrays

let array=[1,2,3,4,"harry",true];
console.log(array[2]);

let array2 = new Array(3,2,1);
console.log(array2[1]);

// it will create array of size 25 
let array3 = new Array(25);
array3[4] = 39;
console.log(array3[4]);

// it will push 0 to the end 
array2.push(0);

// it will remove the last item in the array 
array2.pop();
console.log(array2.sort());

// Similary we can add or remove items at the beggining of the array 

// removes first elemnt 
array2.shift();

// add elements a tthe beggining of the array 
array2.unshift("mango");

let array4 = ['sa' , 're' , 'ga' , 'ma' , 'pa'];

// it will slice elements from the given index positions 
console.log(array4.slice(0,3));
// it will slice elements from the given index position till the end 
console.log(array4.slice(3));

// it will splice array from position 2 and Node. of elements to be spliced is 1 , it is destructive in nature
array4.splice(2,1);
console.log(array4);

// it is also used to change elements of array 
array4.splice(1,2,'poo' , 'soo');
console.log(array4);

// concat 
// its non-destructive in nature means , if we again print array4 then original array will be printed 
console.log(array4.concat("coo" ,"caa" , "caa" , "coo"));

// Objects
// one way 
let employe = {
    Name : "Ankush",
    Salary : 1500,
    degree : "doc",

}

// another way ( Not Hoisted )
class fruits{
    constructor(color,taste){
        this.color = color;
        this.taste = taste;
    }
};

// another way again ( Hoisted )

let fruits2 = class{
    constructor(color,taste){
        this.color = color;
        this.taste = taste;
    }
};

let orange = new fruits("red" , "sour");
console.log(orange);


// There are two ways to access object elements 
console.log(employe.Name);
console.log(employe['Salary']);