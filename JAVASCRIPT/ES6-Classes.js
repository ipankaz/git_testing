class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    isadult(){
        return this.age >=18;
    }
}

let p1 = new person('pankaj' , 22);
let p2 = new person('ankush' ,17);
 console.log(p1.__proto__ == person.prototype);
 console.log(p1.__proto__.__proto__ == Object.prototype);

//  INheritance in classes 

class student extends person {
    constructor(name,age,grade){
        super(name,age)
this.grade = grade;
        
    }
}

let s1 = new student("aman" ,16 , '5th')
let s2 = new student("laksh" ,19 , '12th')

// chain of ingeritance 
//  object.prototype --> person.prototype --> student.prototype 

console.log(s1.__proto__ == student.prototype);
console.log(s1.__proto__.__proto__ == person.prototype);
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype);
