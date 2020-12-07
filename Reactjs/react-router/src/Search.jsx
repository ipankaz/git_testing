import React, { useState } from 'react'
import Result from './Sresult'

function Search(){
    const [img,setImg] = useState('')
    function inputEvent(event){
console.log(event.target.value);
setImg(event.target.value)
    }
    return(
        <>
        <div>
        <input type="text" placeholder="Search" value={img} onChange={inputEvent}/>
        </div>
     {img===""? null : <Result name={img}/>}
         </>
    )
}

export default Search