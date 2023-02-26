import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    useColorModeValue,
    useDisclosure,
    Heading,
    Divider,
    Avatar,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    HStack,
    VStack,
    Radio,
    Image,
    StackDivider,
    Select
  } from "@chakra-ui/react";
  
  import { FaShoppingCart } from "react-icons/fa";
  import { Link as NavLink, Navigate, useNavigate } from "react-router-dom";
  
  import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
 import logo from "../Glow.png"
import Buttonsign from "../navbar/button/buttonsignin";
import {ArrowForwardIcon} from "@chakra-ui/icons"
import {BsArrowLeft} from "react-icons/bs"
import {CiDiscount1} from "react-icons/ci"
import {RxCross2} from "react-icons/rx"
import {FaGreaterThan} from "react-icons/fa"
import {TfiInfoAlt} from "react-icons/tfi"
import { useRef, useState } from "react";
import CartProducts from "../../components/CartProducts";
import PaymentDetails from "../../components/PaymentDetails";
  
  const NAV_ITEMS = [
    {
      label: "Categories",
      href: "/product",
    },
    {
      label: "Brands",
      href: "/product",
    },
    {
      label: "Luxe",
      href: "/product",
    },
    {
      label: "Nayka Fashion",
      href: "/product",
    },
    {
      label: "Beauty Advice",
      href: "/product",
    },
  ];
  
