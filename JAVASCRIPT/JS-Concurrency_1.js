// Javascript is concurrent which means it can run multiple program by sharing time but in a single thread just
// like single core processor

// to achieve this lets take an e.g -->

function slayer(count,name){
    
    let times=0;
   let id =  setInterval(() => {
      console.log("hello " + name); 
      times++; 
      if(times==count){
        clearInterval(id);
    }
    }, 100);

    
}

slayer(3,'pankaj');
slayer(3,'ankush');

// output  
/*   hello pankaj
     hello ankush
     hello pankaj
     hello ankush
     hello pankaj
     hello ankush */

     //you can see that slayer(3,'pankaj'); has not yet been completed and slayer(3,'ankush'); has been started
     //and both are running simantanously , this means they both have shared time one by one and
     // i.e is known as Javascript concurrency. We can avoid Javascript concurency by Asyncronus function 
     // callbacks, lets see how -->


     function slayer2(count,name,donesaying){
    
        let times=0;
       let id2 =  setInterval(() => {
          console.log("hello " + name); 
          times++; 
          if(times==count){
            clearInterval(id2);
            donesaying();
        }
        }, 100);
    
        
    }

    
    slayer2(3,'pankaj',()=>{
        slayer2(3,'ankush',()=>{
            slayer2(3,'shipu',()=>{

            })
        })
    })

// output -->
// hello pankaj
// hello pankaj
// hello pankaj
// hello ankush
// hello ankush
// hello ankush
// hello shipu
// hello shipu
// hello shipu
