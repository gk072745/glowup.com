// import { useState, useEffect } from "react";
import "../navbar/navbar.css";
import { IoIosApps, IoMdGift } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
// import Buttonsign from "./button/buttonsignin";
// import { FaAlignJustify } from "react-icons/fa";
// import "../Navbar3/navbar3.css";
// import { Nav, Aside } from "../Navbar3/Styled-Navbar";
// import { listItems, data } from "../Navbar3/data";

const Topnavbar = () => {
  // let count = useSelector((state) => state.count);
  // let name = useSelector((state) => state.name);
  // let [index, setIndex] = useState(8);
  // let [result, setResult] = useState([]);
  // const mouseOver = (e) => {
  //   e.currentTarget.classList.add("height");
  // };
  // console.log(name);

  // const mouseOut = (e) => {
  //   e.currentTarget.classList.remove("height");
  // };

  // document.body.addEventListener("click", function (e) {
  //   let article = document.querySelector("#search-results");
  //   if (e.target.parentElement.id === "search-results") {
  //     article.style.visibility = "visible";
  //   } else {
  //     article.style.visibility = "hidden";
  //   }
  //   // console.log(e.target.parentElement);
  // });

  // useEffect(() => {
  //   document.querySelectorAll("li")[index].classList.add("li");
  //   return () => {
  //     document.querySelectorAll("li")[index].classList.remove("li");
  //   };
  // });

  // const inpHandler = (e) => {
  //   let article = document.querySelector("#search-results");
  //   let newArr = [];
  //   for (let i = 0; i < allProducts.length; i++) {
  //     if (allProducts[i].name.toLowerCase().includes(e.target.value)) {
  //       newArr.push(allProducts[i]);
  //     }
  //   }
  //   if (newArr.length && e.target.value) {
  //     setResult(newArr);
  //     article.style.visibility = "visible";
  //   } else {
  //     article.style.visibility = "hidden";
  //   }
  // };
  // const modalClose = (e) => {
  //   e.target.parentElement.style.transform = "translateX(-100%)";
  // };
  // const modalOpen = () => {
  //   let ele = document.querySelector("#hidden-menu");
  //   ele.style.transform = "translateX(0)";
  // };

  // const submenuHandler = (e) => {
  //   if (e.target.classList.contains("main-para")) {
  //   }
  //   if (e.target.classList.contains("sub-para")) {
  //   }
  // };

  return (
    
    
      <>
        <div className="upper">
          <div style={{ fontWeight: "600" }}>
            BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals
          </div>
          <div className="box">
            <div className="inside1">
              <div>
                <i>
                  <IoIosApps />
                </i>
              </div>
              <span >Get Apps</span>
            </div>
            <div className="inside1">
              <div>
                <i>
                  <IoMdGift />
                </i>
              </div>
              <span >Gift Card</span>
            </div>
            <div className="inside1">
              <div>
                <i>
                  <GrLocation />
                </i>
              </div>
              <span >Location</span>
            </div>
            <div className="inside1">
              <div>
                <i>
                  <MdAdminPanelSettings />
                </i>
              </div>
              <span><Link className="new" to="/admin">Admin</Link></span>
            </div>
          </div>
        </div>
      </>

  );
};

export default Topnavbar;