//   const AUTH_ITEMS = [
//     {
//       label: "Login",
//       href: "/login",
//     },
//     {
//       label: "Signup",
//       href: "/signup",
//     },
//   ];
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
  export default function Mainnav() {
    

    const { isOpen, onToggle ,onOpen, onClose} = useDisclosure();
       const { isOpen:isOpenC, onOpen:onOpenC, onClose:onCloseC } = useDisclosure();
      const btnRef = useRef();
      const navigate=useNavigate()
      const [totalMRP, setTotalMRP] = useState(0)
      const [totalMRPDiscount, setTotalMRPDiscount] = useState(0)
      const [totalAmount, setTotalAmount] = useState(totalMRP - totalMRPDiscount)


    return (
      <Box >
      
        <Flex 
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"40px"}
          py={{ base: 2 }}
          px={{ base: 2 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          
        >
          <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }} >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} color="#fc498e" />
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Heading align={"left"} color="#000" border="1px solid lightgrey" w={120} boxShadow="rgb(252,73,142) 0px 5px 15px">
              <NavLink to="/"><img width="100%" h="30px" src={logo} alt="" /></NavLink>
            </Heading>
  
            <Flex
              display={{ base: "none", md: "none", lg: "flex" }}
              ml={10}
              mr={10}
            >
              <DesktopNav />
            </Flex>
          </Flex>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={2}
              display={{ base: "none", md: "none", lg: "flex" }}
            >
            <Buttonsign/>
            </Stack>
        
       <Flex justify="space-around" m={"0 20px"} gap={"20px"} align="center" >
              <FaShoppingCart
                color= "#fc2779"
                fontSize={"20px"}
                cursor="pointer"
                ref={btnRef} onClick={onOpenC}
              />







      <Drawer
        isOpen={isOpenC}
        placement="right"
        onClose={onCloseC}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent maxW={"400"}>
          <DrawerHeader borderBottom="1px solid #dedede">


            <HStack justify={"space-between"} alignItems="center">
              <HStack spacing={4}>
                <Icon onClick={onCloseC} color="#151515" fontSize={"32px"} as={BsArrowLeft}/>
                <HStack>
                <Text color="#151515" fontSize={"20px"} >Bag</Text>
                <Text color={"rgba(0,16,36,.92)"} fontWeight={300} fontSize={"14px"}>1 items</Text>
                </HStack>
              </HStack>
                <Text fontSize={"14px"} color="#fc2779" size="xs">View Wishlist</Text>
            </HStack>


          </DrawerHeader>

          <DrawerBody px={4} py={8} 
            css={{
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


              <HStack w={"full"} border={"1px solid #dedede"} p={"15px"} borderRadius={"6px"} justify={"space-around"}>
                <Radio size="md" colorScheme="green" spacing={"15px"} >
                <Text fontSize={"15px"} color="rgba(0,16,32,.92)">2000 Reward Points (₹20)</Text>
                </Radio>

                <Text fontSize={"14px"} fontWeight={600} color="#fc2779">Apply</Text>
              </HStack>


          <CartProducts setTotalAmount={setTotalAmount} setTotalMRP={setTotalMRP} setTotalMRPDiscount={setTotalMRPDiscount} />



      

              <HStack alignItems={"center"} w={"full"} border={"1px solid #dedede"} p={"15px"} borderRadius={"6px"} justify={"space-around"}>
               <HStack spacing={"20px"}>
               <Icon fontSize={"20px"} color="#fc2779" bgColor={"#fbd6e8"} borderRadius="full" as={CiDiscount1} />
                <VStack alignItems={"flex-start"} spacing={0}>
                  <Text  fontSize={"14px"} color="rgba(0,16,36,.92)" fontWeight={400}>Coupons</Text>
                  <Text  fontSize={"14px"} color="#fc2779" fontWeight={400}>Apply now and save extra!</Text>
                </VStack>
               </HStack>
                <Icon color="rgba(0,16,36,.92)" as={FaGreaterThan} />
              </HStack>



           <PaymentDetails totalAmount={totalAmount} totalMRP={totalMRP} totalMRPDiscount={totalMRPDiscount} />

              <VStack alignItems={"flex-start"}  spacing={0} w={"full"} border={"1px solid #dedede"} p={"10px"} borderRadius={"6px"}>
                <Text  w="full" fontSize={"12px"} color={"rgba(0,19,37,.62)"} fontWeight={400} >Redeem to get a discount on your next order</Text>
                <HStack  w="full"  fontSize={"16px"} color="#000" fontWeight={500} align={"center"}>
                          <Text>Earn 1478 Reward Points</Text>
                          <Icon  fontSize={"12px"} as={TfiInfoAlt} />
                </HStack>
              </VStack>
              
            </VStack>

          </DrawerBody>

          <DrawerFooter borderTop={"1px solid #dedede"}>
            <HStack justifyContent={"space-between"} w="full">
              <VStack  spacing={"0"} align="flex-start">
                <Text fontSize={"20px"} color="#000" fontWeight={500}>${totalAmount}</Text>
               <HStack spacing={"3px"}>
                 <Text fontSize={"12px"} color={"rgba(0,19,37,.92)"}>Grand total</Text>
                 <Icon  fontSize={"10px"} as={TfiInfoAlt} />
               </HStack>
              </VStack>
              <Button width={"40%"} color={"#fff"} bgColor="#fc2779" colorScheme={"none"} rightIcon={<ArrowForwardIcon />} onClick={()=>{
                navigate("/address");
                onCloseC()
              }}>Proceed</Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>





          </Flex>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
   
    // const popoverContentBgColor = useColorModeValue("white", "gray.800");
  
    return (
      <Stack direction={"row"} spacing={4} align={"center"}>
        {NAV_ITEMS.map((navItem, i) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <NavLink to={navItem.href}>
                  <Text
                    p={2}
                    fontSize={18}
                    fontWeight={700}
                    fontFamily="Clear Sans"
                    _hover={{
                      textDecoration: "none",
                      color: "#fc498e",
                    }}
                  >
                    {navItem.label}
                  </Text>
                </NavLink>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const MobileNav = () => {
    const signingo=()=>{
      return Navigate("/signup")
    }
    return (
      <Stack p={4} display={{ md: "none" }} bg="#fff">
       
          <Flex
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
            justify="space-between"
            align={"center"}
          >
            <Flex
              align={"center"}
              gap="5px"
              as={Button}
              bg={"none"}
              _hover={{ bg: "none" }}
            >
              <Avatar
                size={"sm"}
                src={"https://avatars.dicebear.com/api/male/username.svg"}
              />
              <Text
                textDecor={"none"}
                fontWeight={600}
                fontSize="18px"
                color={"#000"}
              >
               name
              </Text>
            </Flex>
            <Button
              size={"sm"}
              onClick={signingo}
            >
              Signin
            </Button>
          </Flex>
        <Divider />
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? "#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
          >
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} to={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };