import { Box, Button, Center,  Drawer, DrawerBody, DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,Grid,DrawerCloseButton,Select,Radio,Textarea,Switch, Heading, HStack, Text,Image, VStack,Icon,AccordionItem,Accordion,AccordionButton,AccordionPanel,AccordionIcon, useDisclosure, Input } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import OtherNavbar from '../components/OtherNavbar'
import {BiPlus} from "react-icons/bi"
import {SlLocationPin} from "react-icons/sl"
import {TbCurrencyRupee} from "react-icons/tb"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import CartProducts from './../components/CartProducts';
import PaymentDetails from './../components/PaymentDetails';
import {RxCross2} from "react-icons/rx";
import "./address.css"
import { useNavigate } from 'react-router-dom'
import axios from "axios";
 import Cookies from "js-cookie"; 

const Address = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate=useNavigate()
  const [totalAmount, setTotalAmount] = useState(0)
  const [cartProducts, setCartProducts] = useState([])
  const [pin,setPin]=useState("")
  const [houseNo,setHouseNo]=useState("")
  const [name,setName]=useState("")
  const [area,setArea]=useState("")
  const [phone,setphone]=useState("")
  const [email,setEmail]=useState("")
  
  const handlePin=(e)=>setPin(e.target.value)
  const handleHouseNo=(e)=>setHouseNo(e.target.value)
  const handleArea=(e)=>setArea(e.target.value)
  const handleName=(e)=>setName(e.target.value)
  const handlePhone=(e)=>setphone(e.target.value)
  const handleEmail=(e)=>setEmail(e.target.value)

