// ==  abstract eqyality
//===  sameness eqyality

console.log('1'==1) // true , because string will be typecasted and will become 1==1 , so true

console.log('1'===1) // false, it will check both datatype and data , so false

// peculiar cases 

console.log(''==0) // true , because empty string will be typecasted and become 0 .

console.log('false'==false) // false , because string 'false' cannot be typecasted into number.

console.log(0==false) // true, because false will be typecasted and becomes 0 .

console.log([1,2]==[1,2]) // false , because both are created objects  diiferent arrays and have different 
                           //pass by refernce value



// Actual prototypes -->

let obj1 = {
    a:1,
    b:2,
    c:3,
};

let obj2 = Object.create(obj1); // Inheritance
console.log(obj2==obj1) // false , I will tell you why , both objects have same data inside them but 
                        // both objects have different reference and we know objects works on pass by reference 

       obj2.__proto__==obj1 // true , because object 2 is inherited from object and proto gives that object from
                            //which it is inherited.              

    /*
    obj2.a -> will try to find a in obj2
    if not found -
    it will try to find it in __obj2.__proto__
    if not fount -
    it will try to find it in obj2.__proto__.__proto__
    and so on......
    till __proto__ becomes null .....
    
    */                        