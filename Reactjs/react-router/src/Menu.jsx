import React from 'react'
import {NavLink} from 'react-router-dom'

function Menu(){
    return(
        <>
        <NavLink exact to='/about'>About</NavLink>
        <NavLink exact to='/contact'>Contact</NavLink>
        <NavLink exact to='/services'>Services</NavLink>
        <NavLink exact to='/user/pankaj/arora'>User</NavLink>
        <NavLink exact to='/search'>Search</NavLink>
        </>
    )
}

export default Menu