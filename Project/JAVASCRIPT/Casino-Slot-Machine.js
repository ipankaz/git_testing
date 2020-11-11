let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');
let speed= document.getElementById('speed');
let start = document.getElementById('start');
let value = document.getElementsByClassName('value');




let values = ['😂','😍','😥' , '🥵','🥶','👽','😱','😏'];


function getrandomvalue(){
    return values[Math.floor(Math.random()*8)];
}

function startbtn(){
    setTimeout(() => {

        // clearinterval 
        console.log("timeout");
        clearInterval(animationid)

       

        // Result 
    if(value1.innerText==value2.innerText==value3.innerText){
        console.log("Winner");
    }else{
        console.log("Looser");
    }

    // Timing 
    }, 1/speed.value*50*1000);
    
    console.log("clicked start");
    
    value1.style.animationPlayState = "running";
    value2.style.animationPlayState = "running";
    value3.style.animationPlayState = "running";

  
;    
}

let animationid;
function updateanimation(newspeed){
    if(animationid){
        clearInterval(animationid)
    }
  animationid =  setInterval(() => {

        value1.innerText = getrandomvalue();
        value2.innerText = getrandomvalue();
        value3.innerText = getrandomvalue();
        
    }, 1000/newspeed);
}


speed.onchange = function(event){

    // root = document.documentElement 

    document.documentElement.style.setProperty('--speed',event.target.value)
    updateanimation(event.target.value)

}