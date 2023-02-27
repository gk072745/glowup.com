import { Box, GridItem,Image ,Grid, Center,Accordion,Icon,Text,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,HStack,VStack, Input, Checkbox, FormControl, FormLabel, FormHelperText, FormErrorMessage, Button,} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import OtherNavbar from '../components/OtherNavbar'
import {MdRadioButtonUnchecked,MdRadioButtonChecked} from "react-icons/md"
import {AiOutlineCreditCard} from "react-icons/ai"
import {SlLocationPin} from "react-icons/sl"
import {TbCurrencyRupee} from "react-icons/tb"
import {MdCardGiftcard} from "react-icons/md"
import {FaHandHoldingUsd} from "react-icons/fa"
import PaymentDetails from '../components/PaymentDetails'
import del from "../Assets/del.png"
import CartProducts from '../components/CartProducts'
import "./payment.css"
import { useNavigate } from 'react-router-dom'
import axios from "axios";
 import Cookies from "js-cookie"; 


const Payments = ( ) => {
  const navigate=useNavigate()
  const [cardNo, setCard] = useState(null)
  const handleCardChange = (e) => setCard(e.target.value)
  const [date, setdate] = useState(null)
  const handledateChange = (e) => setdate(e.target.value)
  const [cvv, setCVV] = useState(null)
  const handleCVV = (e) => setCVV(e.target.value)
  const [giftNo, setgiftNo] = useState(null)
  const handleGiftChange = (e) => setgiftNo(e.target.value)
  const [pin, setpin] = useState(null)
  const handlePinChange = (e) => setpin(e.target.value)
  const [totalAmount, setTotalAmount] = useState(0)
  const [cartProducts, setCartProducts] = useState([])
  let [isError,setIsError] =useState(false)
  let [isError2,setIsError2]=useState(false) 
  let [isError3,setIsError3]=useState(false) 
  let [isError4,setIsError4]=useState(false) 
  let [isError5,setIsError5]=useState(false) 

const handleCartProduct=()=>{
axios.get(`https://periwinkle-sheep-hem.cyclic.app/cart/`,{
  headers:{
    Authorization: Cookies.get("jwt_token")
  }
}
).then((res)=>{
setCartProducts(res.data)
}).catch((err)=>{
console.log(err)
})
}
  

useEffect(()=>{
  handleCartProduct()
},[])




  const handlePayment1=()=>{
    const  [month,year]=date.split("/")

    if(cardNo!==12||cardNo!= +cardNo){
   setIsError(true)
    }
    if(+month>=13||+month<1||+year<1||+year>12||month!=+month){
      setIsError2(true)

    }
      
      if(cvv.length<3||cvv!=+cvv){
        setIsError3(true)

      }
 else{
  setIsError(false)
  setIsError2(false)
  setIsError3(false)
  navigate("/")
 }

}

const handlePayment2=()=>{
  if(giftNo!="abcd"){
    setIsError4(true)

  }else if(pin!=12345){
    setIsError5(true)


  }else{
    setIsError4(false)
    setIsError5(false)

    navigate("/")
  }
}

const handlePayment3=()=>{
  navigate("/")
}
  return (
<>
<OtherNavbar/>
<Box minH="80vh">
<Center>

<Grid w="full" templateColumns='70% 30%' className='paymentMAin' gap={6} p="100px">


<GridItem w='100%' >
<Accordion allowToggle defaultIndex={0}>

<AccordionItem >
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>


            <Box as="span" flex='1' textAlign='left'>


     <HStack spacing={"20px"}>


  <Icon as={AiOutlineCreditCard} fontSize={"20px"} />


  <VStack align={"flex-start"} spacing={0}>
    <Text color={"rgba(0,19,37,0.92)"} fontWeight={500} >
         Credit/Debit Card
    </Text>
    <Text color={"rgba(0,19,37,0.64)"} fontSize={"12px"}>
    Visa, Mastercard, Rupay & more
    </Text>

  </VStack>


     </HStack>

            </Box>
            {isExpanded ? (
             <Icon as={MdRadioButtonChecked} color="#fc2779" />
            ) : (
              <Icon as={MdRadioButtonUnchecked} />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        
        <VStack align={"flex-start"} spacing={4}>

        <HStack>
          <Text letterSpacing={"1px"} fontWeight={600} fontSize={"10px"} color="rgba(0, 19, 37, 0.64)">WE ACCEPT</Text>
          <Image w="30px"  src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/VISA.svg"></Image>
          <Image w="30px" src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/mastercard.svg"></Image>
          <Image w="30px" src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/Rupay.svg"></Image>
          <Image w="30px" src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/AMEX.svg"></Image>
        </HStack>
      
      
  


        <FormControl isInvalid={isError}>

      <Input className='inputsizeasdf' bgColor="rgb(245,245,246)" fontSize={"14px"}  variant={"filled"} focusBorderColor="#f3f3f3" placeholder={"Card Number"} type='text' maxLength={12} value={cardNo} onChange={handleCardChange} />
      {!isError ? (
        <FormHelperText fontSize={"12px"}>
          Enter Card No.
        </FormHelperText>
      ) : (
        <FormErrorMessage fontSize={"12px"} color="#cb2121">Card No. is not valid.</FormErrorMessage>
      )}
    </FormControl>



<HStack className='inputdftdg'>
    <FormControl isInvalid={isError2}>

<Input  className='inputsizeasdf'  bgColor="rgb(245,245,246)" fontSize={"14px"} focusBorderColor="#f3f3f3"  variant={"filled"}  type='text' placeholder='Expiry date (MM/YY)' maxLength={5} value={date} onChange={handledateChange} />
{!isError2 ? (
  <FormHelperText  fontSize={"12px"} >
     Date is Required.
  </FormHelperText>
) : (
  <FormErrorMessage  fontSize={"12px"} color="#cb2121">Required.</FormErrorMessage>
)}
</FormControl>




<FormControl isInvalid={isError3}>

<Input  className='inputsizeasdf'  fontSize={"14px"} bgColor="rgb(245,245,246)" focusBorderColor="#f3f3f3" variant={"filled"}  type='text' maxLength={4} value={cvv} onChange={handleCVV}  placeholder={"CVV"} />
{!isError3 ? (
  <FormHelperText  fontSize={"12px"}>
  Cvv is Required.
</FormHelperText>
) : (
  <FormErrorMessage  fontSize={"12px"} color="#cb2121"> Required. </FormErrorMessage>
)}
</FormControl>

   
    </HStack>


    <HStack>
    <Checkbox focusBorderColor={"pink"} defaultChecked>
       <Text  className='savecardpayment' fontWeight={500} fontSize={"12px"} color={"rgba(0,19,37,.92)"}>Save this card securely for future
</Text>
</Checkbox>
<Text color="#5198ff"  fontWeight={500} fontSize={"12px"} >Know More</Text>
    </HStack> 

    <Button onClick={()=>handlePayment1()} className='creditcardbtn' colorScheme={"pink"} w="200px" color="#fff" fontWeight={600} focusBorderColor={"pink"} bgColor="#fc2779">
      Pay $ {totalAmount}
    </Button>
        </VStack>


        </AccordionPanel>
      </>
    )}
  </AccordionItem>
{/* .................... */}

<AccordionItem >
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>


            <Box as="span" flex='1' textAlign='left'>


     <HStack spacing={"20px"}>


  <Icon as={MdCardGiftcard} fontSize={"20px"} />


  <VStack align={"flex-start"} spacing={0}>
    <Text color={"rgba(0,19,37,0.92)"} fontWeight={500} >
         Gift Card
    </Text>
    <Text color={"rgba(0,19,37,0.64)"} fontSize={"12px"}>
    One card for all Nykaa apps
    </Text>

  </VStack>


     </HStack>

            </Box>
            {isExpanded ? (
             <Icon as={MdRadioButtonChecked} color="#fc2779" />
            ) : (
              <Icon as={MdRadioButtonUnchecked} />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        
        <VStack align={"flex-start"} spacing={4}>


      
      
  


        <FormControl isInvalid={isError4}>

      <Input  className='inputsizeasdf'   bgColor="rgb(245,245,246)" fontSize={"14px"}  variant={"filled"} focusBorderColor="#f3f3f3" placeholder={"Card Number"} type='text'  value={giftNo} onChange={handleGiftChange} />
      {!isError4 ? (
        <FormHelperText fontSize={"12px"}>
          Enter Gift No.
        </FormHelperText>
      ) : (
        <FormErrorMessage fontSize={"12px"} color="#cb2121">Gift No. is not valid.</FormErrorMessage>
      )}
    </FormControl>



<HStack >
    <FormControl isInvalid={isError5}>

<Input   bgColor="rgb(245,245,246)" fontSize={"14px"} focusBorderColor="#f3f3f3"  variant={"filled"}  type='text' placeholder='PIN' maxLength={5} value={pin} onChange={handlePinChange} />

  </FormControl>




<Button onClick={()=>handlePayment2()} colorScheme={"pink"} w="200px" color="#fff" fontWeight={600} focusBorderColor={"pink"} bgColor="#fc2779">
      Proceed
</Button>



   
    </HStack>

        </VStack>


        </AccordionPanel>
      </>
    )}
  </AccordionItem>
{/* .................... */}

<AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>


            <Box as="span" flex='1' textAlign='left'>


     <HStack spacing={"20px"}>


  <Icon as={FaHandHoldingUsd} fontSize={"20px"} />


  <VStack align={"flex-start"} spacing={0}>
    <Text color={"rgba(0,19,37,0.92)"} fontWeight={500} >
         Cash on Delivery
    </Text>
    <Text color={"rgba(0,19,37,0.64)"} fontSize={"12px"}>
    Pay at your doorstep
    </Text>

  </VStack>


     </HStack>

            </Box>
            {isExpanded ? (
             <Icon as={MdRadioButtonChecked} color="#fc2779" />
            ) : (
              <Icon as={MdRadioButtonUnchecked} />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        
    
 <VStack>
  <Image src={del} boxSize={"300px"}></Image>
  <Button onClick={()=>handlePayment3()} colorScheme={"pink"} w="200px" m="auto" color="#fff" fontWeight={600} focusBorderColor={"pink"} bgColor="#fc2779">
      Proceed
</Button>
 </VStack>

        </AccordionPanel>
      </>
    )}
  </AccordionItem>


</Accordion>

</GridItem>
{/* ............................................ */}

  <GridItem w='100%'  >
  <VStack className='productdetailsvstak' bgColor={"#fff"} pl="20px" alignItems={"flex-start"}  w="350px" justify={"center"}>

<VStack w="full">
<Box w="full">
<Accordion allowToggle>



<AccordionItem onClick={()=> handleCartProduct()}>

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

<HStack justify={"space-around"} p={2} w="full" cla>
<VStack fontSize={"12px"} color="rgba(0,19,37,.92)" spacing={1} w="full" alignItems={"flex-start"}>
<Text>Buy authentic products. Pay</Text>
<Text> securely. Easy returns and exchange</Text>
</VStack>
<Image src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/DesktopRevamp_icons/BuyerAssurance.svg" width={"40px"}>

</Image>
</HStack>

</VStack>
  </GridItem>
</Grid>
</Center>

</Box>

</>
  )
}

export default Payments