import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import Magnifier from "react-magnifier";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, CustomCard,Box, HStack, Icon, Grid, GridItem, VStack, Text, Button, InputGroup, Input, InputRightElement, Tooltip, Tag, Badge, Image, Tabs, TabList, Tab, TabPanels, TabPanel, Heading, StackDivider, Center } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { AiFillHeart,AiFillStar,AiOutlineStar } from "react-icons/ai";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import { BsCheck } from "react-icons/bs"
import { BiInfoCircle } from "react-icons/bi"
import {SiShopify} from "react-icons/si"
import {TbTruckReturn} from "react-icons/tb"
import {TiThumbsUp} from "react-icons/ti"


const SingleProductPage = () => {
    return (
        <div>

            <Box bgColor={"#f3f3f3"} px={"100px"}>


          
                <Box w="full">
                    <Text w="full" py={4} fontWeight={500} color={"#888888"} fontSize={"14px"}>
                        Home <Icon as={ChevronRightIcon}></Icon> Product <Icon as={ChevronRightIcon}></Icon> singleProduct
                    </Text>
                </Box>



                <Box w="full">

                    <HStack bgColor={"#fff"}  divider={<StackDivider borderColor='gray.200' />} w="full" alignItems={"flex-start"}>

                        {/* wishlist */}
                          {/* image */}
                        <Box w='35%'   p={4} zIndex="1">
                            <VStack w="full"  >


                                <Box w="full" textAlign={"right"}>
                                    <Icon as={true?AiFillHeart:CiHeart} color={"#fc2779"} fontSize={"32px"}></Icon>
                                </Box>

                                {/* image.................................. */}
                                <Box>
                                {/* <Magnifier src={"https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076"} width={500} />; */}
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            isFluidWidth: true,
                                            src: "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076",
                                        },
                                        largeImage: {
                                            src: "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076",
                                            width: 1200,
                                            height: 1800
                                        }
                                    }} />
                                </Box>

                            </VStack>

                        </Box>

                      {/* details */}

                        <Box w='65%'  p={4}>

                            <VStack w="full" textAlign={"left"}   >


                                <Text w="full" fontSize={"20px"} color={"#01325"} fontWeight={500}>Nykaa Skin Secrets Gold Sheet Mask + Nykaa Skin Potion 24k Gold Facial Oil Golden Glow Combo</Text>
                                <Text w="full" fontSize={"16px"} color={"#01325"} fontWeight={500}>(1 pcs)</Text>

                                
                                <VStack textAlign={"left"} alignItems="flex-start" w="full"> 
                         
                                <HStack divider={<StackDivider borderColor='gray.200' />} >
                                    <HStack   spacing={"2px"}>
                                         <Icon fontSize={"14px"} color="#001325" as={3>=1?AiFillStar:AiOutlineStar}></Icon>
                                         <Icon fontSize={"14px"} color="#001325" as={3>=2?AiFillStar:AiOutlineStar}></Icon>
                                         <Icon fontSize={"14px"} color="#001325" as={3>=3?AiFillStar:AiOutlineStar}></Icon>
                                         <Icon fontSize={"14px"} color="#001325" as={3>=4?AiFillStar:AiOutlineStar}></Icon>
                                         <Icon fontSize={"14px"} color="#001325" as={3>=5?AiFillStar:AiOutlineStar}></Icon>
                                         <Text fontSize={"14px"} color="#001325"> 3.2/5</Text>
                                    </HStack>
                                    <Text fontSize={"14px"} color="#001325" fontWeight={500}>19 ratings</Text>
                                </HStack>
                              
                                    <HStack spacing={"2px"}>
                                        <Text fontSize={"16px"} fontWeight="500" color={"rgba(0,19,37,0.64)"} >MRP:</Text>
                                        <Text fontSize={"16px"} fontWeight="500" pr={1} color={"rgba(0,19,37,0.64)"} textDecoration={"line-through"}>₹ 2345</Text>
                                        <Text fontSize={"20px"} pr={2} fontWeight="600" color={"#001325"} >₹ 999</Text>
                                        <Text fontSize={"16px"} fontWeight="500" color={"#068743"} >15% off</Text>

                                    </HStack>
                               
                               
                                    <Text fontSize={"16px"} color={"rgba(0,19,37,0.64)"}>
                                        inclusive of all taxes
                                    </Text>


                                 <Box w="full">
                                 <Text fontSize={"14px"}  mt={6} mb={2} color="rgba(0,19,37,0.92)" bgColor={"#edeff0"} w="full" p={2} borderRadius={2}>
                                    &#x2022; Free Face Wash on Rs. 699
                                    </Text>
                                 </Box>

                                </VStack>



                                <Box w="full">

                                    <HStack w="full" h="150px" divider={<StackDivider borderColor='gray.200' />} >


                                        <Box w="40%"  textAlign={"center"}>
                                            <Button fontWeight={600} color={"#fff"} bgColor="#fc2779" py={4} colorScheme={"pink"} borderRadius={"2px"} w="80%">
                                                Add to Bag
                                            </Button>
                                        </Box>


                                        <VStack w="60%" alignItems={"flex-start"} >

                                            {
                                                true ? (
                                                    <VStack alignItems={"flex-start"} m="auto">
                                                        <HStack alignItems={"flex-start"}>
<Center>
<Icon fontWeight={500} color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"} as={CiLocationOn}></Icon>
<Text fontWeight={500} color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"} >Delivery Options</Text>
</Center>
                                                        </HStack>
                                                          
                                                        <InputGroup size='md'    colorScheme={"pink"}  w="max-content" >
                                                            <Input 
                                                               colorScheme={"pink"}
                                                                variant={"outline"}
                                                                borderRadius="2px"
                                                                focusBorderColor='rgba(84,84,84,0.2)'
                                                                placeholder='Enter pincode'
                                                            />
                                                            <InputRightElement width='4.5rem'>
                                                                <Button color="#fc2779" variant={"unstyled"} h='1.75rem' size='sm' >
                                                                    check
                                                                </Button>
                                                            </InputRightElement>
                                                        </InputGroup>
                                                    </VStack>
                                                ) : (
                                                    <>
                                                        <HStack>
                                                            <Icon as={CiLocationOn}></Icon> <Text>Delivery Options for</Text>
                                                            <Text>111111</Text>
                                                            <Button>Change</Button>
                                                        </HStack>
                                                        <HStack>
                                                            <Text>Shipping to:</Text>
                                                            <Text>{"New Delhi,"}</Text>
                                                            <Text>India</Text>
                                                        </HStack>
                                                        <HStack>
                                        <Icon as={BsCheck} />
                                        <Text>Delivered by 26th Feb</Text>
                                    </HStack>
                                    <HStack>
                                        <Icon as={BsCheck} />
                                        <Text>Cash on Delivery available on orders above ₹499</Text>
                                    </HStack>

                                                        <HStack>
                                                            <Icon as={BiInfoCircle}></Icon>
                 <Text>More Info</Text>
                                                        </HStack>
                                                    </>

                                                )
                                            }

                                        </VStack>

                                    </HStack>

                                </Box>
                              

                            </VStack>
                         
                            <Box bgColor={"#f4f4f5"} w="full" p="10px">
                                    <HStack w="full" justifyContent={"center"} spacing="30px">
                                      <HStack>
                                      <Icon fontWeight={500} fontSize={"20px"} color={"rgba(0,19,37,0.72)"} as={SiShopify}></Icon>
                                      <Text fontWeight={500} fontSize={"14px"} color={"rgba(0,19,37,0.72)"}>full Genuine Products</Text>
                                      </HStack>


                                      <HStack>
                                      <Icon fontWeight={500} fontSize={"20px"} color={"rgba(0,19,37,0.72)"} as={TbTruckReturn}></Icon>
                                        <Text fontWeight={500} fontSize={"14px"} color={"rgba(0,19,37,0.72)"}>Return Policy</Text>
                                      </HStack>
                                      

                                      <HStack>
                                        <Text fontWeight={500} fontSize={"14px"} color={"rgba(0,19,37,0.72)"}>Sold by :{"NOIN INC"}</Text>
                                      </HStack>

                                    </HStack>
                                </Box>
                        </Box>


                    </HStack>


                </Box>


                <Box>

