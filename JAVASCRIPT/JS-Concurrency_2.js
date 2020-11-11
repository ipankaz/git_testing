// In previous part , we have seen making function non-concurrent by callbacks and in this part , i will tell
// we canachieve same thing by promises

function slayer3(count,name,){
return new Promise((resolve, reject) => {
    let times=0;
    let id2 =  setInterval(() => {
       console.log("hello " + name); 
       times++; 
       if(times==count){
         clearInterval(id2);
        resolve()
     }
     }, 100);
 
});

// output 
// hello pankaj
// hello pankaj
// hello pankaj
// hello ankush
// hello ankush
// hello ankush
// hello shipu
// hello shipu
// hello shipu
  
    
}

slayer3(3,"pankaj")
.then(()=>slayer3(3,"ankush")
.then(()=>slayer3(3,'shipu')))