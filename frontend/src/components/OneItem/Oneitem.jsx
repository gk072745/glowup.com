import React, { useEffect, useState } from 'react'
import styles from "./oneitem.module.css"

const Oneitem = (Props) => {
  const {item} = Props;
 const [ratestar,setRatestar] = useState([])
 const [heart,setHeart] = useState("fa-regular fa-heart")

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

  return (
    <div className={styles.oneitem_maindiv}>
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
          <button>Details</button>
          <button>Cart</button>
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