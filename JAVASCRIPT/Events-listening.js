let para = document.getElementById('para');
let button = document.getElementById('btn');
function togglehide(){
    if(para.style.display!='none'){
        para.style.display='none';
        
    }else{
        para.style.display='block';
    }
}

para.addEventListener('mouseover' , function run() {
    console.log("inside");
})
    
para.addEventListener('mouseout' , function run() {
    console.log("outside");
})


// Settimeout and Setinterval 

function greet(name) {
    console.log("Happy Birthday " + name);
}

// it will run the function only once after the given time in ms and it will return an id which we
//  can use to stop it
let timeoutiD = setTimeout(greet , 1000 , 'Pankaj');
    
// to stop it , we have to use clearTimeout
clearTimeout(timeoutid);

let intervalId = setInterval(greet , 2000 , 'tatta');
clearInterval(intervalId);

