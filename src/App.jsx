import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";

import Footer from "./Components/Footer/Footer";
import LoginPop from "./Components/LoginPop/LoginPop";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";

const App = () => {
  const [showPop, setShowPop] = useState(false);
  return (
    <>
      {showPop ? <LoginPop setShowPop={setShowPop} /> : <></>}
      <div className="app">
        <Navbar setShowPop={setShowPop} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeOrder" element={<PlaceOrder />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
