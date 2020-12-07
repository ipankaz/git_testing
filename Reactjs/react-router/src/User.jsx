import React from 'react'
import { useParams,useLocation } from 'react-router-dom'

// using match -->
const User = ({match})=>{
    
   
    return (
        <>
        <h1>Hello , My username is {match.params.fname} {match.params.lname}</h1>
    
        </>
    )
}

// using  useParams()-->

// const User = ()=>{
//     let {fname,lname} = useParams();

//     useLocation is same as Window.location in Javascript : it gives the url of the visited site 
//     const location = useLocation();
//     console.log(location);

//     useHistory() provides the previous url where you are visited and you can go back 
//     const history = useHistory();
//      console.log(history.goBack());
//     return (
//         <>
//         <h1>Hello , My username is {fname} {lname}</h1>
//         <p>My location is {location.pathname}</p> 
//         </>
//     )
// }
export default User;