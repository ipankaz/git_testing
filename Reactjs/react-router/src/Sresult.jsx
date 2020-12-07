import React from 'react'

function Result(props){
    const url = `https://source.unsplash.com/200x200/?${props.name}`
    return(
        <>
        <img src={url} alt="search result"/>
        </>

    )
}

export default Result