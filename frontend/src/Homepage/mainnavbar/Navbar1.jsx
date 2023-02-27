import {Box,Flex,Text,IconButton,Button,Stack,Collapse,Icon,Link,Popover,PopoverTrigger,useColorModeValue,useDisclosure,Heading,Divider,Avatar,Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,HStack,VStack,Radio,Image,StackDivider,Select, useToast} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link as NavLink, Navigate, useNavigate } from "react-router-dom";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../Glow.png";
import Buttonsign from "../navbar/button/buttonsignin";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { BsArrowLeft } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaGreaterThan } from "react-icons/fa";
import { TfiInfoAlt } from "react-icons/tfi";
import { useEffect, useRef, useState } from "react";
import CartProducts from "../../components/CartProducts";
import PaymentDetails from "../../components/PaymentDetails";
import { useSelector } from "react-redux";
import axios from "axios";
 import Cookies from "js-cookie"; 
import { useIsAuthenticated } from "react-auth-kit";
 
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

  export default function Mainnav() {
    
    const {login,isLoggedin,isAdmin}=useSelector((store)=>store.userManager)
    const { isOpen, onToggle ,onOpen, onClose} = useDisclosure();
    const { isOpen:isOpenC, onOpen:onOpenC, onClose:onCloseC } = useDisclosure();
    const btnRef = useRef();
    const toast=useToast()
    const navigate=useNavigate()
    const [totalAmount, setTotalAmount] = useState(0)
    const [cartProducts, setCartProducts] = useState([])
    const isAuthenticated = useIsAuthenticated()

const handleCartProduct=()=>{
  axios.get(`https://periwinkle-sheep-hem.cyclic.app/cart/`,{
    headers:{
      Authorization: Cookies.get("jwt_token")
    }
}
).then((res)=>{
  setCartProducts(res.data)
  
}).catch((err)=>{
  console.log(err)
})
}




console.log(login,isLoggedin,isAdmin)

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
                ref={btnRef} 
                onClick={()=>{
                  console.log(isLoggedin)
                 if(isLoggedin){
					setTotalAmount(0)
                  handleCartProduct()
                  onOpenC()
             
                 }else{
                  navigate("/login")
                 }
                }}
              />

					{/* ...................................... */}

      <Drawer
        isOpen={isOpenC}
        placement="right"
        onClose={onCloseC}
        finalFocusRef={btnRef}
      >
        {/* sdfsdf */}
        <DrawerOverlay />
        <DrawerContent maxW={"400"}>
          <DrawerHeader borderBottom="1px solid #dedede">


            <HStack justify={"space-between"} alignItems="center">
              <HStack spacing={4}>
                <Icon onClick={onCloseC} color="#151515" fontSize={"32px"} as={BsArrowLeft}/>
                <HStack>
                <Text color="#151515" fontSize={"20px"} >Bag</Text>
                <Text color={"rgba(0,16,36,.92)"} fontWeight={300} fontSize={"14px"}>{cartProducts?.data?.length} items</Text>
                </HStack>
              </HStack>
                <Text onClick={()=>isLoggedin?navigate("/wishlist"):navigate("/signup")} cursor={"pointer"} fontSize={"14px"} color="#fc2779" size="xs">View Wishlist</Text>
            </HStack>


          </DrawerHeader>

							<DrawerBody
								px={4}
								py={8}
								css={{
									"&::-webkit-scrollbar": {
										width: "8px",
										width: " 8px",
									},
									"&::-webkit-scrollbar-track": {
										borderRadius: "7px",
										backgroundColor: "#EBEBEB",
									},

									"&::-webkit-scrollbar-thumb": {
										borderRadius: "3px",
										backgroundColor: "#C1BFC1",
									},
								}}
							>
								<VStack>
									<HStack
										w={"full"}
										border={"1px solid #dedede"}
										p={"15px"}
										borderRadius={"6px"}
										justify={"space-around"}
									>
										<Radio
											size="md"
											colorScheme="green"
											spacing={"15px"}
										>
											<Text
												fontSize={"15px"}
												color="rgba(0,16,32,.92)"
											>
												2000 Reward Points (₹20)
											</Text>
										</Radio>

										<Text
											fontSize={"14px"}
											fontWeight={600}
											color="#fc2779"
										>
											Apply
										</Text>
									</HStack>

									{/* ....................................................... */}

          <CartProducts cartProducts={cartProducts} handleCartProduct={handleCartProduct} setTotalAmount={setTotalAmount}  />
{/* ....................................................... */}

									<HStack
										alignItems={"center"}
										w={"full"}
										border={"1px solid #dedede"}
										p={"15px"}
										borderRadius={"6px"}
										justify={"space-around"}
									>
										<HStack spacing={"20px"}>
											<Icon
												fontSize={"20px"}
												color="#fc2779"
												bgColor={"#fbd6e8"}
												borderRadius="full"
												as={CiDiscount1}
											/>
											<VStack
												alignItems={"flex-start"}
												spacing={0}
											>
												<Text
													fontSize={"14px"}
													color="rgba(0,16,36,.92)"
													fontWeight={400}
												>
													Coupons
												</Text>
												<Text
													fontSize={"14px"}
													color="#fc2779"
													fontWeight={400}
												>
													Apply now and save extra!
												</Text>
											</VStack>
										</HStack>
										<Icon
											color="rgba(0,16,36,.92)"
											as={FaGreaterThan}
										/>
									</HStack>

									{/* ....................................................... */}

           <PaymentDetails totalAmount={totalAmount} cartProducts={cartProducts} />
{/* ....................................................... */}

									<VStack
										alignItems={"flex-start"}
										spacing={0}
										w={"full"}
										border={"1px solid #dedede"}
										p={"10px"}
										borderRadius={"6px"}
									>
										<Text
											w="full"
											fontSize={"12px"}
											color={"rgba(0,19,37,.62)"}
											fontWeight={400}
										>
											Redeem to get a discount on your
											next order
										</Text>
										<HStack
											w="full"
											fontSize={"16px"}
											color="#000"
											fontWeight={500}
											align={"center"}
										>
											<Text>Earn 1478 Reward Points</Text>
											<Icon
												fontSize={"12px"}
												as={TfiInfoAlt}
											/>
										</HStack>
									</VStack>
								</VStack>
							</DrawerBody>

							<DrawerFooter borderTop={"1px solid #dedede"}>
								<HStack
									justifyContent={"space-between"}
									w="full"
								>
									<VStack spacing={"0"} align="flex-start">
										<Text
											fontSize={"20px"}
											color="#000"
											fontWeight={500}
										>
											${totalAmount}
										</Text>
										<HStack spacing={"3px"}>
											<Text
												fontSize={"12px"}
												color={"rgba(0,19,37,.92)"}
											>
												Grand total
											</Text>
											<Icon
												fontSize={"10px"}
												as={TfiInfoAlt}
											/>
										</HStack>
									</VStack>
									<Button
										width={"40%"}
										color={"#fff"}
										bgColor="#fc2779"
										colorScheme={"none"}
										rightIcon={<ArrowForwardIcon />}
										onClick={() => {
											navigate("/address");
											onCloseC();
										}}
									>
										Proceed
									</Button>
								</HStack>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>

					{/* ...................................... */}
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
	const signingo = () => {
		return Navigate("/signup");
	};
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
						src={
							"https://avatars.dicebear.com/api/male/username.svg"
						}
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
				<Button size={"sm"} onClick={signingo}>
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

			<Collapse
				in={isOpen}
				animateOpacity
				style={{ marginTop: "0!important" }}
			>
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
