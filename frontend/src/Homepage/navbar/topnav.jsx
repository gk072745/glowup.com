// import { useState, useEffect } from "react";
import "../navbar/navbar.css";
import { IoIosApps, IoMdGift } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";


const Topnavbar = () => {
 

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












