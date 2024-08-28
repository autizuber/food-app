// import React, { useContext } from 'react'
// import "./FoodItems.css"
// import { assets } from '../../assets/assets/assets'
// import { StoreContext } from '../../Contaxt/StoreContaxt';

// const FoodItems = ({id,name,price,description,image}) => {

//   const [cartItem,addItem,removeItem] = useContext(StoreContaxt)

//   return (
//     <div className='food-item'>
//         <div className='food-item-img-container'>
//           <img src={image} className='food-item-img' alt="" />
//           {
//               !cartItem[id]
//               ?<img className='add' onClick={()=>addItem(id)} src={assets.add_icon_white} alt="" />
//               :<div className='food-item-conter'>
//                   <img onClick={()=>removeItem(id)} src={assets.remove_icon_red} alt="" />
//                   <p>{cartItem[id]}</p>
//                   <img onClick={()=>addItem(id)} src={assets.add_icon_green} alt="" />
//               </div>
//           }
//         </div>
//         <div className='food-item-info'>
//             <div className='food-item-name-rating'>
//                 <p>{name}</p>
//                 <img src={assets.rating_starts} alt="" />
//             </div>
//             <p className="food-item-desc">{description}</p>
//             <p className='food-item-price'>${price}</p>
//         </div>
//     </div>
//   )
// }

// export default FoodItems
// import React, { useContext } from 'react';
// import { StoreContext } from '../../Context/StoreContext'; // Adjust the path as needed
// import { assets } from '../../assets/assets/assets'; // Adjust the path as needed
// import './FoodItems.css';

// FoodItems.jsx
import React, { useContext } from "react";
import { assets } from "../../assets/assets/assets"; // Adjust the path as needed
import { StoreContext } from "../../Contaxt/StoreContaxt"; // Adjust the path as needed
import "./FoodItems.css";

const FoodItems = ({ id, name, price, description, image }) => {
  const { cartItem, addItem, removeItem } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} className="food-item-img" alt="" />
        {!cartItem[id] ? (
          <img
            className="add"
            onClick={() => addItem(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeItem(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => addItem(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItems;
