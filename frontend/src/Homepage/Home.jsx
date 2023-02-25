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
import { FeaturedBrands } from './Home components/Homedata/FeatureBrands';
import FiveCard from './Home components/fivecard';
import { BeautyAdvice } from './Home components/Homedata/BeautyAdvice';
import { OnlyAtNykaa } from './Home components/Homedata/onlyatnaykaa';

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
      <h1 className='headings'>Feature Brands</h1>
      <ONeCard>
      <Image
        src="https://images-static.nykaa.com/uploads/2adda7a5-567a-4db1-b408-06c96be60287.jpg?tr=w-2400,cm-pad_resize"
        margin="auto"
        alt={""}
        width=""
        height=""
      />
      </ONeCard>
   
      <FiveCard>
      {FeaturedBrands.map(({ src, text, disc }, i) => (
        <CardItem
          key={i}
          src={src}
          h1Size={"20px"}
          h1Weight={"600"}
          h1color={"black"}
          h1={text}
          h3Size={"16px"}
          h3Weight={"500"}
          h3color={"#5C6873"}
          h3={disc}
          paddingY={"20px"}
          
        />
      ))}
    </FiveCard>
    <h1 className='headings'>Only At Nykaa</h1>
    <ThreeCard>
    {OnlyAtNykaa.map(({ src, h1, h3 }, i) => (
      <CardItem
        key={i}
        src={src}
        h1Size={"20px"}
        h1Weight={"600"}
        h1color={"black"}
        h1={h1}
        h3Size={"16px"}
        h3Weight={"500"}
        h3color={"#5C6873"}
        h3={h3}
        paddingY={"20px"}
      />
    ))}
  </ThreeCard>

    <h1 className='headings'>Beauty Advice</h1>
    <Box marginTop={"3rem"} marginBottom="2rem">
      <TwoCard>
        {BeautyAdvice.map(({ src, text, disc }, i) => (
          <CardItem
            key={i}
            h1Size={"16px"}
            h1Weight={"600"}
            h1color="black"
            h1={text}
            h3={disc}
            h3Size={"16px"}
            h3Weight="500"
            h3color={"#E80071"}
            src={src}
            paddingY={"20px"}
          />
        ))}
      </TwoCard>
   </Box>    
    </>
  )
}

export default Home
 


     