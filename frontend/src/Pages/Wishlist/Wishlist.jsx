import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import Cookie from "js-cookie"
import SingleWishItem from "../../components/SingleWishItem/SingleWishItem"
import Styles from "./wishlist.module.css"
import wishlist from "../../Assets/wishlist.png"

const Wishlist = () => {
    const [data, setData] = useState([]);
    const [state,setState] = useState(true)
    const { login, isLoggedin, isAdmin } = useSelector((store) => store.userManager)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://periwinkle-sheep-hem.cyclic.app/wishlist`, {
            headers: {
                "Authorization": Cookie.get("jwt_token")
            }
        })
            .then((res) => {
                setData(res.data.data)
                // console.log(res.data.data)
            })
            .catch((err) => console.log(err))
    }, [state])

    if (data.length === 0) {
        return (
            <div className={Styles.emptyWishlistMain}>
              <div className={Styles.emptyYourWishlist}>
                <h2>Your Wishlist</h2>
              </div>
              <img src={wishlist} alt="" />
              <p>Uh Oh!</p>
              <p>Your Wishlist Seems to be Empty!</p>
              <button>start Shoping</button>
            </div>
          );
    }

    return (
        <div className={Styles.wishlist_main_div}>
        <div className={Styles.wishlist_data}>
            {data.map((el) => {
                return <SingleWishItem curstate={state} changeState={setState} wish={el} />
            })}
        </div>
        </div>
    )
}

export default Wishlist;