import React from 'react';
import Heading from './components/Heading';
import Para from './components/Para';
import OrderList from './components/OrderList';

function App(){
    

    return(
        <>
        <Heading/>
        <Para/>
        <OrderList/>
        </>
    )
}
// deafult keyword is used so that when we import this function in some other file , we can store it in any 
// name of variable  OR
// we can say that when there are multiple functions and we export all of them , the one which have default keyword
// can be named anything but those functions which dont,have any default keyword that must be imported with
// the same function same
//Note : only one function can contain default keyword when exported
export default App