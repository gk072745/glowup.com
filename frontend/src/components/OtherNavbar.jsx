import { Box,  HStack, Image,Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../Assets/glow.png"
import "./otherNavbar.css"
const OtherNavbar = () => {
  return (
 <Box w="full" px={"8"} py={1} borderBottom="1px solid #e0e0e0">
    <HStack w="full" justify={"space-between"}>
       
              <Image  className='imageLogodsf' w="120px"  src={logo} />
        

<HStack w="40%" className='middleothernavbardfssf' justifyContent={"space-between"}>

    
<HStack className='navbarSignupsdaf' justifyContent={"space-between"}>
    <Image className='navbarmidlleimg' src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/tick-icon.svg"></Image>
    <Text className='textnavbardsf'>Sign Up</Text>
</HStack>

<HStack  justifyContent={"space-between"}>
    <Image className='navbarmidlleimg' src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/edit-icon.svg"></Image>
    <Text  className='textnavbardsf'>Address</Text>
</HStack>

<HStack  justifyContent={"space-between"}>
    <Image className='navbarmidlleimg' src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/step-3-icon.svg" />
    <Text  className='textnavbardsf'>Payment</Text>
</HStack>


</HStack>



        <HStack>
         <Image w="20px" className='navbarlastimg' src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"></Image>
         <Text className='textnavbardsf lastlogoText'>100% Secure</Text>
        </HStack>

    </HStack>
 </Box>
  )
}

export default OtherNavbar