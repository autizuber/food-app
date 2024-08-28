import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Contaxt/StoreContaxt";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const context = useContext(StoreContext);
  const { food_list, cartItem, removeItem, GetTotalAmount } = context;
  const naviget = useNavigate();
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div key={item._id} className="cart-item-title cart-items-item">
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>{item.price * cartItem[item._id]}</p>
                  <p className="remove" onClick={() => removeItem(item._id)}>
                    x
                  </p>
                </div>
                <hr></hr>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="card-bottom">
        <div className="card-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{GetTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivary Free</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>{GetTotalAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => naviget("/placeOrder")}>
            PROSIDE TO CHECKOUT
          </button>
        </div>
        <div className="cart-promo">
          <p>If You Have a Promo Code Enter Hear</p>
          <div className="promo-code-input">
            <input type="text" placeholder="Enter Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
