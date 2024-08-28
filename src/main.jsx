import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./Contaxt/StoreContaxt.jsx";
import FilterCompo from "./Components/ReactIntern/ReactIntern.jsx";

// const dropdownContent = [
//   { label: "Date of registration" },
//   { label: "Vendor Sorce" },
//   { label: "Rating" },
//   { label: "Status" },
//   { label: "Type of business" },
//   { label: "location" },
// ];

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      {/* <FilterCompo
        filterBtn="Filter"
        dropdownContent={dropdownContent}
        droupDownTitle="Refine by"
      /> */}
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
