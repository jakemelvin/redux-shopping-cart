import "./Cart.css";

import React from "react";
import { cartActions } from "./../store/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const incrementCartItem = () => {
    dispatch(cartActions.addToCart({ name, id, price }));
  };
  const decrementCartItem = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decrementCartItem}>
        -
      </button>
      <button className="cart-actions" onClick={incrementCartItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;
