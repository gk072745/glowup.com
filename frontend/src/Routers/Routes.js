import React from 'react'
import {Routes,Route} from "react-router-dom"
import OtherNavbar from '../components/OtherNavbar'
import Home from '../Homepage/Home'
import Mainnav from '../Homepage/mainnavbar/Navbar1'
import SearchNav from '../Homepage/mainnavbar/Search'
import Topnavbar from '../Homepage/navbar/topnav'
import Navbardrop from '../Homepage/newnavbar/nav3'
import Address from '../Pages/Address'
import AllPages from '../Pages/AllPages/AllPages'
import Login from '../Pages/login/Login'
import SignupCard from '../Pages/login/userSignup'
import Payments from '../Pages/Payments'
import SingleProductPage from '../Pages/SingleProductPage'
import Wishlist from '../Pages/Wishlist/Wishlist'
import { PrivateRoute } from './PrivateRoutes'
const MainRoute = () => {
  return (
    <Routes>
         <Route path='/' element={
          <>
          <Topnavbar/>
          <Mainnav/>
          <SearchNav/>
          <Navbardrop/>
          <Home />
          </>

         }/>
         <Route path="/product/:category?" element={
          <>
          <Topnavbar/>
          <Mainnav/>
          <SearchNav/>
          <Navbardrop/>
          <AllPages/>
          </>
          }  />
         <Route path="/singleproduct/:id" element={
          <>
          <Topnavbar/>
          <Mainnav/>
          <SearchNav/>
          <Navbardrop/>
          <SingleProductPage/>
          </>
          } />
         <Route path='/login' element={
          <>
          <Topnavbar/>
          <Mainnav/>
          <SearchNav/>
          <Navbardrop/>
          <Login/>
          </>
          } />
         <Route path='/signup' element={
          <>
          <Topnavbar/>
          <Mainnav/>
          <SearchNav/>
          <Navbardrop/>
          <SignupCard/>
          </>
        } />
         <Route path='/address' element={
          <PrivateRoute>
     
            <Address/>
  
          </PrivateRoute>
        } />
         <Route path='/payment' element={
          <PrivateRoute>
     
            <Payments/>
  
          </PrivateRoute>
        } />
        <Route path='/wishlist' element={<PrivateRoute>
          <OtherNavbar/>
        <Wishlist />
        </PrivateRoute>} />
    </Routes>
  )
}

export default MainRoute