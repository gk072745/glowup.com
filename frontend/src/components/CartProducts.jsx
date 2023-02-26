import React, { useEffect, useState} from 'react'
import { VStack,HStack,StackDivider,Box,Image,Text,Icon} from '@chakra-ui/react'
import {RxCross2} from "react-icons/rx"
import axios from "axios";
import Cookies from "js-cookie"
import { SingleCartProductComponent } from './SingleCartProductComponent';
const CartProducts = ({cartProducts,handleCartProduct,setTotalAmount}) => {

  return (
<>
{
 cartProducts?.data?.map((el,id)=>{
    return     <SingleCartProductComponent key={el._id} quantity={cartProducts.cart[id].quantity}
                   {...el}  setTotalAmount={setTotalAmount} handleCartProduct={handleCartProduct} />
  })
}

</>
  )}








  // ..............................................................

export default CartProducts