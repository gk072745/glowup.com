import React, { useEffect} from 'react'
import { VStack,HStack,StackDivider,Box,Image,Text,Icon} from '@chakra-ui/react'
import React, { useEffect} from 'react'
import { VStack,HStack,StackDivider,Box,Image,Text,Icon} from '@chakra-ui/react'
import {RxCross2} from "react-icons/rx"
import axios from "axios";
import Cookies from "js-cookie"
const CartProducts = ({setTotalMRPDiscount,setTotalMRP,setTotalAmount}) => {
const cart={
  "status": 200,
  "data": [
    {
      "_id": "63f4af3dc4cbdf746de190b0",
      "name": "Blotted Lip",
      "brand": "colourpop",
      "price": 5.5,
      "description": "Blotted Lip Sheer matte lipstick that creates the perfect popsicle pout! Formula is lightweight, matte and buildable for light to medium coverage.",
      "image_link": "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076",
      "rating": 3.6,
      "category": "lipstick",
      "product_type": "lipstick",
      "tag_list": [
        "cruelty free",
        "Vegan"
      ],
      "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/047/original/open-uri20180708-4-e7idod?1531087336",
      "product_colors": [
        {
          "hex_value": "#B72227",
          "_id": "63f4af3dc4cbdf746de190b1"
        },
        {
          "hex_value": "#BB656B",
          "_id": "63f4af3dc4cbdf746de190b2"
        },
        {
          "hex_value": "#8E4140",
          "_id": "63f4af3dc4cbdf746de190b3"
        },
        {
          "hex_value": "#A12A33",
          "_id": "63f4af3dc4cbdf746de190b4"
        },
        {
          "hex_value": "#904550",
          "_id": "63f4af3dc4cbdf746de190b5"
        },
        {
          "hex_value": "#452222",
          "_id": "63f4af3dc4cbdf746de190b6"
        },
        {
          "hex_value": "#7C3F35",
          "_id": "63f4af3dc4cbdf746de190b7"
        }
      ],
      "__v": 0
    },
    {
      "_id": "63f4b0bd4d0293ee034a546e",
      "name": "Almay Intense i-Colour Play Up Liquid Liner",
      "brand": "almay",
      "price": 10.99,
      "description": "\n\nPlay up your eye color with dramatic contrasting color! Define your eyes with bold color. Comes with a precision tip applicator so you can smoothly and easily create a high impact look. Features: \n\nHypoallergenic\nnon-irritating\nOphthalmologist\nClinically and allergy tested\nSuitable for contact lens wearers\n\n\n",
      "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/6cf30fccb626b5b1eacc9db7b29dc6c2_ra,w158,h184_pa,w158,h184.jpeg",
      "rating": 4,
      "category": "liquid",
      "product_type": "eyeliner",
      "tag_list": [],
      "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/178/original/data?1514062276",
      "product_colors": [
        {
          "hex_value": "#000000",
          "colour_name": "Black Pearl for Hazel Eyes ",
          "_id": "63f4b0bd4d0293ee034a546f"
        },
        {
          "hex_value": "#6C446C",
          "colour_name": "Purple Amethyst for Brown Eyes ",
          "_id": "63f4b0bd4d0293ee034a5470"
        }
      ],
      "__v": 0
    }
  ],
  "cart": [
    {
      "_id": "63f8fe0aee96af72a6595e06",
      "product_id": "63f4af3dc4cbdf746de190b0",
      "email": "n@gmail.com",
      "quantity": 1,
      "__v": 0
    },
    {
      "_id": "63f9d3c96ce1aa0b126a341e",
      "product_id": "63f4b0334d0293ee034a544b",
      "email": "n@gmail.com",
      "quantity": 4,
      "__v": 0
    },
    {
      "_id": "63fa477ca5824730519490a3",
      "product_id": "63f4b0bd4d0293ee034a546e",
      "email": "n@gmail.com",
      "quantity": 3,
      "__v": 0
    }
  ]
}

useEffect(()=>{
cart.data?.map((el,i)=>{
  setTotalMRP((prev)=> prev+Math.floor((el.price*cart.cart[i].quantity)*(1.2)))
  setTotalMRPDiscount((prev)=> prev+Math.floor((el.price*cart.cart[i].quantity)*(0.16)))
  setTotalAmount((prev)=>prev+el.price*cart.cart[i].quantity)
})
},[])


const handleQty=( {id,quantity,price} )=>{

  axios({
method:"patch",
url:`https://periwinkle-sheep-hem.cyclic.app/update/${id}`,
data:{
  quantity
},
headers:{
  Authorization:Cookies.get("jwt_token")
}

  }).then((res)=>{
    // getData()
  }).catch((err)=>{
    console.log(err)
  })
}

const handleDelete=(_id)=>{
  // axios({
  //   method:"delete",
  //   url:process.env.REACT_APP_MYNTRA_API+`/cart/${_id}`
  // }).then((res)=>{

    // handleCartProducts()
    // setTotalMRP((prev)=> prev-MRP*currentQty)
    // setTotalAmount((prev)=>prev-price*currentQty)
    // setTotalMRPDiscount((prev)=> prev-currentQty*(MRP-price))

    // toast({
    //   title: 'Product successfully deleted.',
    //   status: 'error',
    //   duration: 3000,
    //   isClosable: true,
    //   position:"top"
    // })

  // })
}

  return (
<>
{
  cart.data?.map((el,id)=>{
    return     <VStack w="full"   border={"1px solid #dedede"} borderRadius={"6px"} divider={<StackDivider borderColor='gray.200' />} >
<>
{
  cart.data?.map((el,id)=>{
    return     <VStack w="full"   border={"1px solid #dedede"} borderRadius={"6px"} divider={<StackDivider borderColor='gray.200' />} >
    <HStack w={"full"}  p={"15px"}   align={"flex-start"}>
      <Box>
        <Image width={"230px"} src={el.image_link}></Image>
        <Image width={"230px"} src={el.image_link}></Image>
      </Box>
      <Text fontSize={"16px"} color="rgba(0,16,36,.92)" noOfLines={3} fontWeight={400}>
       {el.description}
       {el.description}
      </Text>
      <Icon as={RxCross2} />
    </HStack>


    <HStack   w={"full"} py={"5px"} px={"15px"} borderRadius={"6px"}  justifyContent={"space-between"}>
      <HStack>
        <Text>Quantity:</Text>
 <Text cursor={"pointer"} onClick={()=>handleQty(el._id,cart.cart[id].quantity+1,el.price)}>+</Text>
 <Text color="rgba(0,16,36,.92)" fontWeight={400}>{cart.cart[id].quantity}</Text>
 <Text cursor={"pointer"} onClick={()=>handleQty(el._id,cart.cart[id].quantity-1,el.price)}>-</Text>
       </HStack>
    <Text  fontSize={"16px"} color="rgba(0,16,36,.92)" fontWeight={400}>${el.price}</Text>
    <Text  fontSize={"16px"} color="rgba(0,16,36,.92)" fontWeight={400}>${el.price}</Text>

    </HStack>
  </VStack>
  })
  })
}

</>
  )}

</>
  )}

export default CartProducts