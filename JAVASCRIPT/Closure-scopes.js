// in javascript , we can create a function inside another fuction 
  /*here we can see that first and second are available inside the up and down function and 
  i.e is called closue ScopedCredential, they have closure scope , they can access their parent function variables
  also
  */

function mathes( first , second){
return {
     up(){
        first += second;
        console.log(first);
    },
down(){
    first -= second;
    console.log(first);
}
}
}
let c = mathes(10,2);
c.up();
c.down();


(function() {
     return (() => this.x).bind({ x: 'inner' })(), (() => this.x)() }).call({ x: 'outer' })