const handleCartProduct=()=>{
axios.get(`https://periwinkle-sheep-hem.cyclic.app/cart/`,{
  headers:{
    Authorization: Cookies.get("jwt_token")
  }
}
).then((res)=>{
console.log(res.data)
setCartProducts(res.data)
}).catch((err)=>{
console.log(err)
})
}
  




  return (
<>
<OtherNavbar/>

<Box w="full" className='mainAddresbox' px="150px" py={8} >

<HStack w="full" justify={"space-between"}>
<VStack alignItems={"flex-start"}>
<Heading className='headingaddresdfsadf' as={"h1"} fontWeight={600} fontSize={"36px"} color={"rgba(0,19,37,0.92)"}>
Choose Address
</Heading>
<Text className='addreswelcomelsdfsd' fontSize={"14px"} color={"rgba(0,19,37,0.64)"}>
Detailed address will help our delivery partner reach your doorstep quickly
</Text>

</VStack>
<Image className='addrespageijmagesdf' src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/header-address.svg">

</Image>
</HStack>

<Grid w="full" className='heightmanagesd'  h="80vh" >



<Center className='templatemenagegd' w="full" display={"Grid"} gridTemplateColumns={"60% 40%"}  >

  {/* ................................ */}
<HStack w="full" className='addresseditmanagetemp'>


<Center w="full">
<VStack ref={btnRef} onClick={onOpen} h="170px" w="full" justify={"center"} borderRadius={"10px"} color="#e80071" _hover={{background:"rgba(251,214,232,.5)",borderColor:"#e80071"}} fontWeight={600} border={"1px dashed #e0e0e0"}>

<Icon fontSize={"24px"} as={BiPlus}  />
  <Text>Add New Address</Text>
</VStack>
</Center>


<VStack w="full" alignItems={"flex-start"} pl={8} h="170px" justify={"center"}  _hover={{background:"rbga(230, 237, 247,0.9)"}} borderRadius={"10px"} border={"1px dashed #e0e0e0"}>
  <Text fontSize={"14px"} color="rgba(0,19,37,.92)" fontWeight={500}>{name||"Govind Kumawat"}</Text>
  <Text  fontSize={"14px"} color="rgba(0,19,37,.64)" fontWeight={500}>{houseNo||"Kachhwa"}</Text>
  <Text fontSize={"14px"} color="rgba(0,19,37,.64)" fontWeight={500}>{(area,pin)||"sikar, Rajasthan"}</Text>
  <Text fontSize={"14px"} color="rgba(0,19,37,.64)" fontWeight={500}>{phone|| "+91 1234567890"}</Text>
  <HStack>
      <Button  fontSize={"14px"} colorScheme="gray" variant={"outline"} size="sm" color="#3f414d"  fontWeight={500}>
        Edit
      </Button>
      <Button onClick={()=>navigate("/payment")} colorScheme={"none"} color="#fff"  fontSize={"14px"}  variant={"outline"} size="sm" bgColor={"#fc2779"}  fontWeight={500}  rightIcon={<ArrowForwardIcon />}>
        Deliver here
      </Button>
  </HStack>
</VStack>


</HStack>
  {/* ................................ */}

<VStack w="full" className='plleftremoveclass' bgColor={"#fff"} pl="20px" alignItems={"flex-start"}   justify={"center"}>

<VStack w="full">
<Box w="full">
<Accordion allowToggle>



					
<AccordionItem onClick={()=>{ handleCartProduct()}}>
<h2>
  <AccordionButton>
    <Box as="span" flex='1' textAlign='left'>
<HStack w="full" justify="space-between">
<HStack>
<Icon as={SlLocationPin} />
    <Text>Bag</Text>
</HStack>

 <Text>{cartProducts?.data?.length} items</Text>

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
                 <CartProducts cartProducts={cartProducts} handleCartProduct={handleCartProduct} setTotalAmount={setTotalAmount}  />


</AccordionPanel>
</AccordionItem>

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
<PaymentDetails totalAmount={totalAmount} cartProducts={cartProducts} />

<HStack p={2}>

<Image size="20px" borderRadius="full" src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/DesktopRevamp_icons/Frame7143.svg"></Image>
<VStack spacing={"2px"} alignItems="flex-start">
<Text color="rgba(0,19,37,.92)" fontSize={"14px"}>Earn 2432 Reward points</Text>
<Text color="rgba(0,19,37,.64)" fontSize={"12px"}>Get a discount on your next order</Text>
</VStack>
</HStack>

</AccordionPanel>
</AccordionItem>

</Accordion>
</Box>


</VStack>

<HStack justify={"space-around"} p={2} w="full">

<VStack w="full" fontSize={"12px"} color="rgba(0,19,37,.92)" spacing={1} alignItems={"flex-start"}>
<Text>Buy authentic products. Pay</Text>
<Text> securely. Easy returns and exchange</Text>
</VStack>

<Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/DesktopRevamp_icons/BuyerAssurance.svg" width={"40px"}>

</Image>
</HStack>

</VStack>

</Center>


</Grid>

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
  
  
              <VStack w="full"  px={4}>


   <VStack w="full" align={"flex-start"} py={2}>
    <Text fontWeight={600} color="#282c3f" fontSize={"20px"}>Address</Text>
    <Input variant={"filled"} value={pin} onChange={handlePin} focusBorderColor="#dedede"  w="full" placeholder='Pincode' ></Input>
    <Input  variant={"filled"}  value={houseNo} onChange={handleHouseNo}  focusBorderColor={"#dedede"}  w="full" placeholder='House/Flat/Office No.'></Input>
    <Textarea  variant={"filled"} value={area} onChange={handleArea}  focusBorderColor="#dedede"  w="full" h="150px" placeholder='Road Name/Area/Colony'></Textarea>
   </VStack>

   <HStack w="full" justify="space-between">

    <Text>Use as default address</Text>
    <Switch />

   </HStack>


   <VStack w="full" align={"flex-start"}  py={4}>

<VStack align={"flex-start"} spacing={0}>
<Text  fontWeight={600} color="#282c3f" fontSize={"20px"}>Contact</Text>
<Text fontSize={"12px"} color="rgba(0,19,37,.92)">Information provided here will be used to contact you for delivery updates </Text>
</VStack>

    <Input value={name} onChange={handleName} focusBorderColor={"#dedede"} variant="filled" w="full" placeholder='Name'></Input>
    <Input value={phone} onChange={handlePhone} focusBorderColor={"#dedede"} variant="filled" w="full" placeholder='Phone'></Input>
    <Input value={email} onChange={handleEmail} focusBorderColor={"#dedede"} variant="filled" w="full"  placeholder='Email ID (Optional)'></Input>
  </VStack>

              </VStack>
  
            </DrawerBody>
  
            <DrawerFooter borderTop={"1px solid #dedede"} >
            <Button width={"80%"} color={"#fff"} m="auto" bgColor="#fc2779" colorScheme={"none"} rightIcon={<ArrowForwardIcon />} onClick={onClose}>Ship to this address</Button>

            </DrawerFooter>
          </DrawerContent>
        </Drawer>

</>

  )
}

export default Address

