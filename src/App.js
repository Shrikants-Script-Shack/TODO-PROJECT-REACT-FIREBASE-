import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { useEffect ,useState } from 'react';
//-------------------------------------------
import Nav1 from './Compos/Nav1';
import {Route ,Switch} from 'react-router-dom';
import Todo from './Compos/Todo';
import Signup from './Compos/Signup';
import Login from './Compos/Login';
import { auth } from './firebase';
//-------------------------------------------
function App() {
 const [user, setuser] = useState(null)
 useEffect(() => {
  
  auth.onAuthStateChanged(user => {
    if(user)
    {
       setuser(user);
    }
    else
    {
      setuser(null);
    }
  })


 }, []);


  return(
    
    <BrowserRouter>
    <Nav1  user={user}></Nav1>
    <Switch>
      <Route exact path="/">
        <Todo user={user}></Todo>
      </Route>
      <Route exact path="/login">
        <Login></Login>
      </Route>
      <Route exact path="/signup">
        <Signup></Signup>
      </Route>
    </Switch>


    </BrowserRouter>
    
  )
}

export default App;