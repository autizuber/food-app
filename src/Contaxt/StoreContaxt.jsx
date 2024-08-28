// import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets/assets";

// export const StoreContaxt = createContext(null);

// const StoreContextProvider = (props) =>{

//   const [cartItem,setCartItem] = useState({})

//   const addItem = (itemId)=>{
//       if(!cartItem[itemId]){
//         setCartItem((prev)=>({...prev,[itemId]:1}))
//       }else {
//         setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//       }
//   }

//   const removeItem = (itemId)=>{
//       setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//   }

//   useEffect(()=>{
//     console.log(cartItem)
//   },[cartItem])

//   const contextValue={
//       food_list,
//       cartItem,
//       addItem,
//       removeItem,
//       setCartItem

//   }

//   return(
//     <StoreContaxt.Provider value={contextValue}>
//       {props.children}
//     </StoreContaxt.Provider>
//   )
// }

// export default StoreContextProvider;

// StoreContextProvider.js
// StoreContaxt.jsx
import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets/assets";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});

  const addItem = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeItem = (itemId) => {
    if (cartItem[itemId] > 0) {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const GetTotalAmount = () => {
    let totalAmount = 0;
    for (var item in cartItem) {
      if (cartItem[item] > 0) {
        var itemInfo = food_list.find((product) => product._id == item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItem,
    addItem,
    removeItem,
    GetTotalAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
