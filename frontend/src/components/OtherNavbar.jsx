import { Box, Divider, HStack, Image,Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../Assets/glow.png"
const OtherNavbar = () => {
  return (
 <Box w="full" px={"8"} py={1} borderBottom="1px solid #e0e0e0">
    <HStack w="full" justify={"space-between"}>
       
              <Image w="120px"  src={logo} />
        


 
<HStack w="40%" justifyContent={"space-between"}>

    
<HStack justifyContent={"space-between"}>
    <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/tick-icon.svg"></Image>
    <Text>Sign Up</Text>
</HStack>

<HStack  justifyContent={"space-between"}>
    <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/edit-icon.svg"></Image>
    <Text>Address</Text>
</HStack>

<HStack  justifyContent={"space-between"}>
    <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/step-3-icon.svg" />
    <Text>Payment</Text>
</HStack>


</HStack>



        <HStack>
         <Image w="20px" src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"></Image>
         <Text>100% Secure</Text>
        </HStack>
    </HStack>
 </Box>
  )
}

export default OtherNavbar