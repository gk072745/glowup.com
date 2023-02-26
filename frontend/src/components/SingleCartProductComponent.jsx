import { useState ,useEffect} from "react"
import { Text,Icon,HStack,VStack,StackDivider,Box,Image } from "@chakra-ui/react"
import  {RxCross2} from "react-icons/rx"

export const SingleCartProductComponent=({_id,quantity, price, description,image_link,setTotalAmount, handleCartProducts})=>{
    const [qty,setQty]=useState(1||quantity)

useEffect(()=>{
setTotalAmount((prev)=>prev+price*qty)
},[])


const handleQty=(qty,type,price)=>{

// if(type=="inc"&&qty<5){
//     // axios({

//   // }).then((res)=>{
//     setTotalAmount((prev)=>prev+price)
//     setQty((prev)=>prev+1)
//   // })


// }else if(qty>1){
//       // axios({

//   // }).then((res)=>{
//     setTotalAmount((prev)=>prev-price)
//     setQty((prev)=>prev-1)
//   // })
// }


}

const handleDeleteCartSingleP=(_id)=>{
// axios({
//   method:"Delete"
// }).then((res)=>{
//   handleCartProducts()
//   console.log("deleted")
// })
}


return     <VStack w="full"   border={"1px solid #dedede"} borderRadius={"6px"} divider={<StackDivider borderColor='gray.200' />} >
<HStack w={"full"}  p={"15px"}   align={"flex-start"}>
<Box>
<Image width={"230px"} src={image_link}></Image>
</Box>
<Text fontSize={"16px"} color="rgba(0,16,36,.92)" noOfLines={3} fontWeight={400}>
{description}
</Text>
<Icon onClick={()=>handleDeleteCartSingleP()} as={RxCross2} />
</HStack>


<HStack   w={"full"} py={"5px"} px={"15px"} borderRadius={"6px"}  justifyContent={"space-between"}>
<HStack>
<Text>Quantity:</Text>
<Text cursor={"pointer"} onClick={()=>handleQty(qty,"inc",price) }>+</Text>
<Text color="rgba(0,16,36,.92)" fontWeight={400}>{qty}</Text>
<Text cursor={"pointer"}  onClick={()=>handleQty(qty,"dec",price) }>-</Text>
</HStack>
<Text  fontSize={"16px"} color="rgba(0,16,36,.92)" fontWeight={400}>${price}</Text>

</HStack>
</VStack>



}


