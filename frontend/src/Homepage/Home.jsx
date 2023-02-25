import React from 'react'
import { Box, Image } from "@chakra-ui/react";
import CarouselSlider from './Home components/Carousal'
import "./home.css"
import ThreeCard from './Home components/threecard';
import { TopBrands_Images } from './Home components/Homedata/TopBrands_Images';
import CardItem from './Home components/CardItem';
import TwoCard from './Home components/Homedata/twocard';
import { afterTopBrands } from './Home components/Homedata/afterTopBrands';
import ONeCard from './Home components/onecard';

const Home = () => {




  return (
    <>
      <Box marginTop="5">
          <h1 className='headings'>Best In Beauty</h1>
          <Box mt={"15px"}>
            <CarouselSlider />
          </Box>
      </Box>
        <Box marginTop={"50px"}>
          <TwoCard>
            {afterTopBrands.map((image, i) => (
              <Box key={i}>
                <Image src={image} alt={image} width="" height="" />
              </Box>
            ))}
          </TwoCard>
      </Box>


      <Box marginTop={"50px"}>
      <h1 className='headings'>Top Brands</h1>
      </Box>      
      <ThreeCard border="1px solid red">
        {TopBrands_Images.map(({ src, pink, grey }, i) => (
          <CardItem
            key={i}
            src={src}
            h1Size={"20px"}
            h1Weight={"600"}
            h1color={"#E80071"}
            h1={pink}
            h3Size={"16px"}
            h3Weight={"500"}
            h3color={"#5C6873"}
            h3={grey}
            paddingY={"20px"}
          />
        ))}
      </ThreeCard>
      <ONeCard>
      <Image
        src="https://images-static.nykaa.com/uploads/2adda7a5-567a-4db1-b408-06c96be60287.jpg?tr=w-2400,cm-pad_resize"
        margin="auto"
        alt={""}
        width=""
        height=""
      />
      </ONeCard>
 
    </>
  )
}

export default Home
 


     