<Text>
    Product Description
</Text>


<HStack>

<Box w="70%" >
<VStack  bgColor={"#fff"}>
    <Text>
    "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!
    </Text>
    <Text>
        categorey:lipstick
    </Text>
    <Text> Blotted Fliioed</Text>
    <Text>
        Price: 5.5 $
    </Text>
    <Text>
        Rating
    </Text>
    <HStack>
        <Text>Tags:</Text>
        <Badge>Cruelty free</Badge>
        <Badge>Vegan</Badge>
    </HStack>
</VStack>

<Text>
    Product Details
</Text>

<Box  bgColor={"#fff"}>

<Tabs>
  <TabList>
    <Tab>Rating & Reviews</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <VStack>
        <HStack>
            <HStack>
                <Heading as={"h1"} fontSize="40px">
                    3.7/5
                </Heading>
                <VStack>
                    <Text>Overall Rating</Text>
                    <Text>3 varified ratings</Text>
                </VStack>
            </HStack>

            <VStack>
<Text>
Write a review and wind 100 reward points!
</Text>
<Button>
    Write Review
</Button>
            </VStack>
        </HStack>


        <HStack>

<VStack>
<Text>
    Most Useful Review
</Text>
<HStack>
    <Image src="https://images-static.nykaa.com/prod-review/default_profile_image.png" borderRadius={"full"} boxSize="30px"></Image>
    <VStack>
        <Text>Athsha Beril</Text>
        <HStack>
            <Badge>
            <Icon as={BsCheck}></Icon>
            </Badge>
            <Text>Verified Buyers</Text>
        </HStack>
    </VStack>
</HStack>
</VStack>

<VStack>
    <Badge>5 &#9733;</Badge>
    <Text>"Good Products"</Text>
    <Text>Very good and affordable product my kid loves it. Brushing has become more fun for her.
        <HStack>
            <Icon as={TiThumbsUp}></Icon>
            <Text>Helpful</Text>
        </HStack>
</Text>
</VStack>

        </HStack>
      </VStack>
    </TabPanel>
  </TabPanels>
</Tabs>


</Box>

</Box>
<Box w="30%"  bgColor={"#fff"} position={"sticky"} top="30px">
<VStack>
    <Image w="200px" src="https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076"></Image>
    <Text>
    Agaro Rex DLX Sonic Electric Toothbrush For
    </Text>
    <HStack>
    <Text>MRP:</Text>
        <Text>$970</Text>
        <Text>$999</Text>
    </HStack>
    <Text>60% Off</Text>
    <HStack>
       <Icon as={3>=1?AiFillStar:AiOutlineStar}></Icon>
       <Icon as={3>=2?AiFillStar:AiOutlineStar}></Icon>
       <Icon as={3>=3?AiFillStar:AiOutlineStar}></Icon>
       <Icon as={3>=4?AiFillStar:AiOutlineStar}></Icon>
       <Icon as={3>=5?AiFillStar:AiOutlineStar}></Icon>
       <Text>(7)</Text>
    </HStack>
</VStack>
</Box>



</HStack>


                </Box>




            </Box>
 
        </div>
    )
}

export default SingleProductPage