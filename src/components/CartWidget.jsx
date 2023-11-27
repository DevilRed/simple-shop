import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/cart">
        Cart
        <span className="numerito">{cartQuantity()}</span>
      </Link>
    </div>
  );
};
