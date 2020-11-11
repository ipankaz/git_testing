function person(name,age){
    this.name = name;
    this.age = age;
  this.isadult = function(){
      
    return this.age>=18
  }
  
  person.prototype.isadult_prot = function(){
      
    return this.age>=18
  }

}

let p1 = new person('pankaj',17);  // when new keyword is used , it means we have created an object and
                                   // now this function is act as an object.
 let p2 = new person('ankush',22);
console.log(p1.isadult()); // one isadult() is made for person p1
console.log(p2);
console.log(p2.isadult()); // another isadult() is made for person p2
console.log(p1.isadult==p2.isadult); // false , because both are created in different memory , 
//To avoid this, in some cases we need common functionality and we have to reduce
// memory usage so we made a isadult() in person prototype

console.log(p1.isadult_prot==p2.isadult_prot); // true , because we created isadult_prot() in person prototype



// C:\Program Files\MySQL\MySQL Shell 8.0\bin\