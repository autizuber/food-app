import React from "react";
import "./Hader.css";

const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: "header_img.png" }}>
      {/* <div className="shade"></div> */}
      <div className="header-container">
        {/* <img src="header_img.png" alt="" /> */}
        <h2>Order your favourite food here</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse
          doloremque consequuntur error, ad nulla repudiandae enim distinctio
          eveniet earum?
        </p>
        <button>View More</button>
      </div>
    </div>
  );
};

export default Header;
