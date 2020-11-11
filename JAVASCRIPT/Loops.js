let array = [1,2,3,4,5,6];

for( let i =0 ;i < array.length ; i++){
    console.log(i);
}

array.forEach(function f(element) {
     console.log(element);
});

for (elements of array){
    console.log(elements);
}


let employe = {
    name : "ankush",
    salary : 1200,
    age : 20,
}
 for(key in employe){
     console.log( `${key} : ${employe[key]}`);
 }
let j=2;
 while(j<4){
     console.log("less");
     j++;
 }