import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  HStack,
  Text,
  VStack,
  Radio,
  Image,
  Box,
  Icon,
  StackDivider,
  Select
} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons"
import {BsArrowLeft} from "react-icons/bs"
import {CiDiscount1} from "react-icons/ci"
import {RxCross2} from "react-icons/rx"
import {FaGreaterThan} from "react-icons/fa"
import {TfiInfoAlt} from "react-icons/tfi"
import { useRef } from "react";

const CartDrower = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent maxW={"400"}>
          <DrawerHeader borderBottom="1px solid">


            <HStack justify={"space-between"} alignItems="center">
              <HStack spacing={4}>
                <Icon onClick={onClose} color="#151515" fontSize={"32px"} as={BsArrowLeft}/>
                <HStack>
                <Text color="#151515" fontSize={"20px"} >Bag</Text>
                <Text color={"rgba(0,16,36,.92)"} fontWeight={300} fontSize={"14px"}>1 items</Text>
                </HStack>
              </HStack>
                <Text fontSize={"14px"} color="#fc2779" size="xs">View Wishlist</Text>
            </HStack>


          </DrawerHeader>

          <DrawerBody px={4} py={8}   css={{
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


            <VStack>


              <HStack w={"full"} border={"1px solid"} p={"15px"} borderRadius={"6px"} justify={"space-around"}>
                <Radio size="md" colorScheme="green" spacing={"15px"} >
                <Text fontSize={"15px"} color="rgba(0,16,32,.92)">2000 Reward Points (₹20)</Text>
                </Radio>

                <Text fontSize={"14px"} fontWeight={600} color="#fc2779">Apply</Text>
              </HStack>

              <VStack w="full"   divider={<StackDivider borderColor='gray.200' />} >
                <HStack w={"full"} border={"1px solid"} p={"15px"} borderRadius={"6px"}  align={"flex-start"}>
                  <Box>
                    <Image width={"230px"} src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/b/aba12c7nyb113_blue_01a.jpg"></Image>
                  </Box>
                  <Text fontSize={"16px"} color="rgba(0,16,36,.92)" fontWeight={400}>
                    Nykd by Nykaa Soft cup easy-peasy slip-on bra with Ful
                  </Text>
                  <Icon as={RxCross2} />
                </HStack>


                <HStack   w={"full"} border={"1px solid"} p={"15px"} borderRadius={"6px"}  justifyContent={"space-between"}>
                  <HStack>
                  <Text color="rgba(0,16,36,.92)" fontWeight={400}>Quantity:</Text>
                  <Select colorScheme={"pink"}  size={"xs"} defaultValue={1}>
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

              <VStack w="full"   divider={<StackDivider borderColor='gray.200' />} >
                <HStack w={"full"} border={"1px solid"} p={"15px"} borderRadius={"6px"}  align={"flex-start"}>
                  <Box>
                    <Image width={"230px"} src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/b/aba12c7nyb113_blue_01a.jpg"></Image>
                  </Box>
                  <Text fontSize={"16px"} color="rgba(0,16,36,.92)" fontWeight={400}>
                    Nykd by Nykaa Soft cup easy-peasy slip-on bra with Ful
                  </Text>
                  <Icon as={RxCross2} />
                </HStack>


                <HStack   w={"full"} border={"1px solid"} p={"15px"} borderRadius={"6px"}  justifyContent={"space-between"}>
                  <HStack>
                  <Text color="rgba(0,16,36,.92)" fontWeight={400}>Quantity:</Text>
                  <Select colorScheme={"pink"}  size={"xs"} defaultValue={1}>
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

      

              <HStack alignItems={"center"} w={"full"} border={"1px solid"} p={"15px"} borderRadius={"6px"} justify={"space-around"}>
               <HStack spacing={"20px"}>
               <Icon fontSize={"20px"} color="#fc2779" bgColor={"#fbd6e8"} borderRadius="full" as={CiDiscount1} />
                <VStack alignItems={"flex-start"}>
                  <Text  fontSize={"16px"} color="rgba(0,16,36,.92)" fontWeight={400}>Coupons</Text>
                  <Text  fontSize={"16px"} color="#fc2779" fontWeight={400}>Apply now and save extra!</Text>
                </VStack>
               </HStack>
                <Icon color="rgba(0,16,36,.92)" as={FaGreaterThan} />
              </HStack>



              <VStack  alignItems={"flex-start"}  w={"full"} border={"1px solid"} p={"15px"} borderRadius={"6px"} >
                <Text fontSize={"16px"} color="#001325" fontWeight={500}>Price Details</Text>
                <HStack w="full" fontSize={"12px"} color={"rgba(0,19,37,.92)"} fontWeight={400}  justify={"space-between"}>
                  <Text>Bag MRP (2 items)</Text>
                  <Text>$2345</Text>
                </HStack>
                <HStack  w="full" fontSize={"12px"} color={"rgba(0,19,37,.92)"} fontWeight={400}  justify={"space-between"}>
                  <Text>Bag Discount</Text>
                  <Text>$2345</Text>
                </HStack>
                <HStack  w="full" fontSize={"12px"} color={"rgba(0,19,37,.92)"} fontWeight={400}  justify={"space-between"}>
                  <Text>Discount</Text>
                  <Text>$2</Text>
                </HStack>
                <HStack  w="full" fontSize={"12px"} color={"rgba(0,19,37,.92)"} fontWeight={400}  justify={"space-between"}>
                  <Text>Shipping</Text>
                  <Text>$2 free</Text>
                </HStack>
                <HStack  w={"full"} fontSize={"16px"} color="#001325" fontWeight={500} justify={"space-between"}>
                  <Text>You Pay</Text>
                  <Text >$2344</Text>
                </HStack>
          
              </VStack>

              <VStack alignItems={"flex-start"}  spacing={0} w={"full"} border={"1px solid"} p={"10px"} borderRadius={"6px"}>
                <Text  w="full" fontSize={"12px"} color={"rgba(0,19,37,.62)"} fontWeight={400} >Redeem to get a discount on your next order</Text>
                <HStack  w="full" fontSize={"16px"} color={"rgba(0,19,37,.92)"} fontWeight={500} align={"center"}>
                          <Text>Earn 1478 Reward Points</Text>
                          <Icon  fontSize={"12px"} as={TfiInfoAlt} />
                </HStack>
              </VStack>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <HStack justifyContent={"space-between"} w="full">
              <VStack  spacing={"0"} align="flex-start">
                <Text fontSize={"20px"} fontWeight={500} color="#001325">$3344</Text>
               <HStack spacing={"2px"}>
                 <Text fontSize={"12px"} color={"rgba(0,19,37,.92)"}>Grand total</Text>
                 <Icon  fontSize={"10px"} as={TfiInfoAlt} />
               </HStack>
              </VStack>
              <Button color={"#fff"} bgColor="#fc2779" colorScheme={"none"} rightIcon={<ArrowForwardIcon />} onClick={onClose}>Proceed</Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartDrower;
