import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  
} from '@chakra-ui/react';

import { Link } from 'react-router-dom'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const initdata={
 name:"",
 email:"",
 password:""
}




  const divStyles = {
    boxShadow: '1px 2px 9px #F4AAB9',
    padding:"10px",
    margin:"100px",
    backgroundImage: 
"url('https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvc21ldGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80')",
   
    width:"600px",
    marginTop:"-50px",
    padding:"50px",
    offsetX: 0,
    offsetY: 0,
   
    
  };

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  const [data,setdata]=useState(initdata)
  const navigate= useNavigate()


  const handlechange=(e)=>{
    const {name,value}=e.target 
    setdata({
      ...data,
      [name]:value
      
    })
   
  }
  const handlesubmit=async(e)=>{
    e.preventDefault() 
 
   registeruser(data)
  }
  

  const registeruser=(data)=>{
    return axios.post('https://periwinkle-sheep-hem.cyclic.app/user/register', {
        name:data.name,
        email:data.email,
        password:data.password
      })
      .then( (response)=> {
       return alert("registered successfully"),
       navigate("/login")
      })
      .catch( (error)=> {
        return alert(error,"something went wrong");
      });
    
  }
  console.log(data)
  const {name,email,password}=data



  return (
    <div>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      
     
      >
        <div style={divStyles} >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} bg={"none"}>
        <Stack align={'center'} bg={"green"} marginBottom={"-32px"} borderRadius={"5px"} height={"100px"} paddingTop={"10px"} width={"390px"} marginLeft={"30px"}>
          <Heading fontSize={'2xl'} color={"white"} textAlign={'center'}>
            SIGN UP
          </Heading>
          <Text fontSize={'lg'} color={'white'}>
            Well come to  GLOW UP ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <form onSubmit={handlesubmit}>
            <HStack>
             
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel color={"white"}>User Name</FormLabel>
                  <Input style={{width:"390px",color:"white"}} onChange={handlechange} type="text" value={name} name="name"/>
                </FormControl>
              </Box>
              <Box>
               
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel color={"white"}>Email address</FormLabel>
              <Input style={{color:"white"}} type="email" onChange={handlechange} value={email} name="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel color={"white"}>Password</FormLabel>
              <InputGroup>
                <Input style={{color:"white"}} type={showPassword ? 'text' : 'password'} onChange={handlechange} value={password} name="password" />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Input
                loadingText="Submitting"
                type={"submit"}
                value={"Register"}
                size="lg"
                textAlign={"center"}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue',
                }}
               placeholder="Sign up" 
              />
            </Stack>
            <Stack pt={6}>
              <Text align={'center'} color={"white"} marginTop={"0px"}>
                Already a user? <Link color={'red'}>Login</Link>
              </Text>
            </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
      </div>
    </Flex>
    </div>
  );
}