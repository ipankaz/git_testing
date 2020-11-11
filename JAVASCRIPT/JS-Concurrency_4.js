// Here I want first 3 slayer batch to run first and then after another 3 slayer batch ,
//to achieve this we use Promise.all([]) . Inside it we will give array elements of promises i.e slayer5

function slayer5(count,name,){
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
    await Promise.all([
         slayer5(3,"pankaj") ,    // await can't be used without async function
     slayer5(3,"ankush"),
     slayer5(3,"shipu")
    ])

console.log("------------first batch over -------------")

   await Promise.all([
     slayer5(3,"hunny"),
    slayer5(3,"shweta"),
     slayer5(3,"sahil")
   ])
}
task()

// output
// hello pankaj
// hello ankush
// hello shipu
// hello pankaj
// hello ankush
// hello shipu
// hello pankaj
// hello ankush
// hello shipu
// ------------first batch over -------------
// hello hunny
// hello shweta
// hello sahil
// hello hunny
// hello shweta
// hello sahil
// hello hunny
// hello shweta
// hello sahil