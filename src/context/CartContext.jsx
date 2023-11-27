import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item, cantidad) => {
    const addedItem = { ...item, cantidad };
    const cartCopy = [...cart];

    const isInCart = cartCopy.find((product) => product.id === addedItem.id);
    if (isInCart) {
      isInCart.cantidad += cantidad;
      setCart(cartCopy);
    } else {
      setCart([...cart, addedItem]);
    }
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        cartQuantity,
        totalPrice,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
