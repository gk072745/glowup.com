import { useState, useEffect } from "react";
import { Nav} from "./Styled-Navbar";
import { listItems, data } from "./data";



import "./nav3.css";
import { Link } from "react-router-dom";

export default function Navbardrop() {

  let [index, setIndex] = useState(8);

  const mouseOver = (e) => {
    e.currentTarget.classList.add("height");
  };
  // console.log(name);

  const mouseOut = (e) => {
    e.currentTarget.classList.remove("height");
  };

  document.body.addEventListener("click", function (e) {
    let article = document.querySelector("#search-results");
    if (e.target.parentElement.id === "search-results") {
      article.style.visibility = "visible";
    } else {
      article.style.visibility = "hidden";
    }
    // console.log(e.target.parentElement);
  });

  useEffect(() => {
    document.querySelectorAll("li")[index].classList.add("li");
    return () => {
      document.querySelectorAll("li")[index].classList.remove("li");
    };
  });

 
  return (
    <>
      <Nav className="mobilenot">
        <section id="bottom" onMouseOver={mouseOver} onMouseOut={mouseOut}>
          <ul>
            {listItems.map((i, index) => (
              <Link to="/products" key={i.toString()}>
                <li key={i.toString()} id={index} onMouseOver={() => setIndex(index)}>
                  {i}
                </li>
              </Link>
            ))}
          </ul>
          <article onMouseOut={mouseOut}>
            {data[index].map((items, i) => (
              <div key={i.toString()}>
                {items.map((item, ind) => (
                  <Link to="/products">
                    <p key={ind.toString()} className={ind === 0 ? "pink-para" : ""}>
                      <Link to="/products">
                        {item}
                      </Link>
                    </p>
                  </Link>
                ))}
              </div>
            ))}
          </article>
        </section>
      </Nav>
    </>
  );
}