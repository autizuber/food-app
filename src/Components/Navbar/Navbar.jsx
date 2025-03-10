import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Contaxt/StoreContaxt";

const Navbar = ({ setShowPop }) => {
  const [menu, setMenu] = useState("home");
  const { GetTotalAmount } = useContext(StoreContext);
  return (
    <div className="Navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/home"
          onClick={() => setMenu("home")}
          className={menu == "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu == "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-downlode"
          onClick={() => setMenu("mobile-app")}
          className={menu == "mobile-app" ? "active" : ""}
        >
          Mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu == "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={GetTotalAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowPop(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
