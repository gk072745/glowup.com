import React from 'react'
import { VStack,HStack,StackDivider,Box,Image,Text,Icon,Select } from '@chakra-ui/react'
import {RxCross2} from "react-icons/rx"
const CartProducts = () => {
  return (
    <VStack w="full"   border={"1px solid #dedede"} borderRadius={"6px"} divider={<StackDivider borderColor='gray.200' />} >
    <HStack w={"full"}  p={"15px"}   align={"flex-start"}>
      <Box>
        <Image width={"230px"} src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/b/aba12c7nyb113_blue_01a.jpg"></Image>
      </Box>
      <Text fontSize={"16px"} color="rgba(0,16,36,.92)" noOfLines={3} fontWeight={400}>
        Nykd by Nykaa Soft cup easy-peasy slip-on bra with Ful
      </Text>
      <Icon as={RxCross2} />
    </HStack>


    <HStack   w={"full"} py={"5px"} px={"15px"} borderRadius={"6px"}  justifyContent={"space-between"}>
      <HStack>
      <Text color="rgba(0,16,36,.92)" fontWeight={400}>Quantity:</Text>
      <Select borderColor={"#dedede"} variant="flushed"  size={"xs"} defaultValue={1}>
<option value='1'>1</option>
<option value='2'>2</option>
<option value='3'>3</option>
<option value='4'>4</option>
<option value='5'>5</option>
      </Select>
       </HStack>
    <Text  fontSize={"16px"} color="rgba(0,16,36,.92)" fontWeight={400}>$434</Text>

    </HStack>
  </VStack>
  )
}

export default CartProducts