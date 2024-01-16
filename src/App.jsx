import React from 'react'
import { useState } from 'react'
import SignUpForm from './Components/SignUpForms'
import Authenticate from './Components/Authenticate'
import './App.css'

/*
I do not understand how to send props to components and have 
children update their state. That is what we need here. 
*/

function App() {
  const [token, setToken] = useState (null);
  return (
    <>
    <SignUpForm token ={token} setToken ={setToken}/> 
    <Authenticate token ={token} setToken ={setToken}/>
    </>
  )
}

export default App;
