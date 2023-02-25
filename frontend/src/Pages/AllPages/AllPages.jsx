import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "./AllPages.module.css"
import axios from "axios"
import Oneitem from '../../components/OneItem/Oneitem';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'



const AllPages = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [firstimg, setFirstimg] = useState("");
  const [secondimg, setSecondimg] = useState("");
  const [thirdimg, setThirdimg] = useState("");
  const [page, setPage] = useState(1);
  const [tpage, setTpage] = useState(0);
  const [query,setQuery] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    if (category === "makeup" || category ==="Face") {
      setFirstimg("https://images-static.nykaa.com/creatives/f1453d0e-4287-4214-81a8-ffd5ddd9e937/default.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/creatives/ca6834b2-873d-472a-a1bd-e95c2063d624/default.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/creatives/6908c7a1-0dc5-447d-8396-200bd11b3a51/default.jpg?tr=w-1200,cm-pad_resize")
    }
    else if (category === "skin" || category === "Skin") {
      setFirstimg("https://images-static.nykaa.com/uploads/2a03a56a-c8ac-4c42-96f6-9930c6928def.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/uploads/95033d95-c22d-4f11-9f71-add67db61481.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/a45e7ece-6896-451f-82a0-a28fda84e784.jpg?tr=w-1200,cm-pad_resize")
    }
    else if (category === "hair" || category === "Hair") {
      setFirstimg("https://images-static.nykaa.com/creatives/c8b49dc6-4f5c-41a0-8d48-ceddf6b06fff/default.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/creatives/321b7657-0476-49a1-be5e-9a0fd3844b0c/default.png?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/creatives/8b26a02f-6b54-437c-b0d0-d263a7ba6a5c/default.jpg?tr=w-1200,cm-pad_resize")
    }
    else if (category === "appliance" || category === "Appliance") {
      setFirstimg("https://images-static.nykaa.com/creatives/318a24af-84f2-4417-b2e5-0be9bc0d279b/default.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/creatives/62477ca4-2025-4cc0-8a01-aec7c606fcb6/default.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/f0dfb4fa-1537-4db5-977b-180197e1e26f.png?tr=w-1200,cm-pad_resize")
    }
    else if (category === "bath&body" || category ==="Bath & Body") {
      setFirstimg("https://images-static.nykaa.com/creatives/c74ffc62-bbda-4699-9312-e60825f51062/default.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/creatives/0a57a827-8b95-462e-8254-df1691fd8400/default.png?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/creatives/e0fb89e9-e234-417f-8535-86033946c6e2/default.jpg?tr=w-1200,cm-pad_resize")
    }
    else if (category === "natural" || category === "Natural") {
      setFirstimg("https://images-static.nykaa.com/uploads/8f4f53e2-0bb8-4318-9075-e4072f7713b0.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/uploads/2b562840-70c4-4eb6-b465-879487110a25.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/f3d93a48-43fa-4a30-b546-98faf39d0492.jpg?tr=w-1200,cm-pad_resize")
    }
    else if (category === "mom&baby" || category === "Mom & Baby") {
      setFirstimg("https://images-static.nykaa.com/uploads/dcb6ad9b-6c69-41db-b8ec-5f43a8f38cb2.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/uploads/16cf25a0-7945-4049-9faa-911519e6c762.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/9ed52de3-6bfb-44e2-8a7e-0106079ecb36.jpg?tr=w-1200,cm-pad_resize")
    }
    else if (category === "health&wellness" || category === "Health & Wellness") {
      setFirstimg("https://images-static.nykaa.com/uploads/0fa19682-882d-4e50-a905-fe5c711ce040.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/uploads/945c2ae2-9068-428b-87f8-cb503f99b5cf.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/fe3ae51e-028c-47f2-91b8-ddbec3f11e7e.jpg?tr=w-1200,cm-pad_resize")
    }
    else if (category === "men") {
      setFirstimg("https://images-static.nykaa.com/uploads/efea5238-bb55-407b-a1f0-5a134b5376cf.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/uploads/8fa1b0a2-80af-4f6d-85f6-9af376c2abf6.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/0fa19682-882d-4e50-a905-fe5c711ce040.jpg?tr=w-1200,cm-pad_resize")
    }
    else if (category === "fragrance" || category === "Fragnance") {
      setFirstimg("https://images-static.nykaa.com/uploads/b8f89063-3b06-400e-9ffc-a5a69df62720.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/uploads/5e09e725-e0fe-4ee7-9a83-6dee7793176c.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/5642d441-3632-4529-86a8-3febfbeac3b9.jpg?tr=w-1200,cm-pad_resize")
    }
    else if (category === "popups") {
      setFirstimg("https://images-static.nykaa.com/uploads/984941d7-1f52-4fe1-8504-e19777cd8142.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/uploads/5788cf03-3d8c-4ea5-b073-0b3d7f75beff.jpg?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/uploads/aa8563b3-f20f-4541-a1f3-a7bace46ade0.jpg?tr=w-1200,cm-pad_resize")
    }
    else {
      setFirstimg("https://images-static.nykaa.com/creatives/c8b49dc6-4f5c-41a0-8d48-ceddf6b06fff/default.jpg?tr=w-1200,cm-pad_resize")
      setSecondimg("https://images-static.nykaa.com/creatives/321b7657-0476-49a1-be5e-9a0fd3844b0c/default.png?tr=w-1200,cm-pad_resize")
      setThirdimg("https://images-static.nykaa.com/creatives/8b26a02f-6b54-437c-b0d0-d263a7ba6a5c/default.jpg?tr=w-1200,cm-pad_resize")
    }

    
    axios.get(`https://periwinkle-sheep-hem.cyclic.app/products?page=${page}${searchParams.get("category") ? `&category=${searchParams.get("category")}` : ``}${searchParams.get("brand") ? `&brand=${searchParams.get("brand")}` : ``}${searchParams.get("sort") ? `&sort=${searchParams.get("sort")}` : ``}${searchParams.get("order") ? `&order=${searchParams.get("order")}` : ``} `)  
      .then((res) => {
        console.log(res);
        setTpage(res.data.totalPages)
        setProducts(res.data.data)
      })
      .catch((err) => console.log(err))
      
      
    }, [category, page, query])
    
    // search params set in url 
    const SortBy = (head,val, e) => {
      let searchobj = {};
      if(searchParams.get("category")){
        searchobj.category = searchParams.get("category")
      }
      if(searchParams.get("brand")){
        searchobj.brand = searchParams.get("brand")
      }
      if(searchParams.get("sort")){
        searchobj.sort = searchParams.get("sort") 
      }
      if(searchParams.get("order")){
        searchobj.order = searchParams.get("order")
      }


      if(e.target.checked===true){
        if(head==="price"){
           searchobj.sort = "price";
           val==="asc" ? searchobj.order = "asc" : searchobj.order = "dsc"
        }
        else if(head==="rating"){
          searchobj.sort = "rating";
           val==="asc" ? searchobj.order = "asc" : searchobj.order = "dsc"
        }
        else if(head==="category"){
          searchobj.category = val
        }
        else if(head==="brand"){
          searchobj.brand = val
        }
      }
      else if(e.target.checked===false){
        if(head==="price"){
          if(searchobj.sort===head && searchobj.order===val){
             delete searchobj.sort;
             delete searchobj.order;
          }
       }
       else if(head==="rating"){
        if(searchobj.sort===head && searchobj.order===val){
          delete searchobj.sort;
          delete searchobj.order;
       }
       }
       else if(head==="category"){
         if(searchobj.category===val){
          delete searchobj.category;
         }
       }
       else if(head==="brand"){ 
        if(searchobj.brand===val){
          delete searchobj.brand;
         }
       }
      }
      setSearchParams(searchobj)
      setQuery(!query);
  }

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
            <img style={{ width: "100%" }} src={firstimg} alt="first" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={secondimg} alt="first" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={thirdimg} alt="first" />
          </SwiperSlide>
        </Swiper>

      </div>

      <div className={styles.allpage_product_with_sorting}>
        <div className={styles.allpage_sorting_div}>
           
          <div>
            <h1 className={styles.allpage_sorting_div_heading}>Sort by...</h1>
           
          <Accordion  
          defaultIndex={matchMedia("(max-width: 900px)").matches ? null : [0,1,2,3]}
          allowMultiple={matchMedia("(max-width: 900px)").matches ? false : true} 
          allowToggle={matchMedia("(max-width: 900px)").matches ? true : false} >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    By Price
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='asc' type="checkbox" onChange={(e) => SortBy("price","asc", e)} />
                <label for="asc">Low To High </label> <br />
                </div>
                <div className={styles.allpage_sorting_inputs}>                <input className={styles.allpages_checkbox} id='dec' type="checkbox" onChange={(e) => SortBy("price","dsc", e)} />
                <label for="dec" >High To Low</label>
                </div>

              </AccordionPanel>
            </AccordionItem>
          
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    By Rating
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='ascr' type="checkbox" onChange={(e) => SortBy("rating","asc", e)} />
                <label for="ascr">Low To High </label> <br />
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='decr' type="checkbox" onChange={(e) => SortBy("rating","dsc", e)} />
                <label for="decr" >High To Low</label>
                </div>
              </AccordionPanel>
            </AccordionItem>
          
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    By Category
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='lipstick' type="checkbox" onChange={(e) => SortBy("category","LIPSTICK", e)} />
                <label for="lipstick">Lipstick </label> <br />
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='powder' type="checkbox" onChange={(e) => SortBy("category","POWDER", e)} />
                <label for="powder" >Powder</label> <br />
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='liquid' type="checkbox" onChange={(e) => SortBy("category","LIQUID", e)} />
                <label for="liquid" >Liquid</label> <br />
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='pencil' type="checkbox" onChange={(e) => SortBy("category","PENCIL", e)} />
                <label for="pencil" >Pencil</label> <br />
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='cream' type="checkbox" onChange={(e) => SortBy("category","CREAM", e)} />
                <label for="cream" >Cream</label> <br />
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='Lip_Stain' type="checkbox" onChange={(e) => SortBy("category","LIP_STAIN", e)} />
                <label for="Lip_Stain" >Lip_Stain</label> <br />
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='lip_gloss' type="checkbox" onChange={(e) => SortBy("category","LIP_GLOSS", e)} />
                <label for="lip_gloss" >Lip_Gloss</label> <br />
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='palette' type="checkbox" onChange={(e) => SortBy("category","PALETTE", e)} />
                <label for="palette" >Palette</label> <br />
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='mineral' type="checkbox" onChange={(e) => SortBy("category","MINERAL", e)} />
                <label for="mineral" >Mineral</label> <br />
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='gel' type="checkbox" onChange={(e) => SortBy("category","GEL", e)} />
                <label for="gel" >Gel</label>
                </div>
              </AccordionPanel>
            </AccordionItem>
          
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    By Brand
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='colourpop' type="checkbox" onChange={(e) => SortBy("brand","COLOURPOP", e)} />
                <label for="colourpop">Colourpop</label> 
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='almay' type="checkbox" onChange={(e) => SortBy("brand","ALMAY", e)} />
                <label for="almay">Almay</label> 
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='anna_sui' type="checkbox" onChange={(e) => SortBy("brand","ANNA SUI", e)} />
                <label for="anna_sui">Anna Sui</label> 
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='benefit' type="checkbox" onChange={(e) => SortBy("brand","BENEFIT", e)} />
                <label for="benefit">Benefit</label> 
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='elf' type="checkbox" onChange={(e) => SortBy("brand","E.L.F.", e)} />
                <label for="elf">E.L.F.</label> 
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='annabelle' type="checkbox" onChange={(e) => SortBy("brand","ANNABELLE", e)} />
                <label for="annabelle">Annabelle</label> 
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='Cargo_cosmetics' type="checkbox" onChange={(e) => SortBy("brand","CARGO COSMETICS", e)} />
                <label for="Cargo_cosmetics">Cargo Cosmetics</label> 
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='dr_haushchka' type="checkbox" onChange={(e) => SortBy("brand","DR. HAUSCHKA", e)} />
                <label for="dr_haushchka">Dr. Haushchka</label> 
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='nyx' type="checkbox" onChange={(e) => SortBy("brand","NYX", e)} />
                <label for="nyx">NYX</label> 
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='sante' type="checkbox" onChange={(e) => SortBy("brand","SANTE", e)} />
                <label for="sante">Sante</label> 
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='maybelle' type="checkbox" onChange={(e) => SortBy("brand","MAYBELLINE", e)} />
                <label for="maybelle">Maybelline</label> 
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='covergirl' type="checkbox" onChange={(e) => SortBy("brand","COVERGIRL", e)} />
                <label for="covergirl">Covergirl</label> 
                </div>
                <div  className={styles.allpage_sorting_inputs}>
                <input className={styles.allpages_checkbox} id='REVLON' type="checkbox" onChange={(e) => SortBy("brand","REVLON", e)} />
                <label for="REVLON">Revlon</label> 
                </div>
                

              </AccordionPanel>
            </AccordionItem>
          </Accordion>      
          </div>
        </div>


        <div className={styles.allpage_allproducts_div} >
          <div className={styles.allpage_allproducts}>
            {products?.map((el, i) => (
              <Oneitem key={i} item={el} />
            ))}
          </div>
          <div className={styles.allpage_prev_and_next_div}>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
            <button disabled={page === tpage} onClick={() => setPage(page + 1)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllPages;


 