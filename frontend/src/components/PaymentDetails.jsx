import {HStack, Text, VStack } from "@chakra-ui/react";
  // import {ArrowForwardIcon} from "@chakra-ui/icons"
  // import {BsArrowLeft} from "react-icons/bs"
  // import {CiDiscount1} from "react-icons/ci"
  // import {RxCross2} from "react-icons/rx"
  // import {FaGreaterThan} from "react-icons/fa"
  // import {TfiInfoAlt} from "react-icons/tfi"
  // import { useRef } from "react";
const PaymentDetails = ({ totalAmount,totalMRP,totalMRPDiscount}) => {

  return (
  <>
   <VStack  alignItems={"flex-start"}  w={"full"} border={"1px solid #dedede"} p={"15px"} borderRadius={"6px"} >
                <Text fontSize={"18px"} color="#000" fontWeight={500}>Price Details</Text>
                <HStack w="full" fontSize={"12px"} color={"rgba(0,19,37,.92)"} fontWeight={400}  justify={"space-between"}>
                  <Text>Bag MRP (2 items)</Text>
                  <Text>${totalMRP}</Text>
                </HStack>
                <HStack  w="full" fontSize={"12px"} color={"rgba(0,19,37,.92)"} fontWeight={400}  justify={"space-between"}>
                  <Text>Bag Discount</Text>
                  <Text>${totalMRPDiscount}</Text>
                </HStack>
                <HStack  w="full" fontSize={"12px"} color={"rgba(0,19,37,.92)"} fontWeight={400}  justify={"space-between"}>
                  <Text>Discount</Text>
                  <Text>$0</Text>
                </HStack>
                <HStack  w="full" fontSize={"12px"} color={"rgba(0,19,37,.92)"} fontWeight={400}  justify={"space-between"}>
                  <Text>Shipping</Text>
                <HStack>
                  <Text textDecor={"line-through"}>$5</Text>
                  <Text color={"teal"}>free</Text>
                </HStack>
                </HStack>
                <HStack  w={"full"}  fontSize={"17px"} color="#000" fontWeight={500} justify={"space-between"}>
                  <Text>You Pay</Text>
                  <Text >${totalAmount}</Text>
                </HStack>
          
              </VStack>


  </>
  )
}

export default PaymentDetails