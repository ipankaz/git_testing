// Syncronus or blocking => it means running code line by line , another line will only run if previous 
// line has completed its work

// Asyncronus or non-bloking -> it means running code line by line but it will not wait for previous
//  commands to be completed , callbacks will fire

const fs = require('fs');
let text = fs.readFileSync("./Nodejs/text.txt",'utf-8');
text = text.replace('hey','hello');

// it will create a new file in the destination folder 
fs.writeFileSync('./Nodejs/newtext.txt',text);
console.log(text);