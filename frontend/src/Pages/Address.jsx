import { Box, Button, Center,  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,Select,Radio,Textarea,Switch, Heading, HStack, Text,Image, VStack,Icon,AccordionItem,Accordion,AccordionButton,AccordionPanel,AccordionIcon, useDisclosure, Input } from '@chakra-ui/react'
import React from 'react'
import OtherNavbar from '../Components/OtherNavbar'
import {BiPlus} from "react-icons/bi"
import {SlLocationPin} from "react-icons/sl"
import {TbCurrencyRupee} from "react-icons/tb"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import CartProducts from './../Components/CartProducts';
import PaymentDetails from './../Components/PaymentDetails';
import { useRef } from 'react';
import AddressDrawer from '../Components/OneItem/AddressDrawer'
  import {BsArrowLeft} from "react-icons/bs"
  import {CiDiscount1} from "react-icons/ci"
  import {RxCross2} from "react-icons/rx"
  import {FaGreaterThan} from "react-icons/fa"
  import {TfiInfoAlt} from "react-icons/tfi"
import { StackDivider } from '@chakra-ui/react';



const Address = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();


  return (
<>
<OtherNavbar/>
<Box w="full" px="150px" py={8}>

<VStack alignItems={"flex-start"}>
<Heading as={"h1"} fontWeight={600} fontSize={"36px"} color={"rgba(0,19,37,0.92)"}>
Choose Address
</Heading>
<Text fontSize={"14px"} color={"rgba(0,19,37,0.64)"}>
Detailed address will help our delivery partner reach your doorstep quickly
</Text>

</VStack>

<HStack>



<HStack>


    <Center>
    <VStack ref={btnRef} onClick={onOpen} h="170px" w="350px" justify={"center"} borderRadius={"10px"} color="#e80071" _hover={{background:"rgba(251,214,232,.5)",borderColor:"#e80071"}} fontWeight={600} border={"1px dashed #e0e0e0"}>
 
    <Icon fontSize={"24px"} as={BiPlus}  />
      <Text>Add New Address</Text>
    </VStack>
    </Center>


    <VStack alignItems={"flex-start"} pl={8} h="170px" w="350px" justify={"center"}  _hover={{background:"rbga(230, 237, 247,0.9)"}} borderRadius={"10px"} border={"1px dashed #e0e0e0"}>
      <Text fontSize={"14px"} color="rgba(0,19,37,.92)" fontWeight={500}>Name</Text>
      <Text  fontSize={"14px"} color="rgba(0,19,37,.64)" fontWeight={500}>town,street,State</Text>
      <Text fontSize={"14px"} color="rgba(0,19,37,.64)" fontWeight={500}>city</Text>
      <Text fontSize={"14px"} color="rgba(0,19,37,.64)" fontWeight={500}>8745858585</Text>
      <HStack>
          <Button  fontSize={"14px"} colorScheme="gray" variant={"outline"} size="sm" color="#3f414d"  fontWeight={500}>
            Edit
          </Button>
          <Button colorScheme={"none"} color="#fff"  fontSize={"14px"}  variant={"outline"} size="sm" bgColor={"#fc2779"}  fontWeight={500}  rightIcon={<ArrowForwardIcon />}>
            Deliver here
          </Button>
      </HStack>
    </VStack>


</HStack>
 
 <VStack  alignItems={"flex-start"}  w="350px" justify={"center"}>

  <VStack w="full">
  <Box w="full">
<Accordion allowToggle>



  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
   <HStack w="full" justify="space-between">
  <HStack>
  <Icon as={SlLocationPin} />
        <Text>Bag</Text>
  </HStack>

     <Text>4 items</Text>

   </HStack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel             css={{
    '&::-webkit-scrollbar': {
      width: "8px",
  width:" 8px",
    },
    '&::-webkit-scrollbar-track': {
     borderRadius: "7px",
  backgroundColor: "#EBEBEB"
    },
  
    '&::-webkit-scrollbar-thumb': {
      borderRadius: "3px",
  backgroundColor: "#C1BFC1"
    },
  }} pb={4} overflowY="scroll" maxHeight={"300px"}>
     <CartProducts/>
    </AccordionPanel>
  </AccordionItem>



</Accordion>
</Box>




<Box w="full">
<Accordion allowToggle>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'  w="full">
   <HStack w="full" justifyContent={"space-between"}>
 
   <Icon as={TbCurrencyRupee} />
  <Text>Price Details</Text>


   </HStack>

        </Box>
        <AccordionIcon />
       </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
 <PaymentDetails/>
 <HStack>

  <Image size="20px" borderRadius="full" src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/DesktopRevamp_icons/Frame7143.svg"></Image>
  <VStack>
    <Text>Earn 2432 Reward points</Text>
    <Text>Get a discount on your next order</Text>
  </VStack>
 </HStack>

    </AccordionPanel>
  </AccordionItem>

</Accordion>
<Text textAlign={"center"} w="full">You are saving ₹2265 on this order</Text>
</Box>

  </VStack>

 <HStack>
  <VStack>
    <Text>Buy authentic products. Pay</Text>
    <Text> securely. Easy returns and exchange</Text>
  </VStack>
  <Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/DesktopRevamp_icons/BuyerAssurance.svg" width={"40px"}>

  </Image>
 </HStack>

 </VStack>


</HStack>

</Box>










<Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent maxW={"400"}>
            <DrawerHeader borderBottom="1px solid #dedede">
  
  
                 <HStack spacing={4} alignItems="center">
                  <Icon onClick={onClose} color="#151515" fontSize={"32px"} as={RxCross2}/>
                  <Text>New Address</Text>       
               </HStack>
  
  
            </DrawerHeader>
  
            <DrawerBody px={2} py={8} 
              css={{
      '&::-webkit-scrollbar': {
        width: "8px",
    width:" 8px",
      },
      '&::-webkit-scrollbar-track': {
       borderRadius: "7px",
    backgroundColor: "#EBEBEB"
      },
    
      '&::-webkit-scrollbar-thumb': {
        borderRadius: "3px",
    backgroundColor: "#C1BFC1"
      },
    }}>
  
  
              <VStack w="full">


   <VStack w="full">
    <Text>Address</Text>
    <Input w="full" placeholder='Pincode'></Input>
    <Input w="full" placeholder='House/Flat/Office No.'></Input>
    <Textarea w="full" h="200px" placeholder='Road Name/Area/Colony'></Textarea>
   </VStack>

   <HStack w="full" justify="space-between">

    <Text>Use as default address</Text>
    <Switch />

   </HStack>


<VStack>

  
</VStack>

              </VStack>
  
            </DrawerBody>
  
            <DrawerFooter borderTop={"1px solid #dedede"}>
              <HStack justifyContent={"space-between"} w="full">
                <VStack  spacing={"0"} align="flex-start">
                  <Text fontSize={"20px"} color="#000" fontWeight={500}>$3344</Text>
                 <HStack spacing={"3px"}>
                   <Text fontSize={"12px"} color={"rgba(0,19,37,.92)"}>Grand total</Text>
                   <Icon  fontSize={"10px"} as={TfiInfoAlt} />
                 </HStack>
                </VStack>
                <Button width={"40%"} color={"#fff"} bgColor="#fc2779" colorScheme={"none"} rightIcon={<ArrowForwardIcon />} onClick={onClose}>Proceed</Button>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>


</>

  )
}

export default Address

