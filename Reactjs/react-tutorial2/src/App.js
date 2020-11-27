import React, { useState } from 'react'
// hooks
// Here, useState is a Hook (we’ll talk about what this means in a moment). 
//We call it inside a function component to add some local state to it. React will preserve
// this state between re-renders. useState returns a pair: the current state value and a function
// that lets you update it. The only argument to useState is the initial state

function App() {
  const [count,setCount] = useState(0)


  function IncCount(){
    setCount(count+1)
  }
  return(
    <>
    <h1>{count}</h1>
    <button onClick={IncCount}>click me</button>
    </>
  )
}

export default App;
