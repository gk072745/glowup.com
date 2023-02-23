import React from 'react'
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import CarouselSlider from './Home components/Carousal'
import "./home.css"
import Footer from './footer/footer';
import Navbar from "./navbar/topnav"
import SearchNav from "./mainnavbar/Navbar1"
import Navbardrop from "./newnavbar/nav3"


const Home = () => {
  return (
    <>
      <Navbar/>

      <SearchNav/>

      <Navbardrop/>
       
      <Box marginTop="5">
          <h1 className='headings'>Best In Beauty</h1>
          <Box mt={"15px"}>
            <CarouselSlider />
          </Box>
      </Box>
      <Footer/>
    </>
  )
}

export default Home
 

   // <Topnavbar/>
     