import React from 'react'

const singleCartproduct = () => {

    const handleQty=( e )=>{
        e=e.target.value
        setTotalMRP((prev)=> prev+MRP*(e-currentQty))
        setTotalMRPDiscount((prev)=> prev+MRP*(e-currentQty)-price*(e-currentQty))
        setTotalAmount((prev)=>prev+price*(e-currentQty))
        setCurrentQty(e)
      }
      
      useEffect(()=>{
        setTotalMRP((prev)=> prev+MRP)
        setTotalMRPDiscount((prev)=> prev+MRP-price)
        setTotalAmount((prev)=>prev+price)
      },[])
      
      
    //   const handleDelete=()=>{
    //     axios({
    //       method:"delete",
    //       url:process.env.REACT_APP_MYNTRA_API+`/cart/${id}`
    //     }).then((res)=>{
      
    //       handleCartProducts()
    //       setTotalMRP((prev)=> prev-MRP*currentQty)
    //       setTotalAmount((prev)=>prev-price*currentQty)
    //       setTotalMRPDiscount((prev)=> prev-currentQty*(MRP-price))
      
    //       toast({
    //         title: 'Product successfully deleted.',
    //         status: 'error',
    //         duration: 3000,
    //         isClosable: true,
    //         position:"top"
    //       })
      
    //     })
    //   }
      

    return (
    <>
    
    
       <VStack w="full"   border={"1px solid #dedede"} borderRadius={"6px"} divider={<StackDivider borderColor='gray.200' />} >
        <HStack w={"full"}  p={"15px"}   align={"flex-start"}>
          <Box>
            <Image width={"230px"} src={el.image_link}></Image>
          </Box>
          <Text fontSize={"16px"} color="rgba(0,16,36,.92)" noOfLines={3} fontWeight={400}>
           {el.description}
          </Text>
          <Icon as={RxCross2} />
        </HStack>
    
    
        <HStack   w={"full"} py={"5px"} px={"15px"} borderRadius={"6px"}  justifyContent={"space-between"}>
          <HStack>
            <Text>Quantity:</Text>
     <Text>+</Text>
     <Text color="rgba(0,16,36,.92)" fontWeight={400}>{cart.cart[id].quantity}</Text>
     <Text>-</Text>
           </HStack>
        <Text  fontSize={"16px"} color="rgba(0,16,36,.92)" fontWeight={400}>${el.price}</Text>
    
        </HStack>
      </VStack>
 
 
    
    </>
  )
}

export default singleCartproduct