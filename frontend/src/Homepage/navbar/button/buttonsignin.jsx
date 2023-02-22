import React from 'react'
import "../button/button.css"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"

const Buttonsign = () => {
  return (
    <div className="button">   
        <Popover>
            <PopoverTrigger>
              <Button bg="none" color="#fff" fontWeight={500} fontSize={15}>Signin</Button>
            </PopoverTrigger>
         
              <PopoverContent className='layout' w={"100%"} p={15} mt={15} zIndex={1}>
              <PopoverArrow/>
              <div className='popover'>
                  <PopoverHeader fontSize={25}>Login / Create Account</PopoverHeader>
                  <PopoverCloseButton  w={8} border="none" bg="none"/>
                </div>
                <PopoverBody textAlign={'left'} w={280} fontSize={15} mt={6} color="grey">Register now and get 2000 Nykaa reward points instantly!</PopoverBody>
                <div className='signupbutt'>
                  <div>
                  <Link className='link1' to="/signup">Sign in with Mobile/Email </Link>
                  </div>
                  <div>
                    <i><BsArrowRight size={15}/></i>
                  </div>
                </div>
                <div className='google'>
                    <div>
                      <i><FcGoogle size={20}/></i>
                    </div>
                    <div>
                      <Link className='link1' to="https://accounts.google.com/" >Google</Link>
                    </div>
                    <i><BsArrowRight size={15}/></i>
                </div>
                </PopoverContent>
           
        </Popover>
    </div>
  )
}

export default Buttonsign
