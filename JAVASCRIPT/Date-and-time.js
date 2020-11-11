let date = new Date();
console.log(date);

// to change date or time 
let newDate = new Date(2012,0,19,23,34,15);
console.log(newDate);

console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getDate());

// displaying date and time on the website /

function updatetime() {
    time.innerHTML = new Date;
    
}

setInterval(updatetime , 1000);