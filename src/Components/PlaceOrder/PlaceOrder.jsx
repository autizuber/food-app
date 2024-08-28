import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Contaxt/StoreContaxt";
const PlaceOrder = () => {
  const { GetTotalAmount } = useContext(StoreContext);
  return (
    <div>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-filed">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="text" placeholder="Email adress" />
          <input type="text" placeholder="Street" />
          <div className="multi-filed">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="multi-filed">
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="Contry" />
          </div>
          <input type="text" placeholder="phone" />
        </div>
        <div className="place-order-right">
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
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
