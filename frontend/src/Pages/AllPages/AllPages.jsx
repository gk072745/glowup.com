import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "./AllPages.module.css"
import axios from "axios"
import Oneitem from '../../components/OneItem/Oneitem';

const AllPages = () => {
   const {category} = useParams();
   const [products,setProducts] = useState([]);
   const [firstimg,setFirstimg] = useState("");
   const [secondimg,setSecondimg] = useState("");
   const [thirdimg,setThirdimg] = useState("");
   const [page,setPage] = useState(1);
   const [tpage,setTpage] = useState(0);
   

   useEffect(()=>{
    if(category==="makeup"){
      setFirstimg("https://images-static.nykaa.com/creatives/f1453d0e-4287-4214-81a8-ffd5ddd9e937/default.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/creatives/ca6834b2-873d-472a-a1bd-e95c2063d624/default.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/creatives/6908c7a1-0dc5-447d-8396-200bd11b3a51/default.jpg?tr=w-1200,cm-pad_resize")
    }
    else if(category==="skin"){
      setFirstimg("https://images-static.nykaa.com/uploads/2a03a56a-c8ac-4c42-96f6-9930c6928def.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/uploads/95033d95-c22d-4f11-9f71-add67db61481.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/a45e7ece-6896-451f-82a0-a28fda84e784.jpg?tr=w-1200,cm-pad_resize")
    }
    else if(category==="hair"){
      setFirstimg("https://images-static.nykaa.com/creatives/c8b49dc6-4f5c-41a0-8d48-ceddf6b06fff/default.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/creatives/321b7657-0476-49a1-be5e-9a0fd3844b0c/default.png?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/creatives/8b26a02f-6b54-437c-b0d0-d263a7ba6a5c/default.jpg?tr=w-1200,cm-pad_resize")
    }
    else if(category==="appliance"){
      setFirstimg("https://images-static.nykaa.com/creatives/318a24af-84f2-4417-b2e5-0be9bc0d279b/default.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/creatives/62477ca4-2025-4cc0-8a01-aec7c606fcb6/default.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/f0dfb4fa-1537-4db5-977b-180197e1e26f.png?tr=w-1200,cm-pad_resize")
    }
    else if(category==="bath&body"){
      setFirstimg("https://images-static.nykaa.com/creatives/c74ffc62-bbda-4699-9312-e60825f51062/default.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/creatives/0a57a827-8b95-462e-8254-df1691fd8400/default.png?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/creatives/e0fb89e9-e234-417f-8535-86033946c6e2/default.jpg?tr=w-1200,cm-pad_resize")
    }
    else if(category==="natural"){
      setFirstimg("https://images-static.nykaa.com/uploads/8f4f53e2-0bb8-4318-9075-e4072f7713b0.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/uploads/2b562840-70c4-4eb6-b465-879487110a25.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/f3d93a48-43fa-4a30-b546-98faf39d0492.jpg?tr=w-1200,cm-pad_resize")
    }
    else if(category==="mom&baby"){
      setFirstimg("https://images-static.nykaa.com/uploads/dcb6ad9b-6c69-41db-b8ec-5f43a8f38cb2.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/uploads/16cf25a0-7945-4049-9faa-911519e6c762.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/9ed52de3-6bfb-44e2-8a7e-0106079ecb36.jpg?tr=w-1200,cm-pad_resize")
    }
    else if(category==="health&wellness"){
      setFirstimg("https://images-static.nykaa.com/uploads/0fa19682-882d-4e50-a905-fe5c711ce040.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/uploads/945c2ae2-9068-428b-87f8-cb503f99b5cf.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/fe3ae51e-028c-47f2-91b8-ddbec3f11e7e.jpg?tr=w-1200,cm-pad_resize")
    }
    else if(category==="men"){
      setFirstimg("https://images-static.nykaa.com/uploads/efea5238-bb55-407b-a1f0-5a134b5376cf.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/uploads/8fa1b0a2-80af-4f6d-85f6-9af376c2abf6.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/0fa19682-882d-4e50-a905-fe5c711ce040.jpg?tr=w-1200,cm-pad_resize")
    }
    else if(category==="fragrance"){
      setFirstimg("https://images-static.nykaa.com/uploads/b8f89063-3b06-400e-9ffc-a5a69df62720.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/uploads/5e09e725-e0fe-4ee7-9a83-6dee7793176c.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/5642d441-3632-4529-86a8-3febfbeac3b9.jpg?tr=w-1200,cm-pad_resize")
    }
    else if(category==="popups"){
      setFirstimg("https://images-static.nykaa.com/uploads/984941d7-1f52-4fe1-8504-e19777cd8142.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/uploads/5788cf03-3d8c-4ea5-b073-0b3d7f75beff.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/aa8563b3-f20f-4541-a1f3-a7bace46ade0.jpg?tr=w-1200,cm-pad_resize")
    }

    axios.get(`https://periwinkle-sheep-hem.cyclic.app/products?page=${page}`)
    .then((res)=>{
      setTpage(res.data.totalPages)
      setProducts(res.data.data)})
    .catch((err)=>console.log(err))

   },[category,page])

  return (
    <div className={styles.allpage_maindiv}>
      <div className={styles.allpage_swiper_div}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{width:"100%"}} src={firstimg} alt="first" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:"100%"}} src={secondimg} alt="first" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:"100%"}} src={thirdimg} alt="first" />
        </SwiperSlide>
        </Swiper>

      </div>
        
      <div className={styles.allpage_product_with_sorting}>
      <div className={styles.allpage_sorting_div}>
         <div>
           <h1>Sort by...</h1>
           <div>
             <h2>By Name</h2>
             
             <input id='AtoZ' type="checkbox" name='A to Z'  onChange={(e)=>console.log(e)}/> 
             <label for="AtoZ">A to Z </label>
             <label>
             <input type="checkbox" name='Z to A'  onChange={(e)=>console.log(e.target.checked)} /> Z to A 
             </label>

           </div>
         </div>
      </div>


        <div className={styles.allpage_allproducts_div} >
          <div className={styles.allpage_allproducts}>
           {products?.map((el,i)=>(
             <Oneitem key={i} item={el} />
           ))}
           </div>
           <div className={styles.allpage_prev_and_next_div}>
           <button disabled={page===1} onClick={()=>setPage(page-1)}>Previous</button>
           <button disabled={page===tpage} onClick={()=>setPage(page+1)}>Next</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default AllPages;