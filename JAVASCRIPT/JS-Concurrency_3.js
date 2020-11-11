// In previous part , we have seen that , we can make a program non-concurrent by implementing promises 
// there is one more easier method to do the same . In this method we still uses promises , but to get the
// return part of promises we uses .then but here things are different , lets see -->

function slayer4(count,name,){
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
     
    })
}

async function task(){         
    await slayer4(3,"pankaj")     // await can't be used without async function
    await slayer4(3,"ankush")
    await slayer4(3,"shipu")
}
task()

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
