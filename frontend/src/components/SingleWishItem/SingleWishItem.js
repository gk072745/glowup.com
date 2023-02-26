import React, { useEffect, useState } from 'react'
import styles from "./SingleWishItem.module.css"
import { Badge } from '@chakra-ui/react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import Cookie from "js-cookie"

const SingleWishItem = (Props) => {
  axios.defaults.withCredentials=true
  const {wish,curstate,changeState} = Props;
  const {product_id} = wish;
  const [item,setItem] = useState({});
 const [ratestar,setRatestar] = useState([])
 const navigate = useNavigate();

  useEffect(()=>{
      GetItem(product_id) 
  },[])

  const GetItem = (ID) => {
    axios.get(`https://periwinkle-sheep-hem.cyclic.app/products/product/${ID}`,{
        headers : {
          "Authorization" : Cookie.get("jwt_token")
        }
       })
       .then((res)=>{
        setItem(res.data.data)
        // console.log(res)
        MakeStars(res.data.data)
      })
       .catch((err)=>console.log(err))
  }

  const MakeStars = (item) => {
    let rate;
    if(item.rating===null){
      rate = Math.ceil(Math.random()*5)
    }else{
      rate = Math.floor(item.rating)
    }

    let arr = [];
    for(let i=0;i<5;i++){
      if(rate>0){
        arr.push("fa-solid fa-star")
      }else{
        arr.push("fa-regular fa-star")
      }
      rate--
    }
   
    setRatestar(arr);
  }

  const Removewish = () => {
    axios.delete(`https://periwinkle-sheep-hem.cyclic.app/wishlist/delete/${product_id}`, {
      headers: {
          "Authorization": Cookie.get("jwt_token")
      }
  })
      .then((res) => {
          console.log(res)
          changeState(!curstate)
      })
      .catch((err) => console.log(err))
  }



  return (
    <div className={styles.oneitem_maindiv}>
        <div className={styles.oneitem_maindiv_badge_div}>
        <Badge style={{marginRight:"4px"}} >{item.category}</Badge>
        <Badge colorScheme='pink'>{item.brand}</Badge>
        </div>
        <img src={item.api_featured_image} alt="image" /> 
        <p className={styles.oneitem_maindiv_name}>{item.name}</p>
        <p>MRP : ${item.price}</p>
        <div className={styles.oneitem_maindiv_star_div}>
         {ratestar.map((el,i)=>(
          <i className={el} key={i}></i>
         ))}
        </div>
        <div className={styles.oneitem_maindiv_button_div}>
         
          <button onClick={()=>navigate(`/singleproduct/${item._id}`)}>Details</button>
          <button onClick={()=>Removewish()}>Remove</button>
          
        </div>
    </div>
  )
}

export default SingleWishItem;