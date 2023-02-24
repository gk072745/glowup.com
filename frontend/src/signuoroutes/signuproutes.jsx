import React from 'react'

import {Routes,Route} from "react-router-dom"
import Login from '../login/Login'
import SignupCard from '../login/userSignup'


const Allroute = () => {
  return (
  <>
  <Routes>
    <Route path='/' element={<SignupCard />}></Route>
    <Route path='/login' element={<Login />}></Route>
   
  </Routes>
  
  </>
  )
}

export default Allroute