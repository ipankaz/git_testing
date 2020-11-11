// IIFE -->   Immediate Invoked Function Expression 

// This function is immediately executed without calling it 

(function(){
    console.log("Heloo");
})()

// Benefits of this IIFE system 
// we can create a scope of var variables block 

if(true){
    (function(){
        var a=10;
    })()
}

console.log(a);   // it will give you error because now var a has a scope of block now 