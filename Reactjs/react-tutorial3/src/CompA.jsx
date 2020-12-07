import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CompA(){
    const [num,setnum]=useState(1)
    const [name,setname]=useState()
    const [moves,setmoves]=useState()
    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data.name);
            setname(res.data.name)
            setmoves(res.data.moves.length)
        }
        getData()
       
    },[num])
    function Selected(event){
setnum(event.target.value)
    }
    return(
        <>
        <h1>you selected {num}</h1>
        <h2>Pokemon name is {name}</h2>
        <h3>Moves are {moves}</h3>
        <select onChange={Selected}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="25">25</option>
        </select>
        </>
    )
}
export default CompA