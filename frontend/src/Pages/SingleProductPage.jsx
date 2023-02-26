import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  Button,
  InputGroup,
  Input,
  InputRightElement,
  Badge,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  StackDivider,
  Center,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import {  ChevronRightIcon } from "@chakra-ui/icons";
import { AiFillHeart, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { BsCheck } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import { SiShopify } from "react-icons/si";
import { GiReturnArrow } from "react-icons/gi";
import { TiThumbsUp } from "react-icons/ti";
import { TfiLocationPin } from "react-icons/tfi";
import { useParams} from "react-router-dom";
import axios from "axios";
import { useSelector } from 'react-redux'
import "./singleproduct.css";
import Cookies from "js-cookie";

const SingleProductPage = () => {
  const toast=useToast()
  const {login,isLoggedin,isAdmin}=useSelector((store)=>store.userManager)
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [pincode, setPin] = useState("");
  const {
    brand,
    category,
    description,
    image_link,
    name,
    price,
    product_type,
    rating,
    tag_list,
  } = singleProduct;
  const totalRating = Math.floor(Math.random() * 100) + 1;
  const mrp = Math.floor(price * 1.2);
  



  useEffect(() => {
    axios({
      url: `https://periwinkle-sheep-hem.cyclic.app/products/product/${id}`,
    }).then((res) => {
      setSingleProduct(res.data.data);
    });
  }, [id]);




const handlePin = (pin) => {
    axios({
      url: "https://api.postalpincode.in/pincode/" + pin,
    })
      .then((res) => {
        if (res.data[0].PostOffice) {
          localStorage.setItem(
            "Address",
            JSON.stringify(res.data[0].PostOffice[0])
          );
        } else {
          console.log(false);
        }
      })
      .catch((err) => {
        console.log("err");
      });
  };

const handleAddcart=(id)=>{
  axios.post(`https://periwinkle-sheep-hem.cyclic.app/cart/add/${id}`,null,{
    headers:{
      Authorization: Cookies.get("jwt_token")
    }
})
.then((res)=>{
    toast({
      title: "Product successfully added in cart",
      variant:"top-accent",
      isClosable: true,
      position:'top-right',
      status:"success",
      duration:1500
    })
   }).catch((err)=>{
    toast({
      title: "Something went wrong!",
      variant:"top-accent",
      isClosable: true,
      position:'top-right',
      status:"error",
      duration:1500
    })
  })
}

const handleAddWishlist=(id)=>{
  axios.post(`https://periwinkle-sheep-hem.cyclic.app/wishlist/add/${id}`,null,{
    headers:{
      Authorization: Cookies.get("jwt_token")
    }
})
.then((res)=>{
    toast({
      title: "Product successfully added in wishlit",
      variant:"top-accent",
      isClosable: true,
      position:'top-right',
      status:"success",
      duration:1500
    })
   }).catch((err)=>{
    toast({
      title: "Something went wrong!",
      variant:"top-accent",
      isClosable: true,
      position:'top-right',
      status:"error",
      duration:1500
    })
  })
}



  return (
    <div>
      <Box bgColor={"#f3f3f3"} px={"100px"} className="paddinghandleclass">
        <Box w="full">
          <Text
            w="full"
            py={4}
            fontWeight={500}
            color={"#888888"}
            fontSize={"14px"}
          >
            Home <Icon as={ChevronRightIcon}></Icon> Product{" "}
            <Icon as={ChevronRightIcon}></Icon> {name}
          </Text>
        </Box>

        <Box w="full">
          <SimpleGrid
          className="gridhandlesdaf"
            templateColumns={"35% 65%"}
            spacing={0}
            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
            divider={<StackDivider borderColor="gray.200" />}
            w="full"
            alignItems={"flex-start"}
          >
            {/* wishlist */}
            {/* image */}
            <Box bgColor={"#fff"} height="full" p={4} zIndex="0">
              <VStack w="full">
                <Box w="full" textAlign={"right"}>
                  <Icon
                    as={true ? AiFillHeart : CiHeart}
                    color={"#fc2779"}
                    fontSize={"32px"}
                  ></Icon>
                </Box>

                {/* image.................................. */}
                <Box height={"min-content"}>
                  <Image h="300px" src={image_link} />
                </Box>
              </VStack>
            </Box>

            {/* details */}

            <Box>
              <VStack w="full" textAlign={"left"} p={4} bgColor="#fff">
                <Text
                  w="full"
                  fontSize={"20px"}
                  color={"#01325"}
                  fontWeight={500}
                  noOfLines={2}
                >
                  {description}
                </Text>
                <Text
                  w="full"
                  fontSize={"16px"}
                  color={"#01325"}
                  fontWeight={500}
                >
                  (1 pcs)
                </Text>

                <VStack textAlign={"left"} alignItems="flex-start" w="full">
                  <HStack divider={<StackDivider borderColor="gray.200" />}>
                    <HStack spacing={"2px"}>
                      <Icon
                        fontSize={"14px"}
                        color="#001325"
                        as={rating >= 1 ? AiFillStar : AiOutlineStar}
                      ></Icon>
                      <Icon
                        fontSize={"14px"}
                        color="#001325"
                        as={rating >= 2 ? AiFillStar : AiOutlineStar}
                      ></Icon>
                      <Icon
                        fontSize={"14px"}
                        color="#001325"
                        as={rating >= 3 ? AiFillStar : AiOutlineStar}
                      ></Icon>
                      <Icon
                        fontSize={"14px"}
                        color="#001325"
                        as={rating >= 4 ? AiFillStar : AiOutlineStar}
                      ></Icon>
                      <Icon
                        fontSize={"14px"}
                        color="#001325"
                        as={rating >= 5 ? AiFillStar : AiOutlineStar}
                      ></Icon>
                      <Text fontSize={"14px"} color="#001325">
                        {" "}
                        {rating}/5
                      </Text>
                    </HStack>
                    <Text fontSize={"14px"} color="#001325" fontWeight={500}>
                      {totalRating} ratings
                    </Text>
                  </HStack>

                  <HStack
                    spacing={"5px"}
                    divider={<StackDivider borderColor="gray.200" />}
                  >
                    <HStack spacing={"4px"}>
                      <Text
                        fontSize={"16px"}
                        fontWeight="500"
                        color={"rgba(0,19,37,0.64)"}
                      >
                        MRP:
                      </Text>
                      <Text
                        fontSize={"16px"}
                        fontWeight="500"
                        color={"rgba(0,19,37,0.64)"}
                        textDecoration={"line-through"}
                      >
                        ${mrp}
                      </Text>
                      <Text
                        fontSize={"20px"}
                        fontWeight="600"
                        color={"#001325"}
                      >
                        ${price}
                      </Text>
                    </HStack>
                    <Text fontSize={"16px"} fontWeight="500" color={"#068743"}>
                      {16}% off
                    </Text>
                  </HStack>

                  <Text fontSize={"16px"} color={"rgba(0,19,37,0.64)"}>
                    inclusive of all taxes
                  </Text>

                  <Box w="full">
                    <Text
                      fontSize={"14px"}
                      mt={6}
                      mb={2}
                      color="rgba(0,19,37,0.92)"
                      bgColor={"#edeff0"}
                      w="full"
                      p={2}
                      borderRadius={2}
                    >
                      &#x2022; Free Face Wash on Rs. 699
                    </Text>
                  </Box>
                </VStack>

                <Box w="full">
                  <HStack
                    w="full"
                    divider={<StackDivider borderColor="gray.200" />}
                  >
                    <Box w="40%" textAlign={"center"}>
                      <Button
                        fontWeight={600}
                        color={"#fff"}
                        bgColor="#fc2779"
                        py={4}
                        colorScheme={"pink"}
                        borderRadius={"2px"}
                        w="80%"
                        onClick={()=>handleAddcart(id)}
                      >
                        Add to Bag
                      </Button>
                    </Box>

                    <VStack w="60%" alignItems={"flex-start"}>
                      {true ? (
                        <VStack alignItems={"flex-start"} m="auto">
                          <HStack alignItems={"flex-start"}>
                            <Center>
                              <Icon
                                fontWeight={500}
                                color={"rgba(0, 19, 37, 0.72)"}
                                fontSize={"18px"}
                                as={TfiLocationPin}
                              ></Icon>
                              <Text
                                fontWeight={500}
                                color={"rgba(0, 19, 37, 0.72)"}
                                fontSize={"16px"}
                              >
                                Delivery Options
                              </Text>
                            </Center>
                          </HStack>

                          <InputGroup
                            size="md"
                            colorScheme={"pink"}
                            w="max-content"
                            className="inputwithdhandle"
                          >
                            <Input
                              colorScheme={"pink"}
                              variant={"outline"}
                              borderRadius="2px"
                              focusBorderColor="rgba(84,84,84,0.2)"
                              placeholder="Enter pincode"
                              value={pincode}
                              onChange={(e) => setPin(e.target.value)}
                            />
                            <InputRightElement
                              width="4.5rem"
                              onClick={() => handlePin(pincode)}
                            >
                              <Button
                                color="#fc2779"
                                variant={"unstyled"}
                                h="1.75rem"
                                size="sm"
                              >
                                check
                              </Button>
                            </InputRightElement>
                          </InputGroup>
                        </VStack>
                      ) : (
                        <VStack spacing={1} alignItems={"flex-start"}>
                          <HStack alignItems={"center"} spacing={"3px"}>
                            <Icon fontSize={"20px"} as={TfiLocationPin}></Icon>
                            <Text
                              fontSize={"14px"}
                              color="rgba(0,19,37,0.92)"
                              fontWeight={500}
                            >
                              Delivery Options for
                            </Text>
                            <Text
                              fontSize={"14px"}
                              color="#fc2779"
                              pr={"10px"}
                              fontWeight={500}
                            >
                              111111
                            </Text>
                            <Button
                              variant={"outline"}
                              color="#fc2779"
                              py="14px"
                              fontSize={"16px"}
                              size={"xs"}
                              colorScheme="pink"
                              borderColor={"#fc2779"}
                              borderRadius="3px"
                            >
                              Change
                            </Button>
                          </HStack>

                          <HStack alignItems={"center"}>
                            <Text fontSize={"14px"} color="rgba(0,19,37,.92)">
                              Shipping to:
                            </Text>
                            <Text
                              fontSize={"14px"}
                              color="rgba(0,19,37,.92)"
                              fontWeight={500}
                            >
                              {"New Delhi, India"}
                            </Text>
                          </HStack>

                          <HStack alignItems={"center"}>
                            <Icon
                              fontSize={"28px"}
                              color={"#58ce78"}
                              as={BsCheck}
                            />
                            <Text fontSize={"14px"} color="rgba(0,19,37,.92)">
                              Delivered by 26th Feb
                            </Text>
                          </HStack>

                          <HStack alignItems={"center"}>
                            <Icon
                              fontSize={"28px"}
                              color={"#58ce78"}
                              as={BsCheck}
                            />
                            <Text fontSize={"14px"} color="rgba(0,19,37,.92)">
                              Cash on Delivery available on orders above ₹499
                            </Text>
                          </HStack>

                          <HStack alignItems={"center"} pl={1}>
                            <Icon
                              fontSize={"20px"}
                              color="rgba(0,19,37,0.64)"
                              as={BiInfoCircle}
                            ></Icon>
                            <Text fontSize={"14px"} color="rgba(0,19,37,0.64)">
                              More Info
                            </Text>
                          </HStack>
                        </VStack>
                      )}
                    </VStack>
                  </HStack>
                </Box>
              </VStack>

              <Box
                boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                bgColor={"#f4f4f5"}
                w="full"
                p="15px"
              >
                <HStack w="full" justifyContent="space-around" spacing="30px">
                  <HStack>
                    <Icon
                    className="logoasdfsdf"
                      borderRadius="full"
                      fontWeight={500}
                      fontSize={"24px"}
                      color={"rgba(0,19,37,0.72)"}
                      as={SiShopify}
                    ></Icon>
                    <Text
                    className="textsizehandelsdfsdf"
                      fontWeight={500}
                      fontSize={"15px"}
                      color={"rgba(0,19,37,0.72)"}
                    >
                      100% Genuine Products
                    </Text>
                  </HStack>

                  <HStack>
                    <Icon
                    className="logoasdfsdf"

                      fontWeight={500}
                      borderRadius="full"
                      fontSize={"24px"}
                      color={"rgba(0,19,37,0.72)"}
                      as={GiReturnArrow}
                    ></Icon>
                    <Text
                    className="textsizehandelsdfsdf"
                      fontWeight={500}
                      fontSize={"15px"}
                      color={"rgba(0,19,37,0.72)"}
                    >
                      Return Policy
                    </Text>
                  </HStack>

                  <HStack>
                    <Text
                    className="textsizehandelsdfsdf"
                      fontWeight={500}
                      fontSize={"15px"}
                      color={"rgba(0,19,37,0.72)"}
                    >
                      Sold by :{"NOIN INC"}
                    </Text>
                  </HStack>
                </HStack>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <HStack alignItems={"flex-start"}>
            <Box className="discriptionboxasfd" w="80%">
              <Box>
                <Text
                  py={"20px"}
                  fontSize={"20px"}
                  fontWeight={600}
                  color={"#001325"}
                >
                  Product Description
                </Text>
                <VStack
                  alignItems={"flex-start"}
                  p="15px"
                  borderRadius={"3px"}
                  bgColor={"#fff"}
                >
                  <Text color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"}>
                    {description}
                  </Text>

                  <HStack>
                    <Text
                      fontWeight={700}
                      fontSize={"16px"}
                      color="rgba(0,19,37,.72)"
                    >
                      Category:
                    </Text>
                    <Text color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"}>
                      {category || product_type || name}
                    </Text>
                  </HStack>

                  <HStack>
                    <Text
                      fontWeight={700}
                      fontSize={"16px"}
                      color="rgba(0,19,37,.72)"
                    >
                      Title:
                    </Text>
                    <Text color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"}>
                      {name}
                    </Text>
                  </HStack>

                  <HStack>
                    <Text
                      fontWeight={700}
                      fontSize={"16px"}
                      color="rgba(0,19,37,.72)"
                    >
                      Price:
                    </Text>
                    <Text color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"}>
                      $ {price}
                    </Text>
                  </HStack>

                  <HStack>
                    <Text
                      fontWeight={700}
                      fontSize={"16px"}
                      color="rgba(0,19,37,.72)"
                    >
                      Rating:
                    </Text>
                    <Text color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"}>
                      {rating}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text
                      fontWeight={700}
                      fontSize={"16px"}
                      color="rgba(0,19,37,.72)"
                    >
                      Brand:
                    </Text>
                    <Text color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"}>
                      {brand}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text
                      fontWeight={700}
                      fontSize={"16px"}
                      color="rgba(0,19,37,.72)"
                    >
                      Product type:
                    </Text>
                    <Text color={"rgba(0, 19, 37, 0.72)"} fontSize={"16px"}>
                      {product_type}
                    </Text>
                  </HStack>

                  <HStack>
                    <Text
                      fontWeight={700}
                      fontSize={"16px"}
                      color="rgba(0,19,37,.72)"
                    >
                      Tags:
                    </Text>
                    {tag_list?.map((el, i) => (
                      <Badge key={i}>{el}</Badge>
                    ))}
                  </HStack>
                </VStack>
              </Box>

              <Box w="full" mb={12}>
                <Text
                  py={"20px"}
                  fontSize={"20px"}
                  fontWeight={600}
                  color={"#001325"}
                >
                  Product Details
                </Text>

                <Tabs bgColor={"#fff"} w="full">
                  <TabList>
                    <Tab
                      fontWeight={500}
                      fontSize={"16px"}
                      borderColor={"#fc2779"}
                      color="#fc2779"
                    >
                      Rating & Reviews
                    </Tab>
                  </TabList>

                  <TabPanels w="full">
                    <TabPanel w="full">
                      <VStack
                        w="full"
                        divider={<StackDivider borderColor="gray.200" />}
                        spacing={4}
                        alignItems="flex-start"
                      >
                        <HStack
                        className={"formobilesize"}
                          w="full"
                          spacing={8}
                          p={2}
                          divider={<StackDivider borderColor="gray.200" />}
                        >
                          <HStack w="full"  alignItems={"flex-start"} className="ratingsdf">
                            <Heading
                              as={"h1"}
                              color="rgba(0,19,37,0.92)"
                              fontWeight={600}
                              fontSize="36px"
                              className="headingrating"
                            >
                              {rating}/5
                            </Heading>
                            <VStack spacing={"0px"}>
                              <Text
                              className="handlefontsadf"
                                fontWeight={500}
                                size={"16px"}
                                color={"rgba(0,19,37,.92)"}
                              >
                                Overall Rating
                              </Text>
                              <Text
                              className="handlefontsadf1"
                                fontWeight={400}
                                size={"14px"}
                                color={"rgba(0,19,37,.72)"}
                              >
                                3 varified ratings
                              </Text>
                            </VStack>
                          </HStack>

                          <VStack w="full" align={"flex-start"} >
                            <Text fontSize="14px" color={"rgba(0,19,37,.92)"}>
                              Write a review and wind 100 reward points!
                            </Text>
                            <Button
                              variant={"outline"}
                              color="#fc2779"
                              fontWeight={600}
                              colorScheme="pink"
                              size={"sm"}
                              borderColor={"#dbd9de"}
                              borderRadius="2px"
                            >
                              Write Review
                            </Button>
                          </VStack>
                        </HStack>

                        <HStack  alignItems={"flex-start"} className="removeRevidsfaf" spacing="30px" w="full">
                          <VStack className="reviewuserprofilemanage" w="30%">
                            <Text
                              fontWeight={600}
                              color="rgba(0, 19, 37, 0.92)"
                            >
                              Most Useful Review
                            </Text>
                            <HStack>
                              <Image
                                borderRadius="full"
                                src="https://images-static.nykaa.com/prod-review/default_profile_image.png"
                                boxSize="35px"
                              ></Image>
                              <VStack>
                                <Text
                                  fontWeight={500}
                                  fontSize="14px"
                                  color={"rgba(0, 19, 37, 0.72)"}
                                >
                                  Athsha Beril
                                </Text>
                                <HStack spacing={"3px"}>
                                  <Icon
                                    fontSize={"12px"}
                                    borderRadius="full"
                                    p={0}
                                    bgColor={"#fed0e2"}
                                    color="#fc2779"
                                    as={BsCheck}
                                  ></Icon>

                                  <Text
                                    fontSize={"12px"}
                                    color="rgba(0,19,37,0.52)"
                                  >
                                    Verified Buyers
                                  </Text>
                                </HStack>
                              </VStack>
                            </HStack>
                          </VStack>

                          <VStack alignItems={"flex-start"}>
                            <Badge
                              bgColor={"#068743"}
                              fontSize="16px"
                              color="#fff"
                              fontWeight={600}
                            >
                              5 &#9733;
                            </Badge>
                            <Text
                              fontSize={"14px"}
                              color="rgba(0,19,37,.92)"
                              fontWeight={500}
                            >
                              "Good Products"
                            </Text>
                            <Text
                              fontSize={"14px"}
                              color="rgba(0,19,37,.64)"
                              fontWeight={400}
                            >
                              Very good and affordable product my kid loves it.
                              Brushing has become more fun for her.
                            </Text>
                            <HStack
                              cursor="pointer"
                              border={"1px solid #dbd9de"}
                              fontSize="18px"
                              px="2"
                              borderRadius={"3px"}
                              color={"#fc2779"}
                            >
                              <Icon as={TiThumbsUp}></Icon>
                              <Text>Helpful</Text>
                            </HStack>
                          </VStack>
                        </HStack>
                      </VStack>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>

            <Box
              w="20%"
              className="singleProductdivsdf"
              py={"60px"}
              position={"sticky"}
              top="0px"
            >
              <Box bgColor={"#fff"}>
                <VStack
                  p={8}
                  align="center"
                  pt={12}
                  justify={"center"}
                  textAlign="center"
                >
                  <Image w="200px" src={image_link}></Image>
                  <Text
                    fontWeight={500}
                    fontSize={"14px"}
                    color="#001325"
                    noOfLines={2}
                  >
                    {description}
                  </Text>
                  <HStack>
                    <Text fontWeight={500} color="rgba(0,19,37,0.64)">
                      MRP:
                    </Text>
                    <Text fontWeight={600} fontSize="20px" color="#001325">
                      ${mrp}
                    </Text>
                  </HStack>

                  <HStack spacing={"2px"}>
                    <Icon as={rating >= 1 ? AiFillStar : AiOutlineStar}></Icon>
                    <Icon as={rating >= 2 ? AiFillStar : AiOutlineStar}></Icon>
                    <Icon as={rating >= 3 ? AiFillStar : AiOutlineStar}></Icon>
                    <Icon as={rating >= 4 ? AiFillStar : AiOutlineStar}></Icon>
                    <Icon as={rating >= 5 ? AiFillStar : AiOutlineStar}></Icon>
                    <Text fontSize={"12px"} color="#6f7981">
                      ({totalRating})
                    </Text>
                  </HStack>
                </VStack>
                <Button
                  w="full"
                  colorScheme={"none"}
                  bgColor={"#fc2779"}
                  fontWeight={600}
                  color="#fff"
                  borderRadius={0}
                  onClick={()=>handleAddcart(id)}

                >
                  Add to Bag
                </Button>
              </Box>
            </Box>
          </HStack>
        </Box>
      </Box>
      {/* ..................................... */}
      <HStack  display={"none"} className="absulateaddcartbtn" borderRadius={"5px"}   fontWeight={600} border={"1px solid #fc2779"}  w="95%" m="auto" spacing={0} position={"sticky"} mb={"20px"} bottom={"20px"} >
        <Box  borderRadius={"5px 0px 0px 5px"}  py={"7px"} bgColor="#fff"  w="25%"  textAlign={"center"}> 
        <Button w="full" colorScheme={"none"}  borderRadius={0}  ><Icon color="#fc2779" fontSize="40px" as={false?AiFillHeart:CiHeart } /></Button>
        </Box>
        <Box borderRadius={"0px 5px 5px 0px"} py={"7px"} w="75%"  bgColor="#fc2779" textAlign={"center"}>
                       
        <Button  w="full" fontSize="20px" onClick={()=>handleAddcart(id)} colorScheme={"none"}    color="#fff" ><Icon as={SiShopify} /> <Text pl={4} >Add to Bag</Text></Button>
        </Box>
      </HStack>
    </div>
  );




};

export default SingleProductPage;
