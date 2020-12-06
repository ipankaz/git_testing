import React, { createContext } from 'react'
import ComponentA from './ComponentA'
const Firstname = createContext()
const Lastname = createContext()
function App(){
  
  return(
    <> 
    <Firstname.Provider value={"Pankaj"}>
      <Lastname.Provider value={"Arora"}>
        <ComponentA/>
        </Lastname.Provider>
    </Firstname.Provider>
    </>
  )
}

export default App
export {Firstname,Lastname}

// React context api : It is used to transfer data directly from parent component to its nth child 
//unless passing it through to each child component one by one 
// how it worls ?
// 1) create context
// 2)  there should be one provider
// 3)  there should be one consumer