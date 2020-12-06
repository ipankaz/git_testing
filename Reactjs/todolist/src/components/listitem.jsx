import React from 'react'

function Listitem(props){
    
return(
    <>
    <li>{props.text}</li>
    <button onClick={()=>{
        props.onSelect(props.id)
    }}>X</button>
    
    </>
)
}

export default Listitem;