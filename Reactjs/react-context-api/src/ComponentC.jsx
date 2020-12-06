import React, { useContext } from 'react'
import {Firstname} from './App'
import {Lastname} from './App'
 // 1) first way : using .consumer

// function ComponentC(){
//   return(
//   <Fullname.Consumer>{(element)=>{ // context consumer always expect a function inside it and the parameters of function is the data provided by context provider
//       return <h1>{element}</h1>
//   }}</Fullname.Consumer>
//   )
// }

// 2) Second way : using useContext()
// It is much easier because no need to create function and return value

function ComponentC(){
    const fname = useContext(Firstname)
    const lname = useContext(Lastname)
    return(
    <h1>My name is {fname}{lname}</h1>
    )
}
export default ComponentC;