import React, { useState } from "react";
//Topic 1 : hooks
// Here, useState is a Hook (we’ll talk about what this means in a moment).
//We call it inside a function component to add some local state to it. React will preserve
// this state between re-renders. useState returns a pair: the current state value and a function
// that lets you update it. The only argument to useState is the initial state

// function App() {
//   const [count,setCount] = useState(0)

//Example 1 =>

//   function IncCount(){
//     setCount(count+1)
//   }
//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={IncCount}>click me</button>
//     </>
//   )
// }

//Example 2=>

// function App() {

//   const [currTime,setCount] = useState(new Date().toLocaleTimeString())

//   function IncCount(){
//     setCount(new Date().toLocaleTimeString())
//   }
//   return(
//     <>
//     <h1>{currTime}</h1>
//     <button onClick={IncCount}>click me</button>
//     </>
//   )
// }

// Example 3  = Digital Live clock

// function App() {
//   const [currTime, setTime] = useState(new Date().toLocaleTimeString());

//   function UpdateTime() {
//     setTime(new Date().toLocaleTimeString());
//   }
//   setInterval(UpdateTime, 1000);
//   return (
//     <>
//       <h1>{currTime}</h1>
//     </>
//   );
// }

// Topic 2 : Input elements

// function App() {
//   const [name,setName] = useState()
//   const [fullname,setfullName] = useState()
//   function inputEvent(event){
//     setName(event.target.value)

//   }
//   function clicked(){
//     setfullName(name)
//   }

//   return (
//     <>
//       <h1>Hello ,{fullname}</h1>
//       <input type="text" placeholder="Enter Your Name" onChange={inputEvent}></input>
//       <button onClick={clicked}>Click</button>
//     </>
//   );
// }

// topic 4 : Input form
// We will be using input tags using form tag

// function App() {
//   const [fname,setfname] = useState();
//   const [lname,setlname] = useState();
//   const [firstname,setfirstname] = useState();
//   const [lastname,setlastname] = useState();
//   function submitEvent(event){
//     event.preventDefault()  //It prevents reloading of page when submitting and it is very important for React
//     setfirstname(fname)
//     setlastname(lname)
//   }

//   function inputEvent(event){
//     setfname(event.target.value)

//   }
//   function inputEvent2(event){
//     setlname(event.target.value)

//   }

//   return (
//     <>
//       <h1>Hello ,{firstname} {lastname}</h1>
//       <form onSubmit={submitEvent}>
//       <input type="text" value={fname} placeholder="Enter Your First Name" onChange={inputEvent}></input>
//       <input type="text" value={lname} placeholder="Enter Your Last Name" onChange={inputEvent2}></input>
//       <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// Topic 5 : Handling Complex Input tag form

// function App() {
//   const [fullname, setfullname] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     phone: "",
//   });

//   function submitEvent(event) {
//     event.preventDefault(); //It prevents reloading of page when submitting and it is very important for React
//     console.log(event);
//     setfullname({
//       fname: event.target[0].value,
//       lname: event.target[1].value,
//       email: event.target[2].value,
//       phone: event.target[3].value,
//     });
//   }
//   function inputEvent(event) {
//     console.log(event.target.name);
//     const {name,value} = event.target
//     setfullname((prevValue)=>{
//       return{
//         ...prevValue,  // they gives the previous state values 
//         [name]:value  // it will find the 'name' property from the prevValue an assign the 'value' to it
//       }
  
//     })
//   }
//   return (
//     <>
//       <h1>
//         Hello ,{fullname.fname} {fullname.lname}
//       </h1>
//       <p>{fullname.email}</p>
//       <p>{fullname.phone}</p>
//       <form onSubmit={submitEvent}>
//         <input
//           type="text"
//           name="fname"
//           placeholder="Enter Your First Name"
//           onChange={inputEvent}
//         ></input>
//         <input
//           type="text"
//           name="lname"
//           placeholder="Enter Your Last Name"
//           onChange={inputEvent}
//         ></input>
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Your E-mail"
//           onChange={inputEvent}
//         ></input>
//         <input
//           type="number"
//           name="phone"
//           placeholder="Enter Your phone number"
//           onChange={inputEvent}
//         ></input>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// Challenge 6 : 

function App(){
  const [num,setNum] = useState(0)
  function increaseEvent(){
    setNum(num+1)
  }
  function decreaseEvent(){
    if(num>0){
      setNum(num-1)
    }else{
      alert("Negative numbers not allowed")
    }
    
  }
  return(
    <>
<h1>{num}</h1>
<button onClick={increaseEvent}>Increment</button>
<button onClick={decreaseEvent}>Decrement</button>
</>
  )
}

export default App;
