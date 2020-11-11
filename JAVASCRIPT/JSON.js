let student = {
    name : "pankaj",
    rollno : 18001003083,
    classs : "CE52",
}
console.log(student);

// converting to json string file for easier transportation 

let jsonStudent = JSON.stringify(student);
console.log(jsonStudent);


// converting back to object form through parsing 
let parseStudent = JSON.parse(jsonStudent);
console.log(parseStudent);