import { useState ,useEffect} from "react"
import { Text,Icon,HStack,VStack,StackDivider,Box,Image } from "@chakra-ui/react"
import  {RxCross2} from "react-icons/rx"
import axios from "axios"
import Cookies from "js-cookie"
export const SingleCartProductComponent=({_id,quantity, price, description,api_featured_image,setTotalAmount, handleCartProducts})=>{
    const [qty,setQty]=useState(quantity||1)
useEffect(()=>{
setTotalAmount((prev)=>prev+price*qty)
},[])


const handleQty=(qty,type,price)=>{
if(type=="inc"&&qty<4){
    axios.patch(`https://periwinkle-sheep-hem.cyclic.app/cart/update/${_id}`,{quantity:qty+1},
     {
        headers:{
          Authorization: Cookies.get("jwt_token")
        }
    }).then((res)=>{
         setTotalAmount((prev)=>Math.ceil(prev+price))
          setQty((prev)=>prev+1)    
 })

}else if(qty>2){
    axios.patch(`https://periwinkle-sheep-hem.cyclic.app/cart/update/${_id}`,{quantity:qty-1},
    {
       headers:{
         Authorization: Cookies.get("jwt_token")
       }
   }).then((res)=>{
        console.log(res)
        setTotalAmount((prev)=>prev-price)
        setQty((prev)=>prev-1)    
})
}

}

const handleDeleteCartSingleP=()=>{

    axios.delete(`https://periwinkle-sheep-hem.cyclic.app/cart/delete/${_id}`,
    {
       headers:{
         Authorization: Cookies.get("jwt_token")
       }
   }).then((res)=>{
           setTotalAmount((prev)=>Math.floor(prev-price*qty))
      console.log(res.data)
      handleCartProducts()
    }).catch((err)=>{
      console.log(err)
    })
}


return     <VStack w="full"   border={"1px solid #dedede"} borderRadius={"6px"} divider={<StackDivider borderColor='gray.200' />} >
<HStack w={"full"}  p={"15px"}   align={"flex-start"}>
<Box>
<Image width={"250px"}  src={api_featured_image}></Image>
</Box>
<Text fontSize={"16px"} color="rgba(0,16,36,.92)" noOfLines={3} fontWeight={400}>
{description}
</Text>
<Icon onClick={()=>handleDeleteCartSingleP()} as={RxCross2} />
</HStack>


<HStack   w={"full"} py={"5px"} px={"15px"} borderRadius={"6px"}  justifyContent={"space-between"}>
<HStack>
<Text>Quantity:</Text>
<Text cursor={"pointer"}  onClick={()=>handleQty(qty,"dec",price) }>-</Text>
<Text color="rgba(0,16,36,.92)" fontWeight={400}>{qty}</Text>
<Text cursor={"pointer"} onClick={()=>handleQty(qty,"inc",price) }>+</Text>

</HStack>
<Text  fontSize={"16px"} color="rgba(0,16,36,.92)" fontWeight={400}>${price}</Text>

</HStack>
</VStack>



}


