import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Homepage/Home'
import AllPages from '../Pages/AllPages/AllPages'
import Login from '../Pages/login/Login'
import SignupCard from '../Pages/login/userSignup'
import SingleProductPage from '../Pages/SingleProductPage'
const MainRoute = () => {
  return (
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path="/product/:category" element={<AllPages/>}  />
         <Route path="/SingleProduct/:id" element={<SingleProductPage/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/signup' element={<SignupCard/>} />
    </Routes>
  )
}

export default MainRoute