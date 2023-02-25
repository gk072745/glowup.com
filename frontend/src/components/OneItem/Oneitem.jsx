import React, { useEffect, useState } from 'react'
import styles from "./oneitem.module.css"
import { Badge } from '@chakra-ui/react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Oneitem = (Props) => {
  axios.defaults.withCredentials=true
  const {item} = Props;
 const [ratestar,setRatestar] = useState([])
 const [heart,setHeart] = useState("fa-regular fa-heart")
 const navigate = useNavigate();

  useEffect(()=>{
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
  },[])

const AddToWishlist = () => {
  setHeart("fa-solid fa-heart")
}

const AddToCart = (item_id) => {
  //  axios.post(`https://periwinkle-sheep-hem.cyclic.app/cart/add/${item_id}`,{
  //   Headers : {
  //     "Cookie" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5AZ21haWwuY29tIiwiaWF0IjoxNjc3MjYyMTg2fQ.bjVslEcGcUbZjvZ1S3B16dIYJRN4gGkQIOEQpRblgTU"
  //   }
  //  })
  //  .then((res)=>console.log(res))
  //  .catch((err)=>console.log(err))
console.log("id",item_id);

let obj = {
  email : "n@gmail.com"
}

   fetch(`https://periwinkle-sheep-hem.cyclic.app/cart/add/${item_id}`,{
    method : "POST",
    body : JSON.stringify(obj),
    headers : {
      "Cookie" : "jwt_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5AZ21haWwuY29tIiwiaWF0IjoxNjc3MjYyMTg2fQ.bjVslEcGcUbZjvZ1S3B16dIYJRN4gGkQIOEQpRblgTU"
    }
   }).then((res)=>res.json())
   .then((res)=>console.log(res))
   .catch((err)=>console.log(err))
   
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
          <button onClick={()=>AddToWishlist}><i className={heart} ></i></button>
          <button onClick={()=>navigate(`/singleproduct/${item._id}`)}>Details</button>
          <button onClick={()=>AddToCart(item._id)}>Cart</button>
        </div>
    </div>
  )
}

export default Oneitem;


//  const [item,setItem] = useState( {
//     "_id": "63f4af3dc4cbdf746de190b0",
//     "name": "Blotted Lip",
//     "brand": "colourpop",
//     "price": 5.5,
//     "description": "Blotted Lip Sheer matte lipstick that creates the perfect popsicle pout! Formula is lightweight, matte and buildable for light to medium coverage.",
//     "image_link": "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076",
//     "rating": null,
//     "category": "lipstick",
//     "product_type": "lipstick",
//     "tag_list": [
//       "cruelty free",
//       "Vegan"
//     ],
//     "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/047/original/open-uri20180708-4-e7idod?1531087336",
//     "product_colors": [
//       {
//         "hex_value": "#b72227",
//         "_id": "63f4af3dc4cbdf746de190b1"
//       },
//       {
//         "hex_value": "#BB656B",
//         "_id": "63f4af3dc4cbdf746de190b2"
//       },
//       {
//         "hex_value": "#8E4140",
//         "_id": "63f4af3dc4cbdf746de190b3"
//       },
//       {
//         "hex_value": "#A12A33",
//         "_id": "63f4af3dc4cbdf746de190b4"
//       },
//       {
//         "hex_value": "#904550",
//         "_id": "63f4af3dc4cbdf746de190b5"
//       },
//       {
//         "hex_value": "#452222",
//         "_id": "63f4af3dc4cbdf746de190b6"
//       },
//       {
//         "hex_value": "#7C3F35",
//         "_id": "63f4af3dc4cbdf746de190b7"
//       }
//     ],
//     "__v": 0
//   })