import React from 'react'
import {Route,Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Menu from './Menu'
import Services from './Services'
import User from './User'
import Search from './Search'

function App() {
  return (
    <>
    <Menu/>
    <Switch>
      {/* exact attribute : when it matches the exactly defined path , then it will render the about component */}
      <Route exact path='/about' component={About}/>  
      <Route path='/contact' component={Contact}/>
      {/* <Route path='/services' component={Services}/> */}

      {/* when you want to pass props to services component then render method is used otheriwse component  */}
      <Route path='/services' render={()=><Services name="Services"/>}/>

{/* // route : useparams() --> :fname and lname are the url parameters  */}
      <Route path='/user/:fname/:lname' component={User}/>

      <Route path='/search' component={Search}/>

      {/* when there is no path defined then error component will render */}
      <Route  component={Error}/>
    </Switch>
    </>
  );
}

export default App